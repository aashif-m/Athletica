const scroll_down = document.querySelector(".main-button"); // Scroll down button

scroll_down.onclick = ()=>{ // When scroll down button is clicked
    window.scrollTo(0,950); // Scroll to E-Sports section
}

const scroll_up = document.querySelector("#back-to-top-btn"); // Scroll up button

scroll_up.onclick = ()=>{ // When scroll up button is clicked
    window.scrollTo(0,0); // Scroll to top
}