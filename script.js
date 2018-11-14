"use strict";
console.log("Hi^^");

var log_ = "Log In";
var flag = false;
$("#splog").html(log_);
var email = document.getElementById("mail");
var pass = document.getElementById("pass");

function validate() {
    console.log(email.value);
    console.log(pass.value);
    //there should be sending l&p to server
    log_ = "You are logged in as " + email.value;
    $("#splog").html(log_);
}
var dd = document.getElementById("dropdown");
var bck = document.getElementById("bck");
var bt = document.getElementById("bt");
bt.addEventListener("click", function () {
    dd.style.display = "block";
    bck.style.display = "block"
});

bck.addEventListener("click", function (e) {
    e.stopPropagation();
    dd.style.display = "none";
    bck.style.display = "none";
});

var scroll_u = document.getElementById("up");
scroll_u.addEventListener("click", function (e) {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
var backgrd = document.getElementById("backgrd");
var big = document.getElementById("big_pic");
var pic = document.getElementsByClassName("gallery");
var close = document.getElementById("close");
var img = document.getElementById("img_res");
var i = 1;

[].forEach.call(pic, function (el) {
    el.addEventListener("click", function (e) {
        i++;
        backgrd.style.display = "block";
        big.style.display = "block";
        img.src = "resources/" + (i - 1) + ".jpg"
    });
});

big.addEventListener("click", function (ev) {
    ev.stopPropagation();
});

function close_it() {
    backgrd.style.display = "none";
    big.style.display = "none";
}

close.addEventListener("click", close_it,false);
backgrd.addEventListener("click", close_it, false);
