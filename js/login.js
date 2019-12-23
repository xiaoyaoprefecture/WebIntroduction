$('#loginbtn').click(function(){
	var userAccount=$('#UserAccount').val();
	var userPassword=$('#UserPassword').val();
	console.log("输入的账号密码是:"+userAccount+"---"+userPassword)
	$.ajax({
		type:"post",
		url:"http://localhost:8088/Introduction_Java/login",
		async:true,
		data:{
			'userAccount':userAccount,
			'password':userPassword,					
		},
		dataType:'json',
		success:function(data){
			var json1=data.data;
			//判断后台返回的status，然后做出相关反应			
			var status=data.status;	
			console.log(status);
			//如果是success就进入主页面
			if(status=="success"){
				//将用户名存储到localStorage中，便于下一个页面取值
				localStorage.name=json1[0].userName;
				localStorage.userAccount=json1[0].userAccount;
				window.location.href="homePage.html";				
			}else{
				alert("账号密码不正确，请重新登录");
			}
			
		},
	});
})