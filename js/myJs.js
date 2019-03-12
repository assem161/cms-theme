$(document).ready(function () {

	var sliderOwl = $('#owl-slider');

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
});




