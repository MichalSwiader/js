$(function () {
    'use strict';
	
	var flaga = false;
	
	//	Efekt hide i show
		$('p').hide(1000, function () {
			if (flaga === false) {
				console.log("Zakonczono ukrywanie")
				flaga = true;
			}
		}).show(1000);
	
	//	Efekt hide i show
	$('h1').fadeOut(1000).fadeIn(1000);	
	
	//	Efekt hide i show
	$('h2').slideUp(1000).slideDown(1000);
	
	//	Efekt animacja z funkcja zwrotna - tzw.callback		
	function animacja() {
		console.log('Zakończono pierwszą animację. Zaraz startuje druga');
		$('h3').animate({'font-size': '1em', 'margin-left': '0'}, 2000);		
	}
	
	$('h3').click( function () {		
		$(this).animate({'font-size': '3em', 'margin-left': '100px'}, 2000, animacja);
	}); 
		
});