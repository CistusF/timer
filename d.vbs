Dim oShell

If Msgbox("타이머가 끝났습니다!"&VBCRLF&"다시 하시겠습니까?",vbOKCancel,"시간종료!") = vbOK Then

Set oShell = WScript.CreateObject ("WSCript.shell")

oShell.Run "타이머시작.bat"

Else

End If 