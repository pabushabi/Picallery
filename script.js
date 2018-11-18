"use strict";
console.log("Hi^^");

(function () {
    let galleryMain = document.getElementsByClassName('galleryMain');
    for (let i = 0; i < 20; i++){
        let img = document.createElement('img');
        img.className = 'gallery';
        img.id = i+1;
        img.src = 'resources/' + (i+1) + '.jpg';
        galleryMain[0].appendChild(img);
    }
})();

let log_ = "Log In";
const flag = false;
$("#splog").html(log_);
const email = document.getElementById("mail");
const pass = document.getElementById("pass");

function validate() {
    console.log(email.value);
    console.log(pass.value);
    //there should be sending l&p to server
    log_ = "You are logged in as " + email.value;
    $("#splog").html(log_);
}

const dd = document.getElementById("dropdown");
const bck = document.getElementById("bck");
const bt = document.getElementById("bt");
bt.addEventListener("click", function () {
    dd.style.display = "block";
    bck.style.display = "block"
});

bck.addEventListener("click", function (e) {
    e.stopPropagation();
    dd.style.display = "none";
    bck.style.display = "none";
});

const scroll_u = document.getElementById("up");
scroll_u.addEventListener("click", function (e) {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
const backgrd = document.getElementById("backgrd");
const big = document.getElementById("big_pic");
const pic = document.getElementsByClassName("gallery");
const close = document.getElementById("close");
const img = document.getElementById("img_res");

[].forEach.call(pic, function (el) {
    el.addEventListener("click", function (e) {
        backgrd.style.display = "block";
        big.style.display = "block";
        img.src = "resources/" + e.target.id + ".jpg"
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
