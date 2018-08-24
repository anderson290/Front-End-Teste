//função para esconder as respostas
$(window).on('load',function(){
   $(".esconder").hide();
   
});
//função para exibir as respostas
$(document).ready(function(){
	
	$(".exibir").click(function(){
		$(this).toggleClass("active").next().slideToggle("slow");
		return false;
	});
});