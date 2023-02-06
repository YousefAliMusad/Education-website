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

