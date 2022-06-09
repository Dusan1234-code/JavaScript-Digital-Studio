const hamburger = document.querySelector(".js-hamburger");
const overlay = document.querySelector(".js-overlay");
const close = document.querySelector(".js-close");
const body = document.querySelector(".body");





hamburger.addEventListener("click",()=>{
    body.classList.add("scroll");
    overlay.classList.toggle("header__overlay--active");
})

close.addEventListener("click",()=>{
    body.classList.remove("scroll");
    overlay.classList.remove("header__overlay--active");
})