@echo off

echo clearing dist directory
if exist ".\dist\" (
    rmdir /s /q ".\dist\"
)

echo compiling scripts
call npx tsc