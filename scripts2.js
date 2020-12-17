"use strict";

let mainNavLinks = document.querySelectorAll("span");
let mainSections = document.querySelectorAll("#section1, #section2, #section3");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("highlighted");
    } else {
      link.classList.remove("highlighted");
    }
  });
});