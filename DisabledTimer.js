function DisabledTimer(dom){
	if($(dom).data('timer') != undefined){
		var timerNum = $(dom).data('timer');
	}else{
		var timerNum = 30;
	}
	$(dom).prop('disabled',true);
	$(dom).data('text',$(dom).text());
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
