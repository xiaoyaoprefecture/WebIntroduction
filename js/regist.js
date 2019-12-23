$('#registBtn').click(function(){
	var userName=$('#userName').val();
	var pwd1=$('#pwd1').val();
	var pwd2=$('#pwd2').val();
	var sex=$('input[name="sex"]:checked').val();
	console.log("我输出的是:"+userName+"--"+pwd1+"--"+sex);
	$.ajax({
		type:"post",
		url:"http://localhost:8088/Introduction_Java/addUser",
		async:true,
		beforeSend:function(){
			if(pwd1!=pwd2){
				alert("密码不一致");
				return false;
			}else{
				return true;
			}
		},
		data:{
			'userName':userName,
			'password':pwd1,
			'sex':sex,
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
				localStorage.name=userName;
				localStorage.userAccount=json1[0].userAccount;
				window.location.href="homePage.html";				
			}else{
				alert("该账号已经被使用了");
			}
		},
	});
})