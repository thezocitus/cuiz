<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
<c:import url="../temps/header_css.jsp"></c:import>

<style>
	.color-white{
	color : white;
	}
	#frm{
		display : inline-block;
		margin-top : 10%;
		margin-left : 20%;
	}
	.input-join{
	width: 300px;
	}
	#update_profile{
		position : absolute;
		display : inline-block;
		margin-top : 10%;
		margin-left : 10%;
	}
	.yes{
		color : seagreen;
	}	
	.no{
		color : crimson;
	}
</style>

</head>

<body>
	<c:import url="../temps/header.jsp"></c:import>
	<div>
	<form id="frm" action="update" method="POST"
		enctype="multipart/form-data">
		<div>
			<h2>회원정보 수정</h2>
		</div>
		<div>
			<label for="ID" class="form-label color-white">아이디</label> <input
				type="TEXT" id="ID" class="form-control input-join" name="member_ID"
				readonly value="${member.member_ID}">
			<div id="id_check"></div>
		</div>
		<div class="mb-3">
			<label for="PW" class="form-label color-white">비밀번호를 입력해주세요</label> <input
				type="password" id="PW" class="form-control input-join"
				name="member_Password" aria-describedby="passwordHelpBlock">
			<div id="passwordHelpBlock" class="form-text">비밀번호는
				특수문자(~,!,@,#,$,%,^,&,*),숫자와 대,소문자를 <br> 포함한 8-20글자 이내로 입력해주세요</div>
			<div id="password_check"></div>
			<div></div>
			<label for="PW2" class="form-label color-white">비밀번호 확인</label> <input
				type="password" id="PW2" class="form-control input-join">
			<div id="password2_check"></div>
		</div>
		<div class="mb-3">
			<label for="email" class="form-label color-white">Email
				수정해주세요</label> <input type="email" class="form-control input-join"
				id="email" name="member_Email" placeholder="name@example.com"
				value="${member.member_Email }">
		</div>
		<div>
			<label for="nick" class="form-label color-white">닉네임</label> <input
				type="text" name="member_Nick" id="nick" readonly
				class="form-control input-join" value="${member.member_Nick}">
			<div id="nick_check"></div>
		</div>
		<div>
			<label for="phone" class="form-label color-white">휴대폰 번호를
				입력해주세요</label><br> <input type="text" id="phone"
				name="member_PhoneNumber" class="form-control input-join"
				placeholder="-를 제외하고 입력해주세요" value="${member.member_PhoneNumber}">
		</div>
		<div>
			<br>
			
			<br>
		</div>
		<!-- <div  class="input-group mb-3 input-join">
			<input type="file" id="profile" class="form-control"
				name="member_Profile" style="visibility: hidden;" >
		</div> -->
		<div >
			<h2 class="color-white">현재 프로필사진</h2>
			<img src="${avatar}" style="width : 200px"><br><br><br>
			<label for="profile" class="color-white">프로필 사진 변경</label><br>
			<input id="profile_change" name="member_Profile" type="file" class="form-control input-join">
		</div>
		<button id="join-btn">회원정보 수정</button>
	</form>
		
		</div>
	<c:import url="../temps/footer.jsp"></c:import>
	<script type="text/javascript" src= "/resources/member/update.js"  ></script>
</body>
</html>