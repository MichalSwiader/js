'use strict';

function obliczZysk(w, iL, oK, o, p) {
	
	var oprocentowanieOpodatkowane = 0;
	if (podatek == true) {
		oprocentowanieOpodaktowane = oprocentowanie - (100 - 19) / 100; 
	}
	else {
		oprocentowanieOpodaktowane = oprocentowanie;
	}	
	
	var potega = iloscLat*okresKapitalizacji;
	var podstawa = 1 + (oprocentowanieOpodaktowane / okresKapitalizacji);
	var wynik = wplata * Math.pow(podstawa,potega);
	
	return wynik.toFixed(2);
};

function oblicz () {
	
	event.preventDefault();
	
	var wplata = parseInt(document.getElementById('wplata').value);
	var iloscLat = parseInt(document.getElementById('lata').value);
	var okresKapitalizacji = parseInt(document.getElementById('select').value);
	var oprocentowanie = document.getElementById('procent').value / 100;
	var podatek = 0;
	
	if (document.getElementById('belka').checked) {
	   var podatek = true;
	}
	else {
	   var podatek = false;
	};	
	
	var kapital = obliczZysk(wplata, iloscLat, okresKapitalizacji, oprocentowanie, podatek);
	
	document.getElementById('wynik').innerHTML=kapital;	
};



document.getElementById('button').addEventListener('click', oblicz);