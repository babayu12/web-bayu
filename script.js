/* ================= TYPING EFFECT ================= */

const texts = [
  "Mahasiswa"
];

let textIndex = 0;
let charIndex = 0;

const typingElement =
  document.getElementById("typing");

function typeEffect(){

  if(charIndex < texts[textIndex].length){

    typingElement.textContent +=
      texts[textIndex].charAt(charIndex);

    charIndex++;

    setTimeout(typeEffect, 120);

  } else {

    setTimeout(eraseEffect, 1800);

  }

}

function eraseEffect(){

  if(charIndex > 0){

    typingElement.textContent =
      texts[textIndex].substring(
        0,
        charIndex - 1
      );

    charIndex--;

    setTimeout(eraseEffect, 60);

  } else {

    textIndex++;

    if(textIndex >= texts.length){
      textIndex = 0;
    }

    setTimeout(typeEffect, 500);

  }

}


/* ================= VIDEO MODAL ================= */

const modal =
  document.getElementById("videoModal");

const modalVideo =
  document.getElementById("modalVideo");


/* OPEN VIDEO */
function openVideo(videoSrc){

  modal.classList.add("show-video");

  document.body.style.overflow = "hidden";

  modalVideo.src = videoSrc;

  modalVideo.load();

}


/* PLAY VIDEO */
function playVideo(){

  modalVideo.play();

}


/* CLOSE VIDEO */
function closeVideo(){

  modal.classList.remove("show-video");

  document.body.style.overflow = "auto";

  modalVideo.pause();

  modalVideo.currentTime = 0;

  modalVideo.src = "";

}


/* CLICK OUTSIDE CLOSE */
modal.addEventListener("click", (e) => {

  if(e.target === modal){

    closeVideo();

  }

});


/* ================= HAMBURGER ANIMATION ONLY ================= */

const hamburger =
  document.getElementById("hamburger");

hamburger.addEventListener("click", () => {

  hamburger.classList.toggle("active");

});


/* ================= EDUCATION SCROLL ================= */

const timeline =
  document.querySelector(".education-timeline");

const lineFill =
  document.querySelector(".education-line-fill");

const items =
  document.querySelectorAll(".education-item");

window.addEventListener("scroll", () => {

  if(!timeline) return;

  const timelineTop =
    timeline.offsetTop;

  const timelineHeight =
    timeline.offsetHeight;

  const scrollY =
    window.scrollY;

  const windowHeight =
    window.innerHeight;

  const progress =
    (
      (scrollY + windowHeight - timelineTop)
      / timelineHeight
    ) * 100;

  lineFill.style.height =
    Math.min(
      Math.max(progress, 0),
      100
    ) + "%";


  items.forEach(item => {

    const itemTop =
      item.offsetTop + timelineTop;

    if(
      scrollY + windowHeight * 0.6 >
      itemTop
    ){

      item.classList.add("active");

    } else {

      item.classList.remove("active");

    }

  });

});


/* ================= NAVBAR SCROLL ================= */

const header =
  document.querySelector(".header");

window.addEventListener("scroll", () => {

  const currentScroll =
    window.pageYOffset;

  /* GLASS EFFECT */
  if(currentScroll > 80){

    header.classList.add("scroll-header");

  } else {

    header.classList.remove("scroll-header");

  }

});


/* ================= PARALLAX ================= */

const homeImage =
  document.querySelector(".home-image");

const homeText =
  document.querySelector(".home-text");

window.addEventListener("mousemove", (e) => {

  if(!homeImage || !homeText) return;

  const x =
    (window.innerWidth / 2 - e.clientX)
    / 40;

  const y =
    (window.innerHeight / 2 - e.clientY)
    / 40;

  homeImage.style.transform =
    `translate(${x}px, ${y}px)`;

  homeText.style.transform =
    `translate(${x / 2}px, ${y / 2}px)`;

});


/* ================= ACTIVE NAVBAR ================= */

const sections =
  document.querySelectorAll("section[id]");

const navLinks =
  document.querySelectorAll(".nav-link");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const sectionTop =
      section.offsetTop - 150;

    const sectionHeight =
      section.offsetHeight;

    if(
      window.scrollY >= sectionTop &&
      window.scrollY <
      sectionTop + sectionHeight
    ){

      current =
        section.getAttribute("id");

    }

  });

  navLinks.forEach(link => {

    link.classList.remove("active");

    if(
      link.getAttribute("href") ===
      `#${current}`
    ){

      link.classList.add("active");

    }

  });

});


/* ================= SMOOTH SCROLL ================= */

navLinks.forEach(link => {

  link.addEventListener("click", (e) => {

    e.preventDefault();

    const targetId =
      link.getAttribute("href");

    const targetSection =
      document.querySelector(targetId);

    if(targetSection){

      window.scrollTo({
        top:
          targetSection.offsetTop - 120,
        behavior: "smooth"
      });

    }

  });

});


/* ================= START ================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    typeEffect();

    navHighlighter();

  }
);