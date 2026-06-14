@echo off

call ".\tools\load-config.bat"

echo cooking UE project
"%Engine_Path%\Engine\Binaries\Win64\UnrealEditor.exe" "%Project_Path%\RogueCore.uproject" -run=cook -targetplatform=Windows

echo resetting package-input folder
rmdir ".\assets\temp\package-input" /s /q
mkdir ".\assets\temp\package-input\Content"

for /F "tokens=*" %%g in (.\tools\config\pak-whitelist.ini) do (
    if exist "%Project_Path%\Saved\Cooked\Windows\RogueCore\Content\%%g\" (
        echo copying folder %%g
        robocopy "%Project_Path%\Saved\Cooked\Windows\RogueCore\Content\%%g" ".\assets\temp\package-input\Content\%%g" /MIR /ns /nc /nfl /ndl /np /njh /njs
    ) else if exist "%Project_Path%\Saved\Cooked\Windows\RogueCore\Content\%%g" (
        echo copying file %%g
        echo F|xcopy "%Project_Path%\Saved\Cooked\Windows\RogueCore\Content\%%g" ".\assets\temp\package-input\Content\%%g"
    ) else (
        echo could not find %%g inside RogueCore\Content
    )
)

for /F "tokens=*" %%g in (.\tools\config\pak-blacklist.ini) do (
    if exist "%Project_Path%\Saved\Cooked\Windows\RogueCore\Content\%%g\" (
        echo removing folder %%g
        rmdir ".\assets\temp\package-input\Content\%%g" /s /q
    ) else if exist "%Project_Path%\Saved\Cooked\Windows\RogueCore\Content\%%g" (
        echo removing file %%g
        del ".\assets\temp\package-input\Content\%%g" /q
    ) else (
        echo could not find %%g inside RogueCore\Content
    )
)

echo making input text file
set "Input_Target=%cd%\assets\temp\package-input"
set "List_File=%cd%\assets\temp\input.txt"

type nul > "%List_File%"

for /R "%Input_Target%" %%G in (*.*) do (
    set "Full_Path=%%G"
    
    setlocal enabledelayedexpansion
    set "Relative_Path=!Full_Path:%Input_Target%\=!"
    
    set "Relative_Path=!Relative_Path:\=/!"
    
    echo "!Full_Path!" "../../../RogueCore/!Relative_Path!" >> "%List_File%"
    endlocal
)

echo packaging files
"%Engine_Path%\Engine\Binaries\Win64\UnrealPak.exe" "%cd%\assets\temp\%Mod_Name%.pak" -Create="%List_File%"

echo Successfully packaged
