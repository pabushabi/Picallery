console.log("Hi^^");

for (var i = 0; i < 10; i++)
{
    if (i % 10 === 1)
        console.log(i + "st element.");
    else if (i % 10 === 2)
        console.log(i + "nd element.");
    else if (i % 10 === 3)
        console.log(i + "rd element.");
    else
        console.log(i + "th element.")
}
console.log("Random number: ",Math.round(Math.random() * 10));
var arr = ["a", 1, 3.14];
for (var i = 0; i < arr.length; i++)
    console.log(arr[i]);
console.log(arr);

function logIn() {
    var element = document.getElementById("login");
    var email = document.forms["logIn"]["E-mail"].value;
    var pass = document.forms["logIn"]["Password"].value;
    if (email === "") {
        alert("Enter valid E-mail!");
        return false;
    }
    else {
        element.innerHTML = "You are logged in";
    }
    if (pass === ""){
        alert("Enter valid password!");
        return false;
    }
}

var title = document.getElementById("title");
console.log(title);
title.innerHTML = "1 new message";

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

function mouseInFoot() {
    var pic = document.getElementsByClassName("foot");
    pic[0].style.color = "red";
}
function mouseLeaveFoot() {
    var pic = document.getElementsByClassName("foot");
    pic[0].style.color = "black";
}

function mouseEnterUp() {
    var pic = document.getElementById("up");
    pic.src = "resources/upMoused.jpg";
}
function mouseLeaveUp() {
    var pic = document.getElementById("up");
    pic.src = "resources/up.jpg";
}
