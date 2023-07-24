    
    
    // Select the element with the class "main-button"
    // and assign  it to a variable called "scroll_down".
    const scroll_down = document.querySelector(".main-button");

    // Attach a click event handler to the "scroll_down" element
    scroll_down.onclick = ()=>{
        //scroll the window 1000px vertically down.
        window.scrollTo(0,1000);
    }

    // Select the element with the id "back-to-top-btn" and  
    //assign  it to a variable called "scroll_up".
    const scroll_up = document.querySelector("#back-to-top-btn");

    // Attach a click event handler to the "scroll_up" element
    scroll_up.onclick = ()=>{
        //scroll the window to the top-left most position of the page.
        window.scrollTo(0,0);
    }

