/*jshint jquery:true */
/*global $:true */

var $ = jQuery.noConflict();

$(document).ready(function($) {
	"use strict";

	/*-------------------------------------------------*/
	/* =  portfolio isotope
	/*-------------------------------------------------*/

	var winDow = $(window);
		// Needed variables
		var $container=$('.portfolio-container');
		var $filter=$('.filter');

		try{
			$container.imagesLoaded( function(){
				$container.show();
				$container.isotope({
					filter:'*',
					layoutMode:'masonry',
					animationOptions:{
						duration:750,
						easing:'linear'
					}
				});
			});
		} catch(err) {
		}

		winDow.bind('resize', function(){
			var selector = $filter.find('productCat').attr('data-filter');

			try {
				$container.isotope({
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {
			}
			return false;
		});

		// Isotope Filter
		$filter.find('.productCat').click(function(){
			var selector = $(this).attr('data-filter');
			 $(".productSearch").val("");
			 	var searchTerm = $(".productSearch").val();
				$('.work-post').hide().filter(function() {
    			return $(this).text().toLowerCase().indexOf( searchTerm.toLowerCase()  ) > -1;
			  }).show();

			try {
				$container.isotope({
					filter	: selector,
					animationOptions: {
						duration: 750,
						easing	: 'linear',
						queue	: false,
					}
				});
			} catch(err) {

			}
			return false;
		});

// var numitems =  $(".pricing-table li").length;
// $(".pricing-table").css("column-count",2);
$(".pricing-table li").click(function(){
   window.location=$(this).find("a").attr("href");
   return false;
});

$('.hiddenArticle').hide();
$('.searchResults').hide();
$('.articlePages').show();
$(".articleSearch").val("");
		$('.articleSearchButton').click(function(){
									// htmBody.animate({scrollTop: $('.portfolio-container').position().top-70}, 'slow');
									// $('.productCat').find('a').removeClass('active');
									// $('.showAllClass').find('a').addClass('active');
											// $('.col-md-6').removeClass('col-md-9');


						var searchTerm = $(".articleSearch").val();
						 $('.col-md-6').hide().filter(function() {
					        			return $(this).text().toLowerCase().indexOf( searchTerm.toLowerCase()  ) > -1;
					  				  }).show();

											if(searchTerm.length==0){
					  				  	$('.hiddenArticle').hide();
					  				  	$('.searchResults').hide();
					  				  	$('.newsHead').show();
					  				  	$('.articlePages').show();
					  				  }else{
					  				  	// $('.hiddenArticle').show();
					  				  	htmBody.animate({scrollTop: 0});
												$('.articlePages').hide();
												$('.searchResults').show();
												$('.newsHead').hide();
					  				  }






					  				  // if($('.col-md-6').is(':visible')){
					  				  // 	$('.col-md-6').toggleClass('col-md-9');
					  				  // }
					  				  // if($('.col-md-6').is(':visible')!=true){
					  				  // 	$('.col-md-6').removeClass('col-md-9');
					  				  // }
					  				  //  $('.col-md-6').filter(function() {
					        // 			return $(this).text().toLowerCase().indexOf( searchTerm.toLowerCase()  ) > -1;
					  				  // }).addClass('col-md-9');

					  				  // alert(searchTerm.length);



											// try {
											// 	$('.blog-side').isotope({
											// 		filter	: selector,
											// 		animationOptions: {
											// 			duration: 750,
											// 			easing	: 'linear',
											// 			queue	: false,
											// 		}
											// 	});
											// } catch(err) {

											// }
									return false;

					});

					$('.productSearchButton').click(function(){
									htmBody.animate({scrollTop: $('.portfolio-container').position().top-70}, 'slow');
									$('.productCat').find('a').removeClass('active');
									$('.showAllClass').find('a').addClass('active');
											var searchTerm = $(".productSearch").val();
											var selector = $('.work-post').hide().filter(function() {
					        			return $(this).text().toLowerCase().indexOf( searchTerm.toLowerCase()  ) > -1;
					  				  }).show();

											try {
												$container.isotope({
													filter	: selector,
													animationOptions: {
														duration: 750,
														easing	: 'linear',
														queue	: false,
													}
												});
											} catch(err) {

											}
									return false;

					});

	$('.productSearch').keyup(function(){
			// 			var searchTerm = $(".productSearch").val();
			// 			var selector = $('.work-post').hide().filter(function() {
   //      			return $(this).text().toLowerCase().indexOf( searchTerm.toLowerCase()  ) > -1;
  	// 			  }).show();

			// try {
			// 	$container.isotope({
			// 		filter	: selector,
			// 		animationOptions: {
			// 			duration: 900,
			// 			easing	: 'linear',
			// 			queue	: false,
			// 		}
			// 	});
			// } catch(err) {

			// }

});
// var searchTerm = $(".productSearch").val();





	var filterItemA	= $('.productCat');
	// var filterItemB	= $('.productCat a .active');

		filterItemA.on('click', function(){
			var $this = $(this);
			if ( !$this.find('a').hasClass('active')) {
				filterItemA.find('a').removeClass('active');
				$this.find('a').addClass('active');
			}
		});

		$('.supportTab').click(function(){
			return false;
		});

	/*-------------------------------------------------*/
	/* =  fullwidth carousell
	/*-------------------------------------------------*/
	try {
		var fullCarousell = $("#owl-demo");
		fullCarousell.owlCarousel({
			navigation : true,
			afterInit : function(elem){
				var that = this;
				that.owlControls.prependTo(elem);
			}
		});
	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* =  fullwidth carousell
	/*-------------------------------------------------*/
	try {
		$.browserSelector();
		// Adds window smooth scroll on chrome.
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* =  Scrolls
	/*-------------------------------------------------*/

	var animateTopButton = $('.go-top'),
		htmBody = $('html, body');

	animateTopButton.click(function(){
	htmBody.animate({scrollTop: 0}, 'slow');
		return false;
	});

	var animateSlideButton = $('.go-slider');
		// htmBody = $('html, body');

	animateSlideButton.click(function(){
	htmBody.animate({scrollTop: $('#content').position().top-70}, 'slow');
		return false;
	});

	// var address = $('.addressButton');

	// address.click(function(){
	// $(".map").toggle('slow');
	// // $(".contact-box").toggle('slow');
	// 	// $(".map").hide();
	// 	return false;
	// });

		var productCats = $('.productCat');

	productCats.click(function(){
		htmBody.animate({scrollTop: $('.portfolio-container').position().top-70}, 'slow');
		return false;
	});


		// var hideThis = function(){
		// 				$(".portfolio-container").hide();
		// };
		// hideThis();
	// productCats.click(function(){
	// $(".portfolio-container").show('slow');
	// // $(".contact-box").toggle('slow');
	// 	// $(".map").hide();
	// 	return false;
	// });

	var readMore = $('.news-item > .read-more');
		readMore.hover(function(){
			$(this).parent().children('.inner-item').toggleClass("grayPic");
			return false;
	});

	/*-------------------------------------------------*/
	/* =  flexslider
	/*-------------------------------------------------*/
	try {

		var SliderPost = $('.flexslider');

		SliderPost.flexslider({
			animation: "slide",
			slideshowSpeed: 3000,
			easing: "swing",
			direction: "vertical"
		});
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Contact Map
	/* ---------------------------------------------------------------------- */
	var contact = {"lat":"40.875049", "lon":"-73.603135"}; //Change a map coordinate here!

	try {
		var mapContainer = $('.map');
		mapContainer.gmap3({
			action: 'addMarker',
			latLng: [contact.lat, contact.lon],
			map:{
				center: [contact.lat, contact.lon],
				zoom: 14
				},
			},
			{action: 'setOptions', args:[{scrollwheel:true}]}
		);
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	magnific-popup
	/* ---------------------------------------------------------------------- */

	try {
		// Example with multiple objects
		$('.zoom').magnificPopup({
			type: 'image'
		});
	} catch(err) {

	}

	try {
		// Example with multiple objects
		$('.zoom.video').magnificPopup({
			type: 'iframe'
		});
	} catch(err) {

	}

	/* ---------------------------------------------------------------------- */
	/*	Accordion
	/* ---------------------------------------------------------------------- */
	var clickElem = $('a.accord-link');

	clickElem.on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			parentCheck = $this.parents('.accord-elem'),
			accordItems = $('.accord-elem'),
			accordContent = $('.accord-content');

		if( !parentCheck.hasClass('active')) {

			accordContent.slideUp(400, function(){
				accordItems.removeClass('active');
			});
			parentCheck.find('.accord-content').slideDown(400, function(){
				parentCheck.addClass('active');
			});

		} else {

			accordContent.slideUp(400, function(){
				accordItems.removeClass('active');
			});

		}
	});

	/* ---------------------------------------------------------------------- */
	/*	Tabs
	/* ---------------------------------------------------------------------- */
	var clickTab = $('.tab-links li a');

	clickTab.on('click', function(e){
		e.preventDefault();

		var $this = $(this),
			hisIndex = $this.parent('li').index(),
			tabCont = $('.tab-content'),
			tabContIndex = $(".tab-content:eq(" + hisIndex + ")");

		if( !$this.hasClass('active')) {

			clickTab.removeClass('active');
			$this.addClass('active');

			tabCont.fadeOut(400);
			tabCont.removeClass('active');
			tabContIndex.delay(400).fadeIn(400);
			tabContIndex.addClass('active');
		}
	});

	/*-------------------------------------------------*/
	/* = slider Testimonial
	/*-------------------------------------------------*/

	var slidertestimonial = $('.bxslider');
	try{
		slidertestimonial.bxSlider({
			mode: 'vertical'
		});
	} catch(err) {
	}

	/*-------------------------------------------------*/
	/* = skills animate
	/*-------------------------------------------------*/

	var animateElement = $(".meter > span");
	animateElement.each(function() {
		$(this)
			.data("origWidth", $(this).width())
			.width(0)
			.animate({
				width: $(this).data("origWidth")
			}, 1200);
	});

	/*-------------------------------------------------*/
	/* =  Shop accordion
	/*-------------------------------------------------*/

	var AccordElement = $('a.accordion-link');

	AccordElement.on('click', function(e){
		e.preventDefault();
		var elemSlide = $(this).parent('li').find('.accordion-list-content');

		if( !$(this).hasClass('active') ) {
			$(this).addClass('active');
			elemSlide.slideDown(200);
		} else {
			$(this).removeClass('active');
			elemSlide.slideUp(200);
		}
	});

	/*-------------------------------------------------*/
	/* =  price range code
	/*-------------------------------------------------*/

	try {

		for( var i = 100; i <= 10000; i++ ){
			$('#start-val').append(
				'<option value="' + i + '">' + i + '</option>'
			);
		}
		// Initialise noUiSlider
		$('.noUiSlider').noUiSlider({
			range: [0,1600],
			start: [0,1000],
			handles: 2,
			connect: true,
			step: 1,
			serialization: {
				to: [ $('#start-val'),
					$('#end-val') ],
				resolution: 1
			}
		});
	} catch(err) {

	}

	/*-------------------------------------------------*/
	/* =  Single page
	/*-------------------------------------------------*/

	var windowHeight = $(window).height();
	$('.home-box').css('height', windowHeight);

	$(window).resize(function(){
		var windowHeight = $(window).height();
		$('.home-box').css('height', windowHeight);
	});

	/* ---------------------------------------------------------------------- */
	/*	Contact Form
	/* ---------------------------------------------------------------------- */


	var submitContact = $('.submit_contact');

	submitContact.on('click', function(e){
		e.preventDefault();

		var $this = $(this),
				message = $('.msg2');

			$.ajax({
				type: "POST",
				url: 'contact.php',
				dataType: 'json',
				cache: false,
				data: $('.contact-work-form2').serialize(),
				success: function(data) {

					if(data.info !== 'error'){
						$this.parents('form').find('input[type=text],textarea,select').filter(':visible').val('');
						message.hide().removeClass('success').removeClass('error').addClass('success').html(data.msg).fadeIn('slow').delay(2350).fadeOut('slow');
					} else {
						message.hide().removeClass('success').removeClass('error').addClass('error').html(data.msg).fadeIn('slow').delay(2000).fadeOut('slow');
					}
				}
			});

	});

	/* ---------------------------------------------------------------------- */
	/*	Header animate after scroll
	/* ---------------------------------------------------------------------- */

	(function() {

		var docElem = document.documentElement,
			didScroll = false,
			changeHeaderOn = 200;
			document.querySelector( 'header' );
		function init() {
			window.addEventListener( 'scroll', function() {
				if( !didScroll ) {
					didScroll = true;
					setTimeout( scrollPage, 250 );
				}
			}, false );
		}

		function scrollPage() {
			var sy = scrollY();
			if ( sy >= changeHeaderOn ) {
				$( 'header' ).addClass('active');
			}
			else {
				$( 'header' ).removeClass('active');
			}
			didScroll = false;
		}

		function scrollY() {
			return window.pageYOffset || docElem.scrollTop;
		}

		init();

	})();

});
