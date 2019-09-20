const arrow = document.getElementById("arrow");
const aboutArrow = document.getElementById("aboutArrow");

const div1 = document.querySelector(".divStart1");
const div2 = document.querySelector(".divStart2");
const main = document.querySelector("main");
const html = document.querySelector("html");

const aboutP1 = document.querySelector(".about p:nth-of-type(1)");
const aboutP2 = document.querySelector(".about p:nth-of-type(2)");
const aboutH3first = document.querySelector(".about h3:nth-of-type(1)");
const aboutH3second = document.querySelector(".about h3:nth-of-type(2)");

const offerP = document.querySelector(".offer p");

const offerSpanArray = document.querySelectorAll(".offer span");

const offerH3Array = document.querySelectorAll(".offer h3");
const navLis = document.querySelectorAll("nav li");

const burger2 = document.querySelector(".burger2");
const burger3 = document.querySelector(".burger3");
const navIcon = document.querySelector(".icon");
const nav = document.querySelector("nav");

function preventDefault(e){
  e.preventDefault();
}

$(document).ready(function(){
  $(this).scrollTop(0);
});

document.body.addEventListener('touchmove', preventDefault, { passive: false });

function delayReset() {
  navLis.forEach(li => {
    li.style.transitionDelay = 0 + "s";
  });
}

navIcon.addEventListener("click", function() {
  let delay = 0.5;
  navLis.forEach(li => {
    li.classList.toggle("active");
    li.style.transitionDelay = delay + "s";
    delay += 0.25;
  });
  burger2.classList.toggle("active");
  burger3.classList.toggle("active");
  nav.classList.toggle("active");

  setTimeout(delayReset, 1000);
});

$("nav a").on("click", function() {
  nav.classList.remove("active");
  burger2.classList.remove("active");
  burger3.classList.remove("active");
  navLis.forEach(li => {
    li.classList.remove("active");
  });
  const goToSection = "[data-section=" + $(this).attr("class") + "]";
  $("body, html").animate(
    {
      scrollTop: $(goToSection).offset().top
    },
    1000
  );
});


arrow.addEventListener("click", function() {
  div1.classList.add("show");
  div2.classList.add("show");
  main.classList.add("show");
  navIcon.classList.remove("hide");
  html.style.overflowY = "auto";
  document.body.removeEventListener('touchmove', preventDefault);
});

aboutH3first.addEventListener("click", function() {
  this.classList.add("active");
  aboutH3second.classList.remove("active");
  aboutP1.classList.add("show");
  aboutP2.classList.add("hide");
  aboutP1.classList.remove("hide");
  aboutP2.classList.remove("show");
});

aboutH3second.addEventListener("click", function() {
  this.classList.add("active");
  aboutH3first.classList.remove("active");
  aboutP2.classList.add("show");
  aboutP1.classList.add("hide");
  aboutP2.classList.remove("hide");
  aboutP1.classList.remove("show");
});

const removeClass = () => {
  offerH3Array.forEach((h3, i) => {
    h3.classList.remove("active");
    offerSpanArray[i].classList.remove("show");
  });
};

offerH3Array.forEach((h3, i) => {
  h3.addEventListener("click", function() {
    removeClass();
    this.classList.add("active");
    offerSpanArray[i].classList.add("show");
  });
});
