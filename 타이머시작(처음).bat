@echo off
setlocal

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:LOOP
set /p YN=NODE.JS�� ��ġ �Ǿ��ֳ���? (Y/N)

if /i "%YN%" == "y" goto YES
if /i "%YN%" == "n" goto NO

goto LOOP
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


:YES
node Ÿ�̸�.js

:NO
start https://nodejs.org/dist/v10.14.1/node-v10.14.1-x64.msi
cls
echo node.js ��ġ�⸦ ��ġ���Դϴ�.
echo node.js �� ��ġ�� �ٽ� �������ּ���!
pause
goto QUIT
pause