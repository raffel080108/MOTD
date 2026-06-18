@echo off

call ".\tools\load-config.bat"

echo clearing release directory
if exist ".\release\temp" (
    rmdir /s /q ".\release"
)

if not exist ".\release\temp" (
    mkdir ".\release\temp"
)

call ".\tools\compile-scripts.bat"
echo copying scripts
xcopy ".\dist" ".\release\temp\js" /S /E /I /Y

call ".\tools\pak-assets.bat"
echo copying pak
copy ".\assets\temp\%Mod_Name%.pak" ".\release\temp"

echo copying additional release files
xcopy ".\tools\release-files" ".\release\temp" /S /E /I /Y

powershell -Command "Compress-Archive -Path '.\release\temp\*' -DestinationPath '.\release\%Mod_Name%-%Mod_Version%.zip' -Force"