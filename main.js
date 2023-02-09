let Lineprog = document.querySelector(".line-basic");

function myFunction() {
    var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    var scrolled = (winScroll / height) * 100;
    Lineprog.style.width = scrolled + "%";
}


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

    if(window.scrollY >= 60) {
        header.style.backgroundColor = "#33363e";
    }
    else {
        header.style.backgroundColor = "transparent";
    }
    myFunction();
}

toTop.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};

// End Header


// Start JSON
let Time = document.querySelectorAll(".time")
// let SubmitBtn = document.querySelector(".submit")
let options = document.querySelectorAll("#select option")
let myreq = new XMLHttpRequest();

myreq.onreadystatechange = function() {
    if(this.readyState === 4&& this.status === 200) {
        let times = JSON.parse(this.responseText);
        check(times);
    }
}
myreq.open("GET", "times.json", true);
myreq.send();


function check(info) {
    options.forEach((e)=> {
        e.onclick = function() {
            console.log("options")
        }
    })
}

// End JSON