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
// let Time = document.querySelectorAll(".time")
// // let SubmitBtn = document.querySelector(".submit")
// let options = document.querySelectorAll("#select option")
// let myreq = new XMLHttpRequest();

// myreq.onreadystatechange = function() {
//     if(this.readyState === 4&& this.status === 200) {
//         let times = JSON.parse(this.responseText);
//         check(times);
//     }
// }
// myreq.open("GET", "times.json", true);
// myreq.send();


// function check(info) {
//     options.forEach((e)=> {
//         e.onclick = function() {
//             console.log("options")
//         }
//     })
// }

// End JSON



let myrequest = new XMLHttpRequest();


myrequest.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        let grades = JSON.parse(this.responseText);
        setas(grades, grades.length);
    }
    else {
        console.log("unconected")
    }
}
myrequest.open("GET", "grades.json", true);
myrequest.send();

function setas(grades, gradescount) {
    let boxs = document.querySelector(".boxs");
    for(let i = 0; i < gradescount ; i++) {
        let box = document.createElement('a');
        let boxP = document.createElement('p');
        box.classList = `box${i}`;
        box.setAttribute("href" , `winers/grade${i}/index.html`)
        boxP.innerHTML = grades[i][0]["grade"];
        boxs.appendChild(box)
        box.appendChild(boxP)
    }
}
// let list = [7,6,8,4,0,1,3,4,2];
// console.log(list.sort((f,s)=>{
//     f.value - s.value;
// }))