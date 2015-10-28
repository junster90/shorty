$(document).ready(function(){

	$("#welcome").css('visibility','visible').hide().delay(700).fadeIn(1000);
	$("#desc").css('visibility','visible').hide().delay(1000).fadeIn(1000);


	$("#box1").mouseenter(function(){
		$("#box2").fadeIn(500);
	});

	$("#box2").mouseenter(function(){
		$("#box3").fadeIn(500);
	});
});