$(document).ready(function () {

	var sliderOwl = $('#owl-slider');
	var sliderOwl1 = $('#owl-slider1');
	var sliderOw2 = $('#owl-slider2');

	sliderOwl.owlCarousel({
		rtl: true,
		loop: true,
		margin: 60,
		nav: false,
		slideBy: 1,
		dots: true,
		responsive: {
			0: {
				dotsEach: 3,
				items: 1
			},
			600: {
				dotsEach: 3,
				items: 3
			},
			1200: {
				dotsEach: 3,
				items: 3
			}
		}
	});


	sliderOwl1.owlCarousel({
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
		rtl: true,
		loop: true,
		margin: 10,
		nav: false,
		slideBy: 1,
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



	// trigger product slider 

	$('.customNextBtn2').click(function () {
		sliderOw2.trigger('next.owl.carousel');
	})

	$('.customPrevBtn2').click(function () {
		sliderOw2.trigger('prev.owl.carousel');
	})

	$('.customNextBtn').click(function () {
		sliderOwl1.trigger('next.owl.carousel');
	})

	$('.customPrevBtn').click(function () {
		sliderOwl1.trigger('prev.owl.carousel');
	})

});






