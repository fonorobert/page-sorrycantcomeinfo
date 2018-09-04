var reasons = [
	"my dog got sick and now I've got to comfort her.",
	"i have a super important work project coming up in 3 months.",
	"i overate on falafel last night."
]

document.addEventListener("DOMContentLoaded", function(event) {

	var reason =  reasons[Math.floor(Math.random()*reasons.length)];

	var element = document.getElementById("reason");

	element.innerHTML = reason;


});

