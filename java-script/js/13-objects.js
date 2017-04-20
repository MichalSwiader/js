'use strict';


/*var kaja = {
	imie: "Kaja",
	wzrost: 152,
	przedstawOsobe: function() {console.log(this.imie)}
}

var krystian = {
	imie: "Krystian",
	wzrost: 180,
	przedstawOsobe: function() {console.log(this.imie)}
}

kaja.przedstawOsobe();

krystian.przedstawOsobe();

console.log(kaja.wzrost);*/
//
//function Osoba(imie, nazwisko) {
//	
//	this.imie = imie;
//	this.nazwisko = nazwisko;
//	this.wzrost;
//	this.oczy;
//	this.wyswietlInfo = function() {
//		console.log( "Imię: " + this.imie + "\n"
//					+ "Nazwisko: " + this.nazwisko + "\n"
//					+ "Wzrost: " + 	this.wzrost + "\n"
//					+ "Oczy: " + this.oczy);
//	}
//	
//}

/*var krystian = new Osoba('Krystian', 'Dziopa');

krystian.wzrost = 180;
krystian.oczy = "niebieskie";

krystian.wyswietlInfo();

var kaja = new Osoba('Kaja', "Stefaniak");

kaja.wyswietlInfo();*/

function Samochod(marka) {
	
	this.marka = marka;
	this.pojemnosc;
	this.moc;
	this.wyswietlInfo = function() {
		console.log( "Marka: " + this.marka + "\n"
					+ "Pojemnosc: " + this.pojemnosc + "\n"
					+ "Moc: " + this.moc);
	}
}

var mercedes = new Samochod('Mercedes');

mercedes.pojemnosc = 2.0;
mercedes.moc = 100 + '[kW]';

var bmw = new Samochod('BMW');

bmw.pojemnosc = 4.5;
bmw.moc = 250 + '[kW]';

var ferrari = new Samochod('Ferrari');

ferrari.pojemnosc = 1.6;
ferrari.moc = 320 + '[kW]';

mercedes.wyswietlInfo();

bmw.wyswietlInfo();

ferrari.wyswietlInfo();





/*marka pojemnosc i moc, jedna metode ktora przedstawia*/





