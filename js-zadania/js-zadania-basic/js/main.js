'use strict';

//zadanie nr 1

var stringBackwards = 'Akademia108';

console.log(stringBackwards);

function reverse(string) {
  return string.split('').reverse().join('');
}

reverse(stringBackwards);

console.log(reverse(stringBackwards));

//zadanie nr 2

var stringSort = 'Akademia108';

console.log(stringSort);

function sort(string) {
	return string.split('').sort().join('');
}

sort(stringSort);
console.log(sort(stringSort));

//zadanie nr 3

//function multiply(array) {
//	var array = [1, 2, 3, 4, 5, 6];
//	for (var i = 0; var j = 1; i < array.length, j < array.length + 1; i + 1, j + 1) {
//	return array[i] * array[j];
//	} 
//}

var array = [1, 2, 3, 4, 5, 6];

function multiplyAddition(numbers) {
        var multiplyCount = 1;
        for (var i = 0; i <numbers.length; i++) {
            multiplyCount = multiplyCount * numbers[i];
        } 
        return multiplyCount;
	
	  	var additionCount;
        for (var i = 0; i < numbers.length; i++) {
            additionCount = numbers[i] + numbers[i + 1];
        } 
        return additionCount;
    }

multiplyAddition(array);

console.log(multiplyAddition(array));

//zadanie nr 4

var array = [0, 1, 2, 3, 4, 5];

function involutionAddition(numbers) {
		var involutionAdditionCount = 0;
        for (var i = 0; i <numbers.length; i++) {
			involutionAdditionCount += Math.pow(numbers[i],2);
        }
		return (involutionAdditionCount);
}

involutionAddition(array);

console.log(involutionAddition(array));

//zadanie nr 5


function fibonacciElement(n) {
	var fArray = [0, 1];
	for (var i = 2; i <= n; i++) {
			fArray[i] = fArray[i - 1] + fArray [i - 2];			
			fArray.push(fArray[i]);
	}
	console.log(fArray[n]);		
}

fibonacciElement(0);


//zadanie nr 6

function fibonacciAddition(n) {
	var fArray = [0, 1];
	for (var i = 2; i <= n; i++) {
		fArray[i] = fArray[i - 1] + fArray [i - 2];			
		fArray.push(fArray[i]);
	}
	var fAddition = [1];
	for (var i = 1; i <= n; i++) {
		fAddition[i] = fAddition[i - 1] + fArray[i] + fArray[i - 1];
	}
	console.log(fAddition[n]);
}

fibonacciAddition(5);

//Zadanie nr 7

function Książka(tytuł, autor) {
	
	this.tytuł = tytuł;
	this.autor = autor;
	this.czyPrzeczytana;
	this.opiszKsiążkę = function() {
		console.log( "Książka ma tytuł " + this.tytuł
		+ ", " + "autorem jest " + this.autor)
		if (this.czyPrzeczytana === true) {
			console.log("i została przeczytana.");
		} else {
			console.log("i nie została przeczytana.");
		}		
	}
}

var wiedźmin = new Książka("Wiedźmin", "Andrzej Sapkowski");

wiedźmin.czyPrzeczytana = true;

wiedźmin.opiszKsiążkę();

////Zadanie nr 8
//
var illiada = new Książka("Illiada", "Homer");

illiada.czyPrzeczytana = false;

var odyseja = new Książka("Odyseja", "Homer");

odyseja.czyPrzeczytana = false;

var tablicaKsiążki = [wiedźmin, illiada, odyseja];

//Zadanie nr 9

var iloscPrzeczytanych = function () {
	var tablicaPrzeczytanych = [];
	for(var i = 0; i < tablicaKsiążki.length; i++){
		tablicaKsiążki[i].opiszKsiążkę();
		if (tablicaKsiążki[i].czyPrzeczytana === true) {
			tablicaPrzeczytanych.push(tablicaKsiążki[i]);
		}
	};
	console.log("Ilość przeczytanych książek: " + tablicaPrzeczytanych.length)
};

iloscPrzeczytanych(tablicaKsiążki);

//Zadanie nr 10

var array = [5, 4, 3, 2, 1, 567, 8764345, 25345637, 4, 76, 8905836, 156987, 25, 365478, 2121, 6565, 4598, 456987];

var bąbelkowanie = function () {
	for (var i = 1; i <= Math.pow(array.length - 1, 2) - 1; i++) {
		if (array[i - 1] > array[i]) {
			var cutArrayItem = array[i - 1];
			array.splice(i - 1, 1);
			array.splice(i, 0, cutArrayItem)
		}
		for (var j = 1; j <= array.length; j++) {
			if (array[j - 1] > array[j]) {
				var cutArrayItem = array[j - 1];
				array.splice(j - 1, 1);
				array.splice(j, 0, cutArrayItem)
			}
			for (var k = 1; k <= array.length; k++) {
				if (array[k - 1] > array[k]) {
					var cutArrayItem = array[k - 1];
					array.splice(k - 1, 1);
					array.splice(k, 0, cutArrayItem)
				}
				for (var l = 1; l <= array.length; l++) {
					if (array[l - 1] > array[l]) {
						var cutArrayItem = array[l - 1];
						array.splice(l - 1, 1);
						array.splice(l, 0, cutArrayItem)
					}		
				}
			}
		}
	}
	console.log(array);
};

bąbelkowanie(array);

























