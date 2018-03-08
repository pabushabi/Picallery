console.log("Hi^^");

function validate() {
    var element = document.getElementById("login");
    var email = document.forms["logIn"]["E-mail"].value;
    var pass = document.forms["logIn"]["Password"].value;
    console.log(email);
    console.log(pass);
    //there should be sending l&p to server
}

function hack() {
    setTimeout(h1, 1000);
}

function h1() {
    var pic = document.getElementById("Picallery");
    pic.innerHTML = "HACKED";
}

function resize() {
    var pic = document.getElementsByClassName("gallery");
    for (var k = 0; k < 5; k++)
        pic[k].src = "resources/5.jpg"
}

function mouseEnterFoot() {
    var pic = document.getElementsByClassName("foot");
    pic[0].style.color = "red";
}
function mouseLeaveFoot() {
    var pic = document.getElementsByClassName("foot");
    pic[0].style.color = "black";
}

function mouseEnterUp() {
    var pic = document.getElementById("up");
    pic.src = "resources/upMoused.png";
}
function mouseLeaveUp() {
    var pic = document.getElementById("up");
    pic.src = "resources/up.png";
}

function mouseEnterHeader() {
    /*var txt = document.getElementById("Picallery");
    txt.style.color = "white";*/
}

function mouseLeaveHeader() {
    /*var txt = document.getElementById("Picallery");
    txt.style.color = "white";*/
}
