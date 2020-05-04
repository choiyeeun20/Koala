"use strict"

const userVue = {
		
		userListForm : ()=>{
			return `
			<div id="content_container">
				<table id="member_list">
					<tr id="table_head">
						<td class="label" id="Num">No</td>
						<td class="label" id="userId">아이디</td>
						<td class="label" id="userName">이름</td>
						<td class="label" id="userSSN">주민번호</td>
						<td class="label" id="email">이메일</td>
						<td class="label" id="phoneNumber">휴대폰</td>
						<td class="label" id="registerDate">등록일</td>
					</tr>					
				</table>
			</div>
			`
			
		},
			
		