$(document).ready(function () {

	var sliderOwl = $('#owl-slider1');
	var sliderOw2 = $('#owl-slider2');

	sliderOwl.owlCarousel({
		rtl: true,
		loop: true,
		margin: 20,
		nav: false,
        dots: false,
		responsive: {
			0: {
				items: 1,
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});


	sliderOw2.owlCarousel({
	    rtl:true,
	    loop:true,
	    margin:10,
	    nav:false,
	    slideBy:1,
		  responsive: {
		    0: {
		      dotsEach: 5,
		      items: 1
		    },
		    600: {
		      dotsEach: 3,
		      items: 3
		    },
		    1200: {
		      dotsEach: 2,
		      items: 5
		    }
		  }
	});


	$('.customNextBtn').click(function() {
    	sliderOwl.trigger('next.owl.carousel');
	})

	$('.customPrevBtn').click(function() {
	    sliderOwl.trigger('prev.owl.carousel');
	})

	// trigger product slider 

	$('.customNextBtn2').click(function() {
    	sliderOw2.trigger('next.owl.carousel');
	})

	$('.customPrevBtn2').click(function() {
    	sliderOw2.trigger('prev.owl.carousel');
	})			

	$('.header-content').css({
		"background": "url('./img/main-img.jpg')",
		"background-size": "cover",
		"background-repeat": "no-repeat"
	});
	$('.desktop_btn').on('click', function () {
		$('.screens').addClass('desktop').removeClass('tablet mobile');
		//		$('iframe').animate({
		//			width: '100%',
		//
		//
		//		});



	});

	$('.tablet_btn').on('click', function () {

		$('.screens').addClass('tablet').removeClass('desktop mobile')
		//		$('.tablet div').animate({
		//			width: '26vw',
		//			height: '37.5vw'
		//		}, 400);
		//		$('iframe').animate({
		//			width: '22.9vw',
		//			height: '31.2vw',
		//			marginTop: '3vw'
		//		}, 600);


	});


	$('.mobile_btn').on('click', function () {

		$('.screens').addClass('mobile').removeClass('desktop tablet');
		//		$('.mobile div').animate({
		//			width: '16vw',
		//			height: '32.5vw'
		//		}, 400);
		//		$('iframe').animate({
		//			width: '14vw',
		//			height: '26vw',
		//			marginTop: '2.5vw'
		//		}, 200);



	});


	$('.choose-color li i').on('click', function () {

		$('main').attr('data-dfault-color', $(this).data('color'));


	});

	$('.screens_btn li').click(function () {
		$(this).addClass('active').siblings().removeClass('active');
	});

	$('.builder iframe').click(function () {
		$(this).addClass('desktop').siblings().removeClass('active');
	});

	$(".web-part__i .x").click(function () {
		$(this).parents('.web-part').fadeOut();

	});


	$(".i2").click(function () {
		$(this).toggleClass('icon-eye-1').toggleClass('icon-eye-slash');
		console.log('? ? ;? ?');
	})


        	$('.sidenav').sidenav();

    
});



$(document).ready(function () {
	$('.tabs').tabs();
});
