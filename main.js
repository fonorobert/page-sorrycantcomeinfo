var animationClasses = [
	"fadeIn",
	"animated",
	"fast",
	"delay-3s"
]

function sleep (time) {
  return new Promise((resolve) => setTimeout(resolve, time));
}


function giveReason(reasonID, animationClasses) {
	var reason =  reasons[Math.floor(Math.random()*reasons.length)];

	var element = document.getElementById(reasonID);
	
	element.innerHTML = reason;

	if (element.classList) {
		for (i = 0; i<animationClasses.length; i++) {
	  		element.classList.add(animationClasses[i]);
		}
	} else {

		for (i = 0; i<animationClasses.length; i++) {
	  		element.className += ' ' + animationClasses[i];
		}
	}
}

function removeReason(reasonID, animationClasses) {	
	var element = document.getElementById(reasonID);
	for (i = 0; i< animationClasses.length; i++) {
		element.classList.remove(animationClasses[i]);
	}

	element.classList.add("animated", "fadeOut", "faster");

	sleep(500).then(() => {
		element.innerHTML = "";
		element.classList.remove("animated", "fadeOut", "faster");
	});



}

function newReason() {
	
	removeReason("reason", animationClasses);
	
	for (i = 0; i < animationClasses.length; i++) {
		if (animationClasses[i] == "delay-3s") {
			animationClasses.splice(i, 1)
		}
	}

	
	sleep(500).then(() => {
		giveReason("reason", animationClasses);
	});

}


document.addEventListener("DOMContentLoaded", function(event) {
	giveReason("reason", animationClasses);
	
});


