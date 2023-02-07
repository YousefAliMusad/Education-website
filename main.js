// Start Menu

let MenuIcon = document.querySelector(".menu")
let MenuIconSpan = document.querySelectorAll(".menu span")

MenuIcon.onclick = function() {
    MenuIconSpan.forEach(e=> {
        e.classList.toggle("active")
    })
    document.body.classList.toggle("active")
}

// End Menu

// Start Header
let header = document.querySelector("nav");
window.onscroll = function() {
    if(window.scrollY >= 100) {
        header.style.backgroundColor = "#33363e";
    }
    else {
        header.style.backgroundColor = "transparent";
    }
}
// End Header