'use strict';

//Tworzenie formularza z trzema inputami
var form = document.createElement("form");
form.setAttribute('method',"post");
form.setAttribute('action',"");
form.setAttribute('id','form');

var inputName = document.createElement("input","<br>");
inputName.setAttribute('type',"text");
inputName.setAttribute('name',"name");
inputName.setAttribute('id', "name");

var inputSurname = document.createElement("input");
inputSurname.setAttribute('type',"text");
inputSurname.setAttribute('name',"surname");
inputSurname.setAttribute('id', "surname");

var inputSubmit = document.createElement("input");
inputSubmit.setAttribute('type',"submit");
inputSubmit.setAttribute('value',"Submit");
inputSubmit.setAttribute('id', "submit");

form.appendChild(inputName);
form.appendChild(inputSurname);
form.appendChild(inputSubmit);

document.getElementsByTagName('body')[0].appendChild(form);

//Iteracja po elemntach form, zeby wypisac value inputa w consoli jesli id wynosi cos tam
function checkForm (event) {
	event.preventDefault();
	var formChildren = document.getElementById('form').childNodes;
	formChildren.forEach (function (element, i) {

		if (element.id == "name") {
			console.log(element.value);
		}
		else if (element.id == "surname") {
			console.log(element.value);
		}
	});
}

document.getElementById('submit').addEventListener('click', checkForm);
							  



