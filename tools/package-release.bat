@echo off

call ".\tools\load-config.bat"

echo clearing release directory
if exist ".\release\temp" (
    rmdir /s /q ".\release"
)

if not exist ".\release\temp" (
    mkdir ".\release\temp"
)

REM call ".\tools\compile-scripts.bat"
echo copying scripts
xcopy ".\dist" ".\release\temp\MOTD\Scripts" /S /E /I /Y

REM call ".\tools\pak-assets.bat"
echo copying pak
copy ".\assets\temp\%Mod_Name%.pak" ".\release\temp"

echo copying additional release files
xcopy ".\tools\release-files" ".\release\temp" /S /E /I /Y

mkdir ".\release\temp\MOTD\Config"

echo generating empty configs
for /F "tokens=*" %%g in (.\tools\config\mod-configs.ini) do (
    echo {} > ".\release\temp\MOTD\Config\%%g.json"
    echo generated %%g.json
)

powershell -Command "Compress-Archive -Path '.\release\temp\*' -DestinationPath '.\release\%Mod_Name%-%Mod_Version%.zip' -Force"