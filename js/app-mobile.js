let hamburger = document.getElementById("hamburger");

let menu = document.getElementById("hamburger-menu");

let title = document.getElementById("header-menu")

hamburger.addEventListener("click",function() {

    hamburger.classList.toggle("active");
    menu.classList.toggle("active");

    title.classList.toggle("active")
});


