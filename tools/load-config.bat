for /f "usebackq tokens=1,2 delims==" %%a in (".\tools\config\config.ini") do (
    set "%%a=%%b"
)
