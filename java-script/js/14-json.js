'use strict';

var jsonSamochody = {
	"samochody": [
		{marka: "Mercedes", pojemnosc: 2.0, moc: 100 + "[kW]"},
		{marka: "BMW", pojemnosc: 4.5, moc: 250 + "[kW]"},
		{marka: "Ferrari", pojemnosc: 1.6, moc: 320 + "[kW]"},
	]	
}

console.log(jsonSamochody);

//iteracja petla for each

jsonSamochody.samochody.forEach(function(auto){
	console.log(auto.marka);
})

