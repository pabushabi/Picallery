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

/*function scroll() {
    var up = document.getElementById("up");
    up.style.visibility = "visible";
}*/

var images = [
    "resources/1.jpg",
    "resources/2.jpg",
    "resources/3.jpg",
    "resources/4.jpg",
    "resources/5.jpg"
];
var num = 0;

function next() {
    var slider = document.getElementById("pic");
    num++;
    if (num >= images.length) num = 0;
    slider.src = images[num];
}

function prev() {
    var slider = document.getElementById("pic");
    num--;
    if (num < 0) num = images.length - 1;
    slider.src = images[num];
}