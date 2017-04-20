$(function() {
    'use strict';
	
//	Wybieranie elemntow z kolekcji za pomoca eq()
	$('body').find('p').eq(1).css({'color': 'green'});
	
//	Petla each doadjaca do paragrafow klasez kolejnym numerem
	$('p').each(function(index) {
		$(this).addClass('paragraf-' + index);
	});
});