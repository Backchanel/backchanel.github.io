var $first = $('section.first');
var $second = $('section.second');
var $third = $('section.third');

var $pager = $('.pager');
var $pagera = $('.pager a');

var $iphone = $('.iphone');
var $logos = $('.logo-s');
var $logoi = $('.logo-i');
var $logof = $('.logo-f');
var $sl1 = $('.first .sign .line1');
var $sl2 = $('.first .sign .line2');
var $sitems1 = $('.first .sign .line1 i');
var $sitems2 = $('.first .sign .line2 i');
var $form1 = $('.first-form');
var $coming = $('.coming');

//second
var $sSign = $('.second .sign span');
var $form2 = $('.second .second-form');

//third
var $tSign = $('.third .sign span');
var $tSignSmall = $('.third .sign span small');
var $form3 = $('.third .third-form');

$(window).resize(function() { 
	var wH = $(window).height();
	var wW = $(window).width();
	
	$('.viewport').width(wW).height(wH);
	
	if (wH < 950) {
	    $('body').addClass('sh');
	    
	    if (wW < 1480) {
	    	$('body').addClass('sw');
	    	if (wW < 650) {
			    $('body').addClass('mobile');
			    $('.first-form input').css({
				    'width' : $('.first-form').width() - (75+155+30)
			    });
			    $('.second-form input').css({
				    'width' : $('.second-form').width() - (75+155+30)
			    });
			    $('.third-form input').css({
				    'width' : $('.third-form').width() - (75+155+30)
				});
		    }
	    } else {
	   		$('body').removeClass('sw');
	   		$('body').removeClass('mobile');
	    }
    
    } else {
	    $('body').removeClass('sh');
	    $('body').removeClass('mobile');
    }
});
$(window).resize();


$(document).bind(
	'touchmove',
	function(e) {
	e.preventDefault();
	}
);


function arrow() { 
	$('.scroll-down').addClass('act');
	setTimeout(function() { 
		$('.scroll-down').removeClass('act');
		setTimeout(function() { 
			arrow();
		}, 500);
	}, 500);
}

function secondSlides() { 
	var $c = $('.iphone .card');
	var $c1 = $('.iphone .c1');
	var $c2 = $('.iphone .c2');
	var $c3 = $('.iphone .c3');
	var $ca1 = $('.slide-cap .c1');
	var $ca2 = $('.slide-cap .c2');
	var $ca3 = $('.slide-cap .c3');
	var delay = 2000;
	var delay2 = 300;
	
	$ca1.removeClass('hided');
	setTimeout(function() { 
		$ca1.addClass('moving');
	}, delay2);
	
	setTimeout(function() { 
		$c1.addClass('p1');
		$c2.addClass('p0');
		$c3.addClass('pm1');
		
		$ca1.addClass('hided2');
		$ca2.removeClass('hided');
		setTimeout(function() { 
			$ca2.addClass('moving');
		}, delay2);
		
		setTimeout(function() { 
			$c1.addClass('p2');
			$c2.addClass('p1');
			$c3.addClass('p0');
			
			$ca2.addClass('hided2');
			$ca3.removeClass('hided');

		}, delay);
	}, delay);
}
function secondSlidesReset() { 
	var $c1 = $('.iphone .c1');
	var $c2 = $('.iphone .c2');
	var $c3 = $('.iphone .c3');
	var $ca1 = $('.slide-cap .c1');
	var $ca2 = $('.slide-cap .c2');
	var $ca3 = $('.slide-cap .c3');

	
	$ca1.addClass('hided'); 
	$ca1.removeClass('moving');
	$c1.removeClass('p1');
	$c2.removeClass('p0');
	$c3.removeClass('pm1');
	$ca1.removeClass('hided2');
	$ca2.addClass('hided');
	$ca2.removeClass('moving');
	$c1.removeClass('p2');
	$c2.removeClass('p1');
	$c3.removeClass('p0');
	$ca2.removeClass('hided2');
	$ca3.addClass('hided');
}

function initFirst() { 
	$logos.removeClass('hided');
	setTimeout(function() { 
		$logoi.removeClass('hided');
		setTimeout(function() { 
			$iphone.removeClass('ip-hided');
			$sl1.removeClass('hided');
			setTimeout(function() { 
				$sitems1.removeClass('hided');
				setTimeout(function() { 
					$sl2.removeClass('hided');
					setTimeout(function() { 
						$sitems2.removeClass('hided');
						setTimeout(function() { 
							$logof.removeClass('hided');
							$form1.removeClass('hided');
							$coming.removeClass('hided');
							setTimeout(function() {
								$('.scroll-down').removeClass('hided');
							}, 500);
						}, 1000);
					}, 1000);
				}, 1000);
			}, 1000);	
		}, 600);
	}, 300);		
}

function initSecond() { 
	$sSign.removeClass('hided');
	$form2.removeClass('hided');
	secondSlides();
}

function initThird() { 
	$tSign.removeClass('hided');
	$tSignSmall.removeClass('hided');
	setTimeout(function() {
		$form3.removeClass('hided');
	}, 1000);
}


$('body').preload(function() { 
	$(window).resize();
	
	arrow();
	$first.removeClass('hided');
	setTimeout(function() {
		initFirst();
	}, 500);
	
	
	$('.next-s, .prev-s, .pager a').click(function() { 
		var $btn = $('.next-s');
		var $prev = $('.prev-s');
		var target = $(this).attr('href');
		

		if(target == '#first') {
			$second.addClass('hided');
			$third.addClass('hided');
			$second.removeClass('visible');
			$third.removeClass('visible');
			
			$first.removeClass('hided');
			$first.addClass('visible');
			
			$pager.removeClass('white');
			$pagera.removeClass('active');
			$('#first-t').addClass('active');
			
			$btn.attr('href', '#second');
			$prev.attr('href', '#');
			
			$iphone.addClass('ip-land');
			$iphone.removeClass('ip-second')
				   .removeClass('ip-third')
				   .removeClass('ip-cards');
			setTimeout(function() {
				secondSlidesReset();
			}, 100);
		}
		if(target == '#second') {
			secondSlidesReset();
			$third.addClass('hided');
			$first.addClass('hided');
			$third.removeClass('visible');
			$first.removeClass('visible');
			
			$second.removeClass('hided');
			$second.addClass('visible');
			
			$pager.removeClass('white');
			$pagera.removeClass('active');
			$('#second-t').addClass('active');
			
			$iphone.addClass('ip-second');
			$iphone.removeClass('ip-land')
				   .removeClass('ip-third')
			
			$btn.attr('href', '#third');
			$prev.attr('href', '#first');
			
			setTimeout(function() {
				$iphone.addClass('ip-cards');
				initSecond();
			}, 1300);
		}
		if(target == '#third') {
			$iphone.removeClass('ip-cards');
		
			$btn.attr('href', '#');
			$prev.attr('href', '#second');
			
			$pagera.removeClass('active');
			$('#third-t').addClass('active');
			
			setTimeout(function() {
				$second.addClass('hided');
				$first.addClass('hided');
				$second.removeClass('visible');
				$first.removeClass('visible');
				
				$pager.addClass('white');
				
				$third.removeClass('hided');
				$third.addClass('visible');
				$iphone.addClass('ip-third');
				$iphone.removeClass('ip-second')
				   	   .removeClass('ip-land')
				   	   .removeClass('ip-cards');
				secondSlidesReset();
				setTimeout(function() {
					initThird();					
				}, 1000);
			}, 200);
		}
		
		return false;
	});
	
	$(function(){
	  (function oneWheel(){
		$('.scrollable').one('mousewheel',function(event, delta) {
			event.preventDefault();
			if(delta < 0)
				$('.next-s').click()
			else
				$('.prev-s').click()
			setTimeout(oneWheel,1500)
			return false
		})
	  })()
	});
	$('.scrollable').swipe( {
	  swipeUp:function(event, direction, distance, duration) {
	    $('.next-s').click();
	  },
	  swipeDown:function(event, direction, distance, duration) {
	    $('.prev-s').click();
	  },
	  click:function(event, target) { 
	  },
	  threshold:100,
	  allowPageScroll:"vertical"
	});
	$('.stsm').click(function() { 
		$('.p-trigger-n').click();
	});
	$('.scroll-down').click(function() { 
		$('.next-s').click();
	});

});