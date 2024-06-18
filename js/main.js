"use strict";

(function ($) {
	/*------------------
        Preloader
    --------------------*/
	$(window).on("load", function () {
		$(".loader").fadeOut();
		$("#preloder").delay(200).fadeOut("slow");
	});

	/*------------------
        Background Set
    --------------------*/
	$(".set-bg").each(function () {
		let bg = $(this).data("setbg");
		$(this).css("background-image", "url(" + bg + ")");
	});

	/*------------------
		Navigation
	--------------------*/
	$(".mobile-menu").slicknav({
		prependTo: "#mobile-menu-wrap",
		allowParentLinks: true,
	});

	/*------------------
        Hero Slider
    --------------------*/
	$(".hero-items").owlCarousel({
		loop: true,
		margin: 0,
		nav: true,
		items: 1,
		dots: false,
		animateOut: "fadeOut",
		animateIn: "fadeIn",
		navText: [
			'<i class="ti-angle-left"></i>',
			'<i class="ti-angle-right"></i>',
		],
		smartSpeed: 1200,
		autoHeight: false,
		autoplay: true,
	});

	/*------------------
        Product Slider
    --------------------*/
	$(".product-slider").owlCarousel({
		loop: true,
		margin: 25,
		nav: true,
		items: 4,
		dots: true,
		navText: [
			'<i class="ti-angle-left"></i>',
			'<i class="ti-angle-right"></i>',
		],
		smartSpeed: 1200,
		autoHeight: false,
		autoplay: true,
		responsive: {
			0: {
				items: 1,
			},
			576: {
				items: 2,
			},
			992: {
				items: 2,
			},
			1200: {
				items: 3,
			},
		},
	});

	/*------------------
       logo Carousel
    --------------------*/
	$(".logo-carousel").owlCarousel({
		loop: false,
		margin: 30,
		nav: false,
		items: 5,
		dots: false,
		navText: [
			'<i class="ti-angle-left"></i>',
			'<i class="ti-angle-right"></i>',
		],
		smartSpeed: 1200,
		autoHeight: false,
		mouseDrag: false,
		autoplay: true,
		responsive: {
			0: {
				items: 3,
			},
			768: {
				items: 5,
			},
		},
	});

	/*-----------------------
       Product Single Slider
    -------------------------*/
	$(".ps-slider").owlCarousel({
		loop: false,
		margin: 10,
		nav: true,
		items: 3,
		dots: false,
		navText: [
			'<i class="fa fa-angle-left"></i>',
			'<i class="fa fa-angle-right"></i>',
		],
		smartSpeed: 1200,
		autoHeight: false,
		autoplay: true,
	});

	/*------------------
        CountDown
    --------------------*/
	let today = new Date();
	let dd = String(today.getDate()).padStart(2, "0");
	let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
	let yyyy = today.getFullYear();

	if (mm == 12) {
		mm = "01";
		yyyy = yyyy + 1;
	} else {
		mm = parseInt(mm) + 1;
		mm = String(mm).padStart(2, "0");
	}
	let timerdate = mm + "/" + dd + "/" + yyyy;

	console.log(timerdate);

	$("#countdown").countdown(timerdate, function (event) {
		$(this).html(
			event.strftime(
				"<div class='cd-item'><span>%D</span> <p>Days</p> </div>" +
					"<div class='cd-item'><span>%H</span> <p>Hrs</p> </div>" +
					"<div class='cd-item'><span>%M</span> <p>Mins</p> </div>" +
					"<div class='cd-item'><span>%S</span> <p>Secs</p> </div>",
			),
		);
	});

	/*----------------------------------------------------
     Language Flag js 
    ----------------------------------------------------*/
	$(document).ready(function (e) {
		try {
			let pages = $("#pages")
				.msDropdown({
					on: {
						change: function (data, ui) {
							let val = data.value;
							if (val != "") window.location = val;
						},
					},
				})
				.data("dd");

			let pagename = document.location.pathname.toString();
			pagename = pagename.split("/");
			pages.setIndexByValue(pagename[pagename.length - 1]);
			$("#ver").html(msBeautify.version.msDropdown);
		} catch (e) {}
		$("#ver").html(msBeautify.version.msDropdown);
		$(".language_drop").msDropdown({ roundedBorder: false });
		$("#tech").data("dd");
	});
})(jQuery);
