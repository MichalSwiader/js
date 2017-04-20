'use strict';

/*

Obiekty

*/

var student = {
	imie: "Kaja",
	wzrost: 152,
	wyswietlDane: function() { console.log(this.imie) }
}

student.wyswietlDane();