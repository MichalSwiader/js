'use strict';

$(document).ready(function () {

	$('#button').click(function () {

		$('#par-first').animate({
				"background-color": "blue",
		}, 500);
		$('#par-second').animate({
				"background-color": "red",
		}, 1000);
	})
});