console.log("Hi^^");

var flag = false;
var textLogin = document.getElementById("login");
var formInput = document.getElementById("form");
var email = document.forms["logIn"]["email"].value;
var pass = document.forms["logIn"]["password"].value;

window.onload = function () {
    if (flag) textLogin.innerHTML = "You r logged in as " + email;
};

function validate() {
    console.log(email);
    console.log(pass);
    //there should be sending l&p to server
    textLogin.innerHTML = "You are logged in as " + email;
    flag = true;
}

function resize() {
    var pic = document.getElementsByClassName("gallery");
    for (var k = 0; k < 5; k++)
        pic[k].src = "resources/"+Math.abs(k-5)+".jpg"
}

function mouseEnterFoot() {
    var pic = document.getElementsByClassName("foot");
    pic[0].style.color = "red";
}
function mouseLeaveFoot() {
    var pic = document.getElementsByClassName("foot");
    pic[0].style.color = "black";
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