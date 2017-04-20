'use strict';

var wzrostMateusza = 190;
var wzrostKaji = 152;





/*

Warunek if

*/

if ( wzrostKaji < wzrostMateusza ) {
	console.log("Kaja jest niższa :)");
	
}

/*

Warunek if else

*/

if ( wzrostKaji > wzrostMateusza ) {
	console.log("Kaja jest wyższa :)");	
} else {
	console.log("Kaja jest niższa");
}

/*

Warunek if else if else

*/

if ( wzrostKaji > wzrostMateusza ) {
	
	console.log("Kaja jest wyższa :)");
	
} else if ( wzrostKaji == wzrostMateusza ) {
	
	console.log("Kaja jest tak wysoka jak Mateusz");
}
  else {
	  
	  console.log("Kaja jest niższa");
}

/*

Warunek switch

*/

var kolor = 'zolty';

switch (kolor) {
	case 'czerwony':
		console.log('Kolor jest czerwony')
		break;
	case 'zielony':
		console.log('Kolor jest zielony')
		break;
	case 'niebieski':
		console.log('Kolor jest niebieski')
		break;
	default:
		console.log('Inny kolor')		
}























