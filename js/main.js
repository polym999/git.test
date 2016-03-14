// JavaScript Document// JavaScript Document
// JavaScript Document
$(document).ready(function(event) {

 /*   function fontSize() {
        var size = 300;
        var width = 2000 ;
        var fontSize = 16;
		var fontSize1 = 30;
	    var fontSize2 = 15;
		var fontSize3 = 39;
		var fontSize4 = 16;
		//var line_height = 45;

        var bodyWidth = $(window).width();
        var multiplier = (bodyWidth / width);
        if ($(window).width() >= size){
            fontSize = Math.floor(fontSize * multiplier);
			fontSize1 = Math.floor(fontSize1 * multiplier);
		    fontSize2 = Math.floor(fontSize2 * multiplier);
			fontSize3 = Math.floor(fontSize3 * multiplier);
			fontSize4 = Math.floor(fontSize4 * multiplier);
			
        }

        $('section p').css({fontSize: fontSize+'px'});
		$('.lm_desc').css({fontSize: fontSize1+'px'});
		$('.lm_desc + p').css({fontSize: fontSize2+'px'});
		$('.desc_service').css({fontSize: fontSize3+'px'});
		$('.desc_service + p').css({fontSize: fontSize4+'px'});
    }
		
    $(function() { fontSize(); });
  $(window).resize(function() {
		 fontSize();
  });*/
    $(window).bind('DOMMouseScroll', function(e){
        if(e.originalEvent.detail > 0) {
            $('.left_page').css({left:"70%"}) ;
            $('nav').css('background-color','#000');
			$('nav ul').css('padding','0');
		   
        } else {
            $('.left_page').css({left:"100%"}) ;
            $('nav').css('background-color','');
			$('nav ul').css('padding','');
        }
        return false;
    });


    $(window).bind('mousewheel', function(e){
        if(e.originalEvent.wheelDelta < 0) {
            $('.left_page').css({left:"70%"}) ;
            $('nav').css('background-color','#000');
			$('nav ul').css('padding','0');
			$('.cl').css('opacity','0');
			$('nav ul li').removeClass();
			$('nav ul li').next().eq(0).addClass('a_active');
		
			
        } else {
            $('.left_page').css({left:"100%"}) ;
            $('nav').css('background-color','');
			$('nav ul').css('padding','');
			$('.cl').css('opacity','');
			$('nav ul li').removeClass();
			$('nav ul li').prev().eq(0).addClass('a_active');
        }
        return false;
    });

$('nav ul li').click(function(){
	$('nav ul li').removeClass();
	$(this).addClass('a_active');
})
 $('.next_clos').click(function(){
     $('.left_page').toggleClass('open_left');
     $(this).toggleClass('close_next');
     $('.wite_bg').toggleClass('wite_line');

 });


});//en redi






