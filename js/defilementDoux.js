$(document).ready(function(){

    $('a.logo').on('click', function(evt){

    evt.preventDefault(); 

 	var target = $(this).attr('href');

if($(window).scrollTop() + $(window).height() >= $(document).height()) {
 	$('html, body')
    .stop()
	.animate({scrollTop: 0}, 800 );
}
else {
	$('html, body')
    .stop()
	.animate({scrollTop: $(target).offset().top}, 1300 );
}

});
});