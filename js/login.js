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
			var success=data.status;						
			for(var i=0;i<json1.length;i++){
				console.log(json1[i].userName);
			}
		},
	});
})