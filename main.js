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
        header.style.backgroundColor = "#444852";
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
// const btn = document.querySelector('.submit');
// let table = document.querySelector('.table');

// let selectfa = document.querySelector(".select");
// let select = document.createElement("select");
// select.id = "select";
// selectfa.appendChild(select);
// let myreq1 = new XMLHttpRequest();

// myreq1.onreadystatechange = function() {
//     if(this.readyState === 4&& this.status === 200) {
//         let times = JSON.parse(this.responseText);
//         addoptions(times , times.length);
//         console.log(times[0][0]["grade"])
//     }
// }
// myreq1.open("GET", "grades.json", true);
// myreq1.send();
// function addoptions(op,oplen) {
//     for (let i = 0; i < oplen ; i++) {
//         let option = document.createElement("option");
//         // option.onclick = function() {
//         //     console.log(option.dataset.count);
//         // }
//         btn.addEventListener("click", function(ev) {
//             // ev.preventDefault();
//             console.log(select.options.inner);
//         })
//         option.innerHTML = `${op[i][0]["grade"]}`;
//         option.dataset.count = `${i}`
//         select.appendChild(option);
//     }
// }


// // Start JSON
// let myreq = new XMLHttpRequest();

// myreq.onreadystatechange = function() {
//     if(this.readyState === 4&& this.status === 200) {
//         let times = JSON.parse(this.responseText);
//         check(times, times.length);
//         console.log(times[0])
//     }
// }
// myreq.open("GET", "table.json", true);
// myreq.send();


// function check(info, infolen) {
//     for(let i = 0 ; i < infolen ; i++) {
//         let row = document.createElement("div");
//         row.className = "row"
//         let dayname = document.createElement("span");
//         dayname.innerHTML = `${info[i][`day${i}`][0]}`
//         dayname.className = "day-name";
//         let daytime = document.createElement("span");
//         daytime.innerHTML = `${info[i][`day${i}`][1]}`
//         daytime.className = "time";
//         row.appendChild(dayname)
//         row.appendChild(daytime)
//         table.appendChild(row)
//     }
// }

// End JSON



let myrequest = new XMLHttpRequest();


myrequest.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        let grades = JSON.parse(this.responseText);
        setas(grades, grades.length);
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
let footertime = document.querySelector("footer p span");
let tm = new Date().getFullYear();
footertime.innerHTML = tm
