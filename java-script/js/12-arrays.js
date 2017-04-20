'use strict'

var imiona = ['Michał', 'Paulina', 'Porto'];

imiona[3] = 'Marcin';
imiona[4] = 'Marek';

imiona.push('Geralt');

imiona.pop();
imiona.pop();

console.log(imiona.unshift('Robert'));

console.log(imiona);

console.log(imiona.shift());

console.log(imiona);

for (var i = imiona.length-1; i >= 0; i--) {
	console.log(imiona[i]);
	
}


imiona.forEach(function (element, i) {
	console.log('Element nr.' + i + ' = ' + element);
	
})

console.log(imiona.join(" - "));

imiona.sort();

console.log(imiona);

imiona.reverse();

console.log(imiona);

var imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];

var zbiorImion = imiona.concat (imionaMeskie);

console.log(zbiorImion);

console.log(zbiorImion.indexOf("Mariusz"));

console.log(Array.isArray(zbiorImion));

console.log(zbiorImion.slice(2,4));

console.log(zbiorImion.splice(2, 2, "dupa", "dupa"));

console.log(zbiorImion);

console.log(zbiorImion.toString());




