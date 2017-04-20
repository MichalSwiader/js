'use strict';

$(document).ready(function () {

	$('#button').click(function () {

		$('#red').animate({
				"left": "+=100px",
				"height": "100px",
				"width": "100px",
			}, 3000,
			function changeToBlue() {
				$('#red').animate({
					"background-color": "blue",
					}, 5000,
					function animationDone() {
						$("#red").append("<p>Gratulacje animacja została wykonana</p>")
							}
				)}


		)
	})
});