// Initialise the index of the current character in the string, the string itself, and the speed of the typing effect
var i = 0;
var txt = 'ATHLETICA';
var speed = 150;

function typeWriter() {
	if (i < txt.length) {
		document.getElementById("typing-effect").innerHTML += txt.charAt(i);
		i++;
		setTimeout(typeWriter, speed);
	}
}

// Call the function
typeWriter();

// Initialise the count of the number of seconds before redirecting to the main page and the redirect button
var count = 4;
var redirectBtn = document.getElementById("redirect-btn");

// Function to redirect to the main page after 4 seconds
function redirect() {
	if (count > 0) {
		redirectBtn.innerHTML = "Redirecting in " + count;
	} else {
		redirectBtn.innerHTML = "";
		window.location.href = "../Main Page/MainPage.html";
	}
	count--;
	setTimeout(redirect, 1000);
}

// Redirect to the main page when the button is clicked

addEventListener("click", function () {
	window.location.href = "../Main Page/MainPage.html";
});

// Call the function
redirect();