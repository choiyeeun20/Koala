"use strict"
var admin = admin ||{}
admin = (()=>{
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다`
	let user_vue
	let lost_vue
	let init = () => {
		user_vue = `/resources/vue/user_vue.js`
		lost_vue = `/resources/vue/lost_vue.js`	
		onCreate()
	}
	let onCreate = () => {
		$.when(
				$.getScript(user_vue),
				$.getScript(lost_vue)

		).done(()=>{
			setContentView()
			$('#userList')
				.css('cursor','pointer')
				.click(e=>{
				e.preventDefault()
				})
			$.getJSON('/users',d=>{
				$('#total_count').text('총회원수  : '+d.length)
				$.each(d,(i,j)=>{
					$(` <tr>
	                        <td>
	                        	<span>${i+1}</span>
	                        </td>
	                        <td>
	                        	<span>${j.userid}</span>
	                        </td>
	                        <td>
	                        	<span id="user_`+(i+1)+`"></span>
	                        </td>
	                        <td>
	                        	<span>${j.ssn}</span>
	                        </td>
	                        <td>
	                        	<span>${j.email}</span>
	                        </td>
	                        <td>
	                        	<span>${j.phoneNumber}</span>
	                        </td>
	                        <td>
	                        	<span>${j.registerDate}</span>
	                        </td>
	                        </tr>`).appendTo('#userData')
	                        
	                        $(`<a>${j.name}</a>`)
	                        .css({cursor: 'pointer',color: 'blue'})
	                        .appendTo("#user_"+(i+1))
	                        .click(e => {
	                        	$('#userData').empty()
	                        	$(userVue.detail())
	                        	.appendTo('#userData')
	                        	$.getJSON(`/users/${j.userid}`,d=>{
	                        		$('#userid').text(d.userid)
	                        		$('#name').text(d.name)
	                        		$('#ssn').text(d.ssn)
	                        		$('#addr').text(d.addr)
	                        		$('#addr').text(d.addr)
	                        		$('#email').text(d.email)
	                        		$('#phoneNumber').text(d.phoneNumber)
	                        		$('#registDate').text(d.registerDate)
	                   
	                        		
	                        	})
	                        	
	                     }) 
				})//each
							
			})//getJSON
			$('#lost')
				.css('cursor','pointer')
				.click(e=>{
				e.preventDefault()
				$('#userData').empty()
				$(lostVue.lostList())
				.appendTo('#userData')
				$.getJSON('/losts',d=>{
				$.each(d,(i,j)=>{
					$(` <tr>
	                        <td>
	                        	<span>${i+1}</span>
	                        </td>
	                        <td>
	                        	<span id=${j.id}></span>
	                        </td>
	                        
	                        <td>
	                        	<span>${j.name}</span>
	                        </td>
	                        <td>
	                        	<span>${j.date}</span>
	                        </td>
	                        <td>
	                        	<span>${j.category}</span>
	                        </td>
	                        <td>
	                        	<span>${j.location}</span>
	                        </td>
	                        </tr>`).appendTo('#lostList')
	                        $(`<a>${j.id}</a>`)
	                        .css({cursor: 'pointer',color: 'blue'})
	                        .appendTo(`#${j.id}`)
	                        .click(e => {
	                        	$('#userData').empty()
	                        	$(lostVue.lostDetail())
	                        	.appendTo('#userData')
	                        	$.getJSON(`/losts/${j.id}`,d=>{
	                        		$('#id').text(`${j.id}`)
	                        		$('#name').text(`${j.name}`)
	                        		$('#date').text(`${j.date}`)
	                        		$('#category').text(`${j.category}`)
	                        		$('#location').text(`${j.location}`)
	                        	})
	                        })
					})
				})
			})
			
			
		}).fail(()=>{
			alert('WHEN_ERROR')
			
		})
	
		
	}
	let setContentView = () => {
	    $('#userData tr').first().css({'background-color':'yellow'})
	    
	    }
	
	return {init}
})()