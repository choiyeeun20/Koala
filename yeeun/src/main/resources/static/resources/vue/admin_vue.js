"use strict"
var adminVue = {
		join : ()=>{
			return 	` <table id="kcdc">
	        <tr>
	            <td id="content" colspan="4">
	                <table id="admin" style="width: 80%; height:80%; margin: 0 auto">
				    <tr style="width: 80%;height: 50px;">
				      <td rowspan="4">
				        <img src="https://u5b8t9w6.stackpathcdn.com/wp-content/uploads/2014/12/profile-default-300x242.jpg">
				      </td>
				      <td style="height: 20%">
				        <label>이름</label>
				      </td>
				      <td>
				        <input id="name" type="text" />
				      </td>
				    </tr>  
				    <tr style="height: 20%">
				      <td >
				        <label>직급</label>
				      </td>
				      <td>
				        <input id="position" type="text" />
				      </td>
				    </tr>
				    <tr style="height: 20%">
				      <td>
				        <label>이메일</label>
				      </td>
				      <td>
				        <input id="email" type="text" />
				      </td>
				    </tr>
				    <tr style="height: 20%">
				      <td>
				        <label>전화번호</label>
				      </td>
				      <td>
				        <input id="phoneNumber" type="text" />
				      </td>
				    </tr>
				    <tr style="height: 20%">
				      <td colspan="3" id="button_box">
				       
				       
				      </td>
				    </tr>
				  </table>
	            </td>
	        </tr>
	    </table>
				`
		},
		login: ()=>{
			return `
			<article>
			   <form id="login_box">
			   	<label>ID </label> <br>
			   	<input id="userid" type="text"> <br>
			   	<label>PASSWORD</label><br>
			   	<input id="passwd" type="text"><br>
			   
			   </form>
			  </article>
		`
		}
} 