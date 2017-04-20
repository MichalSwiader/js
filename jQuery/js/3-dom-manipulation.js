$(function() {
    'use strict';
	
	//Pobieranie tekstu
	var tekstParagrafuPierwszego = $('#paragraf').text();
	console.log(tekstParagrafuPierwszego);
	
	//Dodawanie tekstu
	$('.paragraf').text(tekstParagrafuPierwszego);
	
	//Dodawanie HTML
	$('.paragrafnext').html('To jest <strong>paragraf</strong> z dodanym <br /> HTML');

	//Dodawanie tresci PRZED selektorem
	$('.paragrafnext').before('Treść przed selektorem.');	
	
	//Dodawanie tresci NA KOŃCU selektora
	$('.paragrafnext').append('Treść na końcu selektora.');
	
	//Dodawanie tresci ZA selektorem
	$('.paragrafnext').after('Treść za selektorem.');
	
	//Dodawanie tresci ZA selektorem
	$('.paragrafnext').after('Treść za selektorem.');
	
	//Usuwanie elementu I zawartosci
	$('strong').remove();
	
	//Usuwanie TYLKO zawartosci
	$('.paragraf').empty();
	
	//Dodawanie CSS
	$('.paragrafnext').css({'font-size': '2vmax', 'color': 'red'});
	
	//Dodawanie klasy
	$('h1').addClass('blue');
	
	//Dodawanie atrybutu
	$('h1').attr("imie", "Marcin");
});