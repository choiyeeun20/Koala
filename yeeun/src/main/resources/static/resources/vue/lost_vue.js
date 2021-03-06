"use strict"
var user = user || {} // var는 전역을 뜻하는 표시, user는 네임스페이스 {}는 제이슨 {}에 제이슨을 넣으면 제이슨이 된다...
user = (()=>{
	const WHEN_ERROR = `호출하는 JS 파일을 찾지 못했습니다`
	let admin_vue
	let init = () =>{
		admin_vue = `/resources/vue/admin_vue.js`
		onCreate()
	}
	let onCreate = () =>{ //객체를 만듦 
		$.when(
				$.getScript(admin_vue)
		).done(()=>{
			setContentView()
			$('#register_a').css('cursor','pointer').click(e=>{
			$('#content').empty()
			$('#content').html(adminVue.join())
			$(`<input type="button"/>`) 
			.attr({value:'등록하기'})
			.css({width: '200px', height: '100px', 'font-size': '30px'})
			.appendTo('#button_box')
			.click(e=>{
				alert('등록버튼 클릭')
			})
			$(`<input type="button"/>`)
			.attr({value:'취소'})
			.css({width: '200px', height: '100px', 'font-size': '30px'})
			.appendTo('#button_box')
			.click(e=>{
				alert('취소버튼 클릭')
				
			})
		})
		$('#aceess_a').css('cursor','pointer').click(e=>{
			e.preventDefault()
			$('#content').empty()
			$('#content').html(adminVue.login())
			$(`<input type="button"/>`)
			.attr({value:"로그인"})
			.appendTo('#login_box')
			.click(e=>{
				e.preventDefault()
			 location.href = "/admin"
				/*$.ajax({
					url:'',
					type:'post',
					data:JSON.stringify({
						userid : $('#userid').val(),
						passwd : $('#passwd').val()
					}),
					dataType:'json',
					contentType:'application/json',
					success: d=>{
						if(d==='SUCCESS'){
							location.href = "/admin"
						}
					
					},
					error: (r,x,e)=>{
						alert(r.status)
					}
				})
				*/
			})
			$(`<input type="button"/>`)
			.attr({value:"취소"})
			.appendTo('#login_box')	
			.click(e=>{
				e.preventDefault()
			})
			
		})
		
		}).fail(()=>{
			alert('WHEN_ERROR')
		
		})
		
	}
	let setContentView = () =>{ //객체가 만들어지면 보여줌 처음엔 텅빈상태
		 $('#kcdc').css({ width: '80%', height: '900px' }).addClass('border_black center')
	     $('#tr_1').css({ width: '80%', height: '50px' }).addClass('border_black center')
	     $('#menu').css({ width: '80%', height: '50px' }).addClass('border_black center')
	     $('#kcdc td').addClass('border_black', 'width_full')

	}
	return {init} //즉시실행 함수
	
})()