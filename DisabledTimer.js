//按钮禁用倒计时
function DisabledTimer(dom){
	if($(dom).data('timer') != undefined){
		var timerNum = $(dom).data('timer');	//读取预设值
	}else{
		var timerNum = 30;	//默认30秒
	}
	//预存按钮初始文字，设置禁用状态
	$(dom).prop('disabled',true);
	$(dom).data('text',$(dom).text());

	//开始倒计时
	var timer;
	timer = window.setInterval(function(){
		timerNum --;
		if(timerNum == 0){
			$(dom).prop('disabled',false);
			window.clearInterval(timer);
			$(dom).html($(dom).data('text'));
		}else{
			$(dom).html(timerNum);
		}
		console.log(timerNum);
	},1000)
}
