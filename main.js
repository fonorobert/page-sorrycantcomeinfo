document.addEventListener("DOMContentLoaded", function(event) {

	var reason =  reasons[Math.floor(Math.random()*reasons.length)];

	var element = document.getElementById("reason");
	
	element.innerHTML = reason;

	var animationClasses = [
		"fadeIn",
		"animated",
		"fast",
		"delay-3s"
	]

	if (element.classList) {
		for (i = 0; i<animationClasses.length; i++) {
	  		element.classList.add(animationClasses[i]);
		}
	} else {

		for (i = 0; i<animationClasses.length; i++) {
	  		element.className += ' ' + animationClasses[i];
		}
	}
});

