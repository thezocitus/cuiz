<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
	${member.member_Nick}
	<h2><img src="${avatar}"/></h2>
	
	<h1>아이디 : ${member.member_ID}</h1>
	<h2>연속출석일 : ${member.member_Conatt}</h2>
	<h2>혀재 코인 : ${member.member_Coin}</h2>
</body>
</html>