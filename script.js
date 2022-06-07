$(function(){
	$('.section-title').click(function(){
		$(this).toggleClass('selected');
		$(this).next().slideToggle();
	});
});