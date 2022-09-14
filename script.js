document.querySelector(".bars__menu-mobile").addEventListener("click", animateBars);

const line1Bars = document.querySelector(".bars-lines__menu1")

const line2Bars = document.querySelector(".bars-lines__menu2")

const line3Bars = document.querySelector(".bars-lines__menu3")

const nav = document.querySelector(".nav-header")

function animateBars(){
    line1Bars.classList.toggle("bars-lines__menu1_active") 
    line2Bars.classList.toggle("bars-lines__menu2_active") 
    line3Bars.classList.toggle("bars-lines__menu3_active") 
   nav.classList.toggle("activate")
}