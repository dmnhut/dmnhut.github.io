$(document).ready(function() {
	$("#btn-more").click(function() {
		$("#div-intro").hide(1000);
		$("#div-info").show(500);
	});
	$("#btn-hide").click(function() {
		$("#div-intro").show(500);
		$("#div-info").hide(1000);
	});
});

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
	var x = document.getElementById("nav");
	if (x.className.indexOf("w3-show") == -1) {
		x.className += " w3-show";
	} else {
		x.className = x.className.replace(" w3-show", "");
	}
}
