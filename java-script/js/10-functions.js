'use strict';

/*var liczba1 = 8;
var liczba2 = 10;
var wynik;

function dodajLiczby () {
	wynik = liczba1 + liczba2;
}

dodajLiczby();

console.log(wynik);*/

var liczba1 = 5;
var liczba2 = 10;
var liczba3 = 15;
var wynik, wynik1, wynik2, wynik3;

function mnozenie (skladowa1, skladowa2, skladowa3) {
	
	var wynikMnozenia;
	wynikMnozenia = skladowa1 * skladowa2 * skladowa3;
	
	return wynikMnozenia;
}

wynik = mnozenie(liczba1, liczba2, liczba3);
wynik1 = mnozenie(12, 40, 33);
wynik2 = mnozenie(6, 7, 8);
wynik3 = mnozenie(1, 2 , -3);

console.log(wynik);

function wartoscParametru(liczbaDoSprawdzenia) {
	
	if (liczbaDoSprawdzenia >=0) {
		console.log(liczbaDoSprawdzenia);
	} else {
		document.write(liczbaDoSprawdzenia);
	}
			
}

wartoscParametru(wynik);
wartoscParametru(wynik1);
wartoscParametru(wynik2);
wartoscParametru(wynik3);

/*Stworz dwie funkcje: 
-pierwsza mnozy trzy liczby i zwraca wynik tego mnozenia
-druga pobiera jeden parametr, nie zwraca nic ale sprawdza czy wartosc jest >=0 jesli nie to wyswietla to na stronie jako false*/