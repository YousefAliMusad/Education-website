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

let toTop = document.querySelector(".up");
let header = document.querySelector("nav");
window.onscroll = function() {
    this.scrollY >= 200 ? toTop.classList.add("show") : toTop.classList.remove("show");

    if(window.scrollY >= 100) {
        header.style.backgroundColor = "#33363e";
    }
    else {
        header.style.backgroundColor = "transparent";
    }
}

toTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// End Header