'use strict';

$(document).ready(function() {
	// Switcher block slide
	
	$(".ptss__toggle-btn").click(function () {
		$('.js-ptss-frame').toggleClass('is-opened');
	});
		
	var stickyOffset = $( '.js-sticky-offset' ).offset().top;
	// Sticky menu switcher
	$('#sticky-switcher-on').click(function(){
		$('#sticky-switcher-off').removeClass('is-selected');
		$(this).addClass('is-selected');
		$('.ptss__nav-wrapper').addClass('is-sticky');
		$('body').addClass('fixed-navigation');
	
		$( window).on( 'scroll.stickyNavbar', _.throttle( function() {	
			$( 'body.fixed-navigation' ).toggleClass( 'is-sticky-navbar', $( window ).scrollTop() > ( stickyOffset) );
		}, 20 ) );
	});
	$('#sticky-switcher-off').click(function(){
		$('#sticky-switcher-on').removeClass('is-selected');
		$('.ptss__nav-wrapper').removeClass('is-sticky');
		$(this).addClass('is-selected');
		$('body').removeClass('fixed-navigation').removeClass('is-sticky-navbar');
	});
	$('.ptss__nav-switch').click(function(){
		$('.ptss__nav-wrapper').toggleClass('is-sticky');
		$('.ptss__control-label').toggleClass('is-selected');
		$('body').toggleClass('fixed-navigation');
		$( window).on( 'scroll.stickyNavbar', _.throttle( function() {	
			$( 'body.fixed-navigation' ).toggleClass( 'is-sticky-navbar', $( window ).scrollTop() > ( stickyOffset) );
		}, 20 ) );
		
	});
	
	// Color switcher 
	$('#ptss__color-skin span').click(function(){
		$('#ptss__color-skin span').removeClass('is-selected');
		$(this).addClass('is-selected');
		var id = $(this).attr('id');
		
		if(id !== 'default'){
			$('#color-stylesheet').remove();
			$('head').append('<link rel="stylesheet" type="text/css" id="color-stylesheet" href="css/colors/'+id+'.css" />');
		}
		else{
			$('#color-stylesheet').remove();
		}
	});
	
	// Layout switcher
	
	$('.ptss__layout-wrapper').click(function(){
		$('.ptss__layout-wrapper').removeClass('is-selected');
		$(this).addClass('is-selected');
		$('body').toggleClass('boxed');
	});
	
	// Background switcher
	$('#ptss__boxed-backgrounds').find('span').click(function(){
		var imageUrl = $(this).data('rel');
		$('#ptss__boxed-backgrounds').find('.fa-check').remove();
		$(this).addClass('is-selected').append('<i class="fa fa-check"></i>');
		$('body').css('background-image', 'url(style-switcher/assets/img/' + imageUrl + ')');
		$('.master-container').css('background-color', '#fff');
	});
	
	
});