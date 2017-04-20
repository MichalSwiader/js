'use strict';

$(document).ready(function () {

	var slider = $("#slider");
	var slideShow = $(".slide-show");
	var slideCount = $(".slide-show").children().length;
	var slideWidth = 100 / ($(".single-slide").length);
	var slideIndex = 0;
	
	$(slideShow).css({"width": slideCount*100 +"%"});
	$(slideShow).find(".single-slide").each(function(){
		$(this).css({"margin-left": slideWidth * slideIndex +"%", "width": 100 / slideCount + "%"})
	})
	
	var prevArrow = $('.prev-slide');
	var nextArrow = $('.next-slide');	
	
	prevArrow.click(function slide(slideIndex){
		slideIndex = slideIndex - 1;
	});	
	nextArrow.click(function slide(slideIndex){
		slideIndex = slideIndex + 1;
	});
		
	function slide(newSlideIndex){
		if(slideIndex = 0){
			return;
		} else if(slideIndex = slideCount) {
			return;
		}
		var slideCaption = $('.slide-caption');
		slideCaption.hide();
		
		var marginLeft = (slideIndex*(-100)) + "%";
		$(slide-show).animate({"margin-left": marginLeft}, 1000,
			function slideDone(){
				newSlideIndex = slideIndex;
				slideCaption.fadeIn();
		})
	}
	
		
});