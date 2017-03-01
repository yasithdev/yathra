$(window).ready(function() {
	$(".spinner").fadeOut(2000);
	$(".header-content").fadeIn(2000);
});

$('#icon1').click(function()
{
	$('#overlaypage').css('display', 'block');
	$('#pops').css('display', 'block');
	$('#closebtn').css('display', 'block');
	TweenMax.from($('#pops'), 2, { scaleX:0.5, scaleY:0.5, alpha:0, ease:Elastic.easeOut});
	TweenMax.from($('#closebtn'), 1 , {scaleX:0, scaleY:0, ease:Elastic.easeOut});
});

$('#icon2').click(function()
{
	$('#overlaypage').css('display', 'block');
	$('#aboutpage').css('display', 'block');
	$('#closebtn').css('display', 'block');
	TweenMax.from($('#aboutpage'), 2, { scaleX:0.5, scaleY:0.5, alpha:0, ease:Elastic.easeOut});
	TweenMax.from($('#closebtn'), 1 , {scaleX:0, scaleY:0, ease:Elastic.easeOut});
});


$('#icon3').click(function()
{
	$('#overlaypage').css('display', 'block');
	$('#contactpage').css('display', 'block');
	$('#closebtn').css('display', 'block');
	TweenMax.from($('#contactpage'), 2, { scaleX:0.5, scaleY:0.5, alpha:0, ease:Elastic.easeOut});
	TweenMax.from($('#closebtn'), 1 , {scaleX:0, scaleY:0, ease:Elastic.easeOut});
});


//Click the close button
$('#closebtn').click(function()
{
	$('#overlaypage').css('display', 'block');
	$('#pops').css('display', 'none');
	$('#contactpage').css('display', 'none');
	$('#newspage').css('display', 'none');
	$('#aboutpage').css('display', 'none');
	$('#closebtn').css('display', 'none');
	$('#overlaypage').css('display', 'none');
});

$('#overlaypage').click(function()
{
	$('#pops').css('display', 'none');
	$('#overlaypage').css('display', 'none');
	$('#contactpage').css('display', 'none');
	$('#newspage').css('display', 'none');
	$('#aboutpage').css('display', 'none');
	$('#closebtn').css('display', 'none');
});

//button popup

$('#icon1').mouseover(function(){TweenMax.to($('#icon1'), 1 , {scaleX:1.15, scaleY:1.15, ease:Elastic.easeOut});});
$('#icon2').mouseover(function(){TweenMax.to($('#icon2'), 1 , {scaleX:1.15, scaleY:1.15, ease:Elastic.easeOut});});
$('#icon3').mouseover(function(){TweenMax.to($('#icon3'), 1 , {scaleX:1.15, scaleY:1.15, ease:Elastic.easeOut});});
$('#icon4').mouseover(function(){TweenMax.to($('#icon4'), 1 , {scaleX:1.1, scaleY:1.15, ease:Elastic.easeOut});});
$('#closebtn').mouseover(function(){TweenMax.to($('#closebtn'), 1 , {scaleX:1.35, scaleY:1.35, ease:Strong.easeOut});});

$('#icon1').mouseout(function(){TweenMax.to($('#icon1'), 1 , {scaleX:1, scaleY:1, ease:Elastic.easeOut});});
$('#icon2').mouseout(function(){TweenMax.to($('#icon2'), 1 , {scaleX:1, scaleY:1, ease:Elastic.easeOut});});
$('#icon3').mouseout(function(){TweenMax.to($('#icon3'), 1 , {scaleX:1, scaleY:1, ease:Elastic.easeOut});});
$('#icon4').mouseout(function(){TweenMax.to($('#icon4'), 1 , {scaleX:1, scaleY:1, ease:Elastic.easeOut});});
$('#closebtn').mouseout(function(){TweenMax.to($('#closebtn'), 1 , {scaleX:1, scaleY:1, ease:Strong.easeOut});});