Dim oShell

If Msgbox("Ÿ�̸Ӱ� �������ϴ�!"&VBCRLF&"�ٽ� �Ͻðڽ��ϱ�?",vbOKCancel,"�ð�����!") = vbOK Then

Set oShell = WScript.CreateObject ("WSCript.shell")

oShell.Run "Ÿ�̸ӽ���.bat"

Else

End If 