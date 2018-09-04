document.addEventListener("DOMContentLoaded", function(event) {

	var reason =  reasons[Math.floor(Math.random()*reasons.length)];

	var element = document.getElementById("reason");

	element.innerHTML = reason;


});

