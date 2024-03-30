// for scroll
let scrollbar = () => {
  gsap.registerPlugin(ScrollTrigger);
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".main"),
    smooth: true,
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy(".main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector(".main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
};

scrollbar();

//for animation

let tl = gsap.timeline();

let t2 = gsap.timeline();

tl.from(".logo,#nav-part2 h3,#search,.bar", {
  y: -100,
  duration: 1, // seconds
  delay: 0.5,
  opacity: 0,
  stagger: 0.3,
});

t2.from(
  ".partone,.parttwo,.partthree,.mid,.start,.start2,.start3,.designn,#card1,#card2,#card3",
  {
    y: 50,
    duration: 1, // seconds
    delay: 0.5,
    opacity: 0,
    stagger: 0.3,
  }
);
t2.from(".button1,.button2,.button3,.video1,.video2,.video3", {
  y: -90,
  duration: 2, // seconds
  delay: 0.5,
  opacity: 1,
  stagger: 0.3,
});

gsap.to(".design", {
  x: 490,
  duration: 2, // seconds
  delay: 0.5,
  opacity: 1,
});

let scrollertl = gsap.timeline({
  scrollTrigger: {
    trigger: ".pagetwo .rose ,.newcupcake,.enjoy,.des,.store",
    scroller: ".main",
  },
});
scrollertl.from(".pagetwo .rose,.cur2,.newcupcake,.enjoy,.des,.store", {
  y: 60,
  duration: 1, // seconds
  delay: 0.7,
  opacity: 0,
  stagger: 0.3,
});

// var swiper = new Swiper(".mySwiper", {
//     spaceBetween: 0,
//     centeredSlides: true,
//     loop:true,
//     // autoplay: {
//     //   delay: 2500,
//     //   disableOnInteraction: false,
//     // },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigation: {
//       nextEl: ".swiper-button-next",
//       prevEl: ".swiper-button-prev",
//     },
//   });
// var swiper = new Swiper(".icecreameimgg", {
//     spaceBetween: 0,
//     centeredSlides: true,
//     loop:true,
//     // autoplay: {
//     //   delay: 2500,
//     //   disableOnInteraction: false,
//     // },
//     pagination: {
//       el: ".swiper-pagination",
//       clickable: true,
//     },
//     navigationn: {
//       nextEll: ".arrow1 swiper-button-next",
//       prevEll: ".arrow2 swiper-button-prev",
//     },
//   });

// Hambur

let hamburger = document.querySelector(".bar");
let nav = document.querySelector(".nav");
let hamburgertop = document.querySelector(".top");
let hamburgermid = document.querySelector(".middle");
hamburger.addEventListener("click", () => {
  hamburgertop.classList.toggle("active");
  hamburgermid.classList.toggle("active");
  console.log("hi");
});

window.addEventListener("scroll", function () {
  if (window.scrollY >= nav.offsetTop) {
    nav.classList.add("active");
    console.log("hi");
  } else {
    nav.classList.remove("active");
  }
});
