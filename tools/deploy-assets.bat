@echo off

call ".\tools\pak-assets.bat"

echo removing old mod pak
del "%Game_Path%\Content\Paks\%Mod_Name%.pak" /q

echo copying over new mod pak
copy ".\assets\temp\%Mod_Name%.pak" "%Game_Path%\Content\Paks\"