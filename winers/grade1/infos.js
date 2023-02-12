let myrequest = new XMLHttpRequest();


myrequest.onreadystatechange = function() {
    if(this.readyState === 4 && this.status === 200) {
        let grades = JSON.parse(this.responseText);
        But(grades, grades.length);
    }
    else {
    }
}
myrequest.open("GET", "year.json", true);
myrequest.send();

function But(e, elen) {
    let secf = document.querySelector(".sec-f");
    let firstEle = document.createElement("div");
    firstEle.className = "firsts"
    secf.appendChild(firstEle)
    for(let i = 0; i <= elen; i++) {
        let student = document.createElement("div");
        let img = document.createElement("img");
        let name = document.createElement("div");
        let mark = document.createElement("div");
        let CurrentMark = document.createElement("span");
        let TotalMark = document.createElement("span");
        let badge = document.createElement("div");
        // badge.className = "badge";
        if(parseInt((e[i]["mark"] / e[i]["totalMark"]) * 100) == 100) {
            badge.className = "badge gold";
        }
        if (parseInt((e[i]["mark"] / e[i]["totalMark"]) * 100) <= 95) {
            badge.className = "badge silver";
        }
        if (parseInt((e[i]["mark"] / e[i]["totalMark"]) * 100) <= 90) {
            badge.className = "badge bronze";
        }
        if (parseInt((e[i]["mark"] / e[i]["totalMark"]) * 100) < 90) {
            badge.className = "";
        }
        CurrentMark.innerHTML = `${e[i]["mark"]} / `;
        TotalMark.innerHTML = `${e[i]["totalMark"]}`
        mark.className = "mark"
        name.className ="name"
        name.innerHTML = e[i]["name"];
        img.src = e[i]["avatar"]
        student.className = "stud"
        student.appendChild(img);
        student.appendChild(name);
        student.appendChild(mark);
        mark.appendChild(CurrentMark);
        mark.appendChild(TotalMark);
        firstEle.appendChild(student);
        student.appendChild(badge);
    }
}