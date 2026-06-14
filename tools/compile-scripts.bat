@echo off

echo clearing dist directory
if exist ".\dist\" (
    rmdir /s /q ".\dist\"
)

echo compiling scripts
call npx tstl
xcopy "src\*.lua" "dist\" /S /Y /D