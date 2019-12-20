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
			console.log(data);
		},
	});
})