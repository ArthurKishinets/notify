$(document).ready(function() {
	var $left = $('.left2'), $right = $('.right2'),
	$bandage = $('.bandage'), $carousel = $('.carousel'),
	left = 0,
	carWidth = $carousel.width(),
	offset = 0, offsetRight, offsetLeft;


	$right.on('click', function() {

		// if tape is`t too far right and not animated
		if ( -left < 1140 - carWidth && !$bandage.is(':animated') ) {
			// length of righter tape
			offsetRight = (1140 - carWidth) - (-left) - 100; 

			$bandage.animate({
				'left': '-=' + 90 + 'px'
			}, 400, function() {
				left = $bandage.css('left').slice(0, -2);
				// if we went too far away right return tape
				offsetRight < 0 && !$bandage.is(':animated') ? $bandage.animate({ 'left': '-=' + (offsetRight + 10) + 'px' }) : 0;
			});
		}
	});

	$left.on('click', function() {

		// if we are not at the start position and bandage is`t animated
		if ( left < 0 && !$bandage.is(':animated') ) {

			$bandage.animate({
		
				'left': '+=100px'
			}, 400, function() {
				left = $bandage.css('left').slice(0, -2);
				// if we went too far left, return tape righter
				left > 0 ? $bandage.animate({ 'left': '-=' + left + 'px' }) : 0;
			});
		}
	});


	// adding some animation



	var $header = $('header .content'), $section1Part = $('.section1 .part'),
	section1Top = $('.section1').offset().top, $leftSide = $('.section2 .left.side'),
	$rightSide = $('.section2 .right.side'), section2Top = $('.section2').offset().top,
	section3Top = $('.section3').offset().top;
	
	var offsetTopAnimation = {
		'position': 'relative',
		'top': '800px'
	}, zeroTopOffset = {
		'top': '0'
	}, offsetLeftAnimation = {
		'position': 'relative',
		'left': '-800px'
	}, zeroLeftOffset = {
		'position': 'relative',
		'left': '0'
	}, offsetRightAnimation = {
		'position': 'relative',
		'right': '-800px'
	}, zeroRightOffset = {
		'position': 'relative',
		'right': '0'
	};


	// animating header

	$header.css(offsetTopAnimation);
	$section1Part.css(offsetTopAnimation);
	$leftSide.css(offsetLeftAnimation);
	$rightSide.css(offsetRightAnimation);
	$('.section3 .content').css(offsetTopAnimation);

	$header.delay(150).animate(zeroTopOffset, 'easy');

	// animating sections
	//alert($section1Part.offset().top);
	$(document).on('scroll', function() {
		
		windowTop = $(window).scrollTop();
		/*console.log( $(window).scrollTop() );
		console.log( $('.section1').offset().top );*/
		if ( windowTop + 300 >= section1Top ) {
			$section1Part.animate(zeroTopOffset, 'easy');
		}

		if ( windowTop + 300 >= section2Top ) {
			$leftSide.animate(zeroLeftOffset, 'easy');
			$rightSide.animate(zeroRightOffset, 'easy');
		}

		if ( windowTop + 300 >= section3Top ) {
			$('.section3 .content').animate(zeroTopOffset);
		}

	});

});