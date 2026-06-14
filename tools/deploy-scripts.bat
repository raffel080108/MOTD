@echo off

call ".\tools\load-config.bat"
call ".\tools\compile-scripts.bat"

set "Deploy_Target=%Game_Path%\Binaries\Win64\ue4ss\Mods\%Mod_Name%"

echo clearing target scripts folder
if exist "%Deploy_Target%\Scripts\" (
    rmdir /s /q "%Deploy_Target%\Scripts\"
)

echo copying scripts to target
xcopy /Y /E ".\dist\*" "%Deploy_Target%\Scripts\"