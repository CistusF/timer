@echo off
setlocal

::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
:LOOP
set /p YN=NODE.JS가 설치 되어있나요? (Y/N)

if /i "%YN%" == "y" goto YES
if /i "%YN%" == "n" goto NO

goto LOOP
::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::


:YES
node 타이머.js

:NO
start https://nodejs.org/dist/v10.14.1/node-v10.14.1-x64.msi
cls
echo node.js 설치기를 설치중입니다.
echo node.js 를 설치후 다시 진행해주세요!
pause
goto QUIT
pause