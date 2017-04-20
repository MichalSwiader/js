$(function() {
    'use strict';
	
//	pojedyncze zdarzenie na paragrafie ZE ZMIANA
	$('p').click(function () {
		$('p').css({'color': 'inherit'});
		$(this).css({'color': 'orange'});
	});
	
//	grupa zdarzen na naglowku
	
//	po click kolor poamranczowy
	$('h1').on({
		'click': function () {
			$(this).css({'color': 'orange'});
		},
//	po wyjechaniu myszka poza kolor dziedziczony	
		'mouseleave': function () {
			$(this).css({'color': 'inherit'});
		}		
	});
});