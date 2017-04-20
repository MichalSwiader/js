'use strict';

$(document).ready(function () {

	var buttonTop = $(".button-top");
	
	$(buttonTop).click(function lastFirst(){
		var parFirst= $("p").first();
		var parLast = $("p").last()
		$(parLast).insertBefore(parFirst);
		$(parLast).animate
	});
	
	var buttonBottom = $(".button-bottom")
	
	$(buttonBottom).click(function firstLast(){
		var parFirst= $("p").first();
		var parLast = $("p").last()
		$(parFirst).animate({
			"background-color": "#FFA500",
			"color": "white",
		}, {
			duration: 1000,
			done: function () {
				$(parFirst).insertAfter(parLast);
			},
			complete: function (){
				$(parFirst).animate({
					"background-color": "#fff",
					"color": "#FFA500",
				}, 1000);
			}
		});
	});
});