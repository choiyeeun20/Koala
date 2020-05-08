  
"use strict"
 
var userVue = {
		detail:()=>{
			return `<table id="user_detail">
				<tr>
				<td rowspan="7"><img alt="" src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRje0rBnasQOngqgNoX3kmsXXKx-_81bcPiUDX1GBtFGvwuJNxg&usqp=CAU"></td>
				<td id="text_index"><a>이름</a></td>
				<td id="text_input"><span id="name" style="width:250px;height:40px"></td>
			</tr>
			<tr>
				<td><a>아이디</a></td>
				<td><span id= "userid" style="width:250px;height:40px"></td>
			</tr>
			<tr>
				<td><a>주민번호</a></td>
				<td><span id="ssn" style="width:250px;height:40px"></td>
			</tr>
			<tr>
				<td><a>주소</a></td>
				<td><span id="addr" style="width:250px;height:40px"></td>
			</tr>
			<tr>
				<td><a>이메일</a></td>
				<td><span id="email" style="width:250px;height:40px"></td>
			</tr>
			<tr>
				<td><a>전화번호</a></td>
				<td><span id="phoneNumber" style="width:250px;height:40px"></td>
			</tr>
			<tr>
				<td><a>등록일</a></td>
				<td><span id="registerDate" style="width:250px;height:40px"></td>
			</tr>
		
		</table>`
		}
}