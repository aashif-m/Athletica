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

typeWriter();

var count = 4;
var redirectBtn = document.getElementById("redirect-btn");

function redirect() {
    if (count > 0) {
        redirectBtn.innerHTML = "Redirecting in " + count;
    } else {
        redirectBtn.innerHTML = "";
        window.location.href = "Main Page/MainPage.html";
    }
    count--;
    setTimeout(redirect, 1000);
}

redirect();