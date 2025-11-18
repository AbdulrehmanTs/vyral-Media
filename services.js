// Elements
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const servicesHero = document.querySelector(".services-hero");
const progressLine = document.querySelector(".progress-line");
const progressStart = document.querySelector(".progress-start");
const slideContents = document.querySelectorAll(".slide-content");
const chevron = document.querySelectorAll(".chevron");
const slideDurationLine = document.querySelector(".slide-duration-line");
const cubes_container = document.querySelector("#cubes-container");
const threeD_1 = document.querySelector(".threeD-cube-1");
const threeD_2 = document.querySelector(".threeD-cube-2");
const threeD_3 = document.querySelector(".threeD-cube-3");
const threeD_4 = document.querySelector(".threeD-cube-4");
const h_blue_s = document.querySelector(".h-blue-s");
const h_orange_s = document.querySelector(".h-orange-s");
const t_blue_s = document.querySelector(".t-blue-s");
const t_orange_s = document.querySelector(".t-orange-s");
const laptop = document.querySelector(".laptop");
const tablet = document.querySelector(".tablet");
const mobile = document.querySelector(".mobile");
const mac_cont = document.querySelector(".mac-cont");
const iphone_cont = document.querySelector(".iphone-cont");
const ipad_cont = document.querySelector(".ipad-cont");

const mac_cont_1 = document.querySelector(".mac-cont1");
const mac_cont_2 = document.querySelector(".mac-cont2");
const mac_cont_3 = document.querySelector(".mac-cont3");

// // GSAP in 3D cubes
// let tl1 = gsap.timeline();
// let tl2 = gsap.timeline();
// let sliderToggle = true;
// chevron?.forEach((chev) => {
//     chev?.addEventListener('click', () => {
//         sliderToggle = !sliderToggle;
//         clearInterval(autoSlider); // stop old interval
//         startAutoSlide(); // start new interval
//         if (sliderToggle) {
//             cubes_container.style.background = 'linear-gradient(130deg, rgb(255, 236, 133) 0%, rgb(236, 104, 91) 100%)';
//             gsap.fromTo(threeD_1, { x: 1200, y: -600 }, { x: 0, y: 0, opacity: 1, duration: 1 });
//             gsap.fromTo(threeD_2, { x: -1000, y: 600 }, { x: 0, y: 0, opacity: 1, duration: 1 });
//             gsap.to(threeD_3, { opacity: 0, x: 600, y: 1000, duration: 1 });
//             gsap.to(threeD_4, { opacity: 0, y: 100, duration: 0.2 });
//             gsap.to(h_blue_s, { x: -1000, y: 600, opacity: 0, duration: 0.5 });
//             gsap.to(h_orange_s, { y: 0, opacity: 1, duration: 0.5, delay: 0.5 });
//             gsap.to(t_blue_s, { x: 300, y: -600, duration: 1, opacity: 0 });
//             gsap.to(t_orange_s, { y: 0, opacity: 1, duration: 0.5, delay: 0.5 });
//             gsap.to([laptop, mac_cont, tablet, ipad_cont, mobile, iphone_cont], {
//                 opacity: 0, x: -1200, y: -800, duration: 0.5,
//                 onComplete: () => {
//                     gsap.fromTo([laptop, mac_cont], { x: -1000, y: 600, opacity: 0, duration: 0.2, delay: 0 }, { x: 0, y: 0, opacity: 1 });
//                     gsap.fromTo([tablet, mobile, ipad_cont, iphone_cont], { x: -1000, y: 600, opacity: 0, duration: 0.5, delay: 0 }, { x: 0, y: 0, opacity: 0 });
//                 }
//             });
//             if (window.innerWidth < 768) {
//             gsap.fromTo(mac_cont_1, { x: 0, y: 0 }, {
//                 x: 5, y: 5, opacity: 1, delay: 1, duration: 0.5,
//                 onComplete: () => { gsap.to(mac_cont_1, { x: 500, y: -180, opacity: 0, delay: 3.5, duration: 1 }); }
//             });
//             gsap.fromTo(mac_cont_2, { x: 0, y: 0 }, {
//                 x: 10, y: 10, opacity: 1, delay: 1, duration: 0.5,
//                 onComplete: () => { gsap.to(mac_cont_2, { x: 500, y: -180, opacity: 0, delay: 2, duration: 1 }); }
//             });
//             gsap.fromTo(mac_cont_3, { x: 0, y: 0 }, {
//                 x: 15, y: 15, opacity: 1, delay: 1, duration: 0.5,
//                 onComplete: () => { gsap.to(mac_cont_3, { x: 500, y: -180, opacity: 0, delay: 0.5, duration: 1 }); }
//             });
//             }
//             else{
//                 gsap.fromTo(mac_cont_1, { x: 0, y: 0 }, {
//                 x: 15, y: 15, opacity: 1, delay: 1, duration: 0.5,
//                 onComplete: () => { gsap.to(mac_cont_1, { x: 500, y: -180, opacity: 0, delay: 3.5, duration: 1 }); }
//             });
//             gsap.fromTo(mac_cont_2, { x: 0, y: 0 }, {
//                 x: 30, y: 30, opacity: 1, delay: 1, duration: 0.5,
//                 onComplete: () => { gsap.to(mac_cont_2, { x: 500, y: -180, opacity: 0, delay: 2, duration: 1 }); }
//             });
//             gsap.fromTo(mac_cont_3, { x: 0, y: 0 }, {
//                 x: 45, y: 45, opacity: 1, delay: 1, duration: 0.5,
//                 onComplete: () => { gsap.to(mac_cont_3, { x: 500, y: -180, opacity: 0, delay: 0.5, duration: 1 }); }
//             });
//             }

//         } else {
//             cubes_container.style.background = 'linear-gradient(to right, #46d7fc, #6b86f2)';
//             gsap.to(threeD_1, { opacity: 0, x: 100, y: -100, duration: 0.5 });
//             gsap.to(threeD_2, { opacity: 0, x: -100, y: 100, duration: 0.2 });
//             gsap.to(threeD_3, { x: 0, y: 0, opacity: 1, duration: 1 });
//             gsap.fromTo(threeD_4, { opacity: 0, x: 100, y: 100 }, { x: 0, y: 0, opacity: 1, duration: 0.5 });
//             gsap.to(h_blue_s, { x: 0, y: 0, opacity: 1, duration: 0.5, delay: 0.5 });
//             gsap.to(h_orange_s, { y: -1000, opacity: 0, duration: 0.5 });
//             gsap.to(t_blue_s, { x: 0, y: 0, opacity: 1, duration: 0.5, delay: 0.5 });
//             gsap.to(t_orange_s, { y: 1000, opacity: 1, duration: 0.5 });
//             if (window.innerWidth <= 1535 && window.innerWidth > 1023) {
//                 gsap.to([laptop, mac_cont, tablet, mobile, ipad_cont, iphone_cont], { x: 140, y: -160, duration: 0.5, delay: 0, opacity: 1 });
//             }
//             else if (window.innerWidth <= 1023 && window.innerWidth > 767) {
//                 gsap.to([laptop, mac_cont, tablet, mobile, ipad_cont, iphone_cont], { x: 100, y: -100, duration: 0.5, delay: 0, opacity: 1 });
//             }
//             else if (window.innerWidth <= 767 && window.innerWidth > 639) {
//                 gsap.to([laptop, mac_cont, tablet, mobile, ipad_cont, iphone_cont], { x: 160, y: -80, duration: 0.5, delay: 0, opacity: 1 });
//             }
//             else if (window.innerWidth <= 639 && window.innerWidth > 424) {
//                 gsap.to([laptop, mac_cont, tablet, mobile, ipad_cont, iphone_cont], { x: 140, y: -20, duration: 0.5, delay: 0, opacity: 1 });
//             }
//             else if (window.innerWidth <= 424) {
//                 gsap.to([laptop, mac_cont, tablet, mobile, ipad_cont, iphone_cont], { x: 80, y: -20, duration: 0.5, delay: 0, opacity: 1 });
//             }
//             else {
//                 gsap.to([laptop, mac_cont, tablet, mobile, ipad_cont, iphone_cont], { x: 140, y: -270, duration: 0.5, delay: 0, opacity: 1 });
//             }
//             gsap.fromTo(mac_cont_3, { x: 45, y: 45, opacity: 1 }, { x: 0, y: 0, delay: 0, opacity: 0, duration: 0 });
//             gsap.fromTo(mac_cont_2, { x: 30, y: 30, opacity: 1 }, { x: 0, y: 0, delay: 0, opacity: 0, duration: 0 });
//             gsap.fromTo(mac_cont_1, { x: 15, y: 15, opacity: 1 }, { x: 0, y: 0, delay: 0, opacity: 0, duration: 0 });
//         }
//     });
// });

// gsap.to(threeD_3, {
//     x: 600,
//     y: 1000,
//     duration: 0,
// })
// gsap.to(threeD_4, {
//     x: -1200,
//     y: 800,
//     duration: 0,
// })
// gsap.to(h_orange_s, {
//     y: -1000,
//     opacity: 0,
//     duration: 0,
// })
// gsap.to(t_orange_s, {
//     y: 1000,
//     opacity: 0,
//     duration: 0,
// })
// gsap.to([tablet, mobile, iphone_cont, ipad_cont], {
//     opacity: 0,
//     duration: 0,
// })
// gsap.to([mac_cont_1, mac_cont_2, mac_cont_3], {
//     opacity: 0,
//     duration: 0,
// })

// // Animate cubes when section comes into view
// let animateCubesOnScroll = gsap.timeline({
//     scrollTrigger: {
//         trigger: cubes_container,
//         start: "top bottom",
//     }
// });

// animateCubesOnScroll.add([
//     gsap.from(threeD_1, { x: 1000, y: -600, duration: 1 }),
//     gsap.from(threeD_2, { x: -1000, y: 600, duration: 1 }),
//     gsap.from([laptop, mac_cont], { x: -1000, y: 600, duration: 0.5, delay: 0.5 }),
//     gsap.to(h_blue_s, { x: -1000, y: 600, duration: 0, opacity: 0 }),
//     gsap.to(t_blue_s, { x: 300, y: -600, duration: 0, opacity: 0 }),
//     gsap.to(h_orange_s, { y: 0, opacity: 1, duration: 0.5, delay: 0.5 }),
//     gsap.to(t_orange_s, { y: 0, opacity: 1, duration: 0.5, delay: 0.5 })
// ]);

// let autoSlider;

// // function to start the interval
// function startAutoSlide() {
//     autoSlider = setInterval(() => {
//         chevron[0].click();
//     }, 10000);
// }

// // start initially
// startAutoSlide();

// ---------------------------------------------
let bgNumber = 1;
const bgColors = [
  "linear-gradient(0deg, #bc400b 0%, #000000 100%)",
  "linear-gradient(70deg, #bc400b 0%, #000000 100%)",
  "linear-gradient(140deg, #bc400b 0%, #000000 100%)",
  "linear-gradient(210deg, #bc400b 0%, #000000 100%)",
  "linear-gradient(280deg, #bc400b 0%, #000000 100%)",
  "linear-gradient(350deg, #bc400b 0%, #000000 100%)",
];
const heights = [
  "16.66666666666667%",
  "33.33333333333333%",
  "50%",
  "66.66666666666667%",
  "83.33333333333334%",
  "100%",
]; // heights in percentage

// Initial setup
progressLine && (progressLine.style.height = heights[0]);
servicesHero && (servicesHero.style.background = bgColors[0]);
progressStart &&
  (progressStart.textContent = String(bgNumber).padStart(2, "0")); // "01"

// Function to animate number change
function animateNumber(newNumber) {
  const tl = gsap.timeline();

  tl.to(progressStart, {
    opacity: 0,
    y: -10,
    duration: 0.2,
    ease: "power2.in",
  })
    .add(() => {
      progressStart.textContent = String(newNumber).padStart(2, "0");
    })
    .to(progressStart, {
      opacity: 1,
      y: 0,
      duration: 0.3,
      ease: "power2.out",
    });
}

// Common function to update both background & progress
function updateVisuals() {
  // Animate background color
  gsap.to(servicesHero, {
    background: bgColors[bgNumber - 1],
    duration: 1,
    ease: "power2.inOut",
  });

  // Animate height smoothly
  gsap.fromTo(
    progressLine,
    {
      height: 0,
    },
    {
      height: heights[bgNumber - 1],
      duration: 1,
      ease: "power2.inOut",
    }
  );

  // Animate number text
  animateNumber(bgNumber);
}

let slideAnimation = gsap.to(slideDurationLine, {
  height: "100%",
  duration: 8,
  ease: "none",
  repeat: -1,
  onRepeat: () => contentChange(),
});

//  services hero content changer
let contentChanger = () => {
  slideContents.forEach((content, idx) => {
    if (idx === bgNumber - 1) {
      content.classList.replace("hidden", "flex");
    } else {
      content.classList.replace("flex", "hidden");
    }
  });
};

contentChanger();

// let clickedIndex = 0;
document.querySelectorAll(".pagination-btn").forEach((button, index) => {
  button.addEventListener("click", () => {
    paginationfunc(index + 1);
    bgNumber = index + 1;
    updateVisuals();
    contentChanger();
    animateSplitText([".title", ".heading", ".description"], "down"); // from bottom to top
    slideAnimation.restart(true);
  });
});

// pagination buttons functionality
let paginationfunc = (contentNum) => {
  document.querySelectorAll(".pagination-btn").forEach((btn, idx) => {
    if (idx + 1 !== contentNum) {
      btn.classList.replace("bg-white", "bg-white/20");
      btn.classList.replace("w-8", "w-4");
      btn.classList.add("hover:bg-white/40");
    } else {
      btn.classList.replace("bg-white/20", "bg-white");
      btn.classList.replace("w-4", "w-8");
      btn.classList.remove("hover:bg-white/40");
    }
  });
};

let contentChange = () => {
  bgNumber++;
  if (bgNumber > 6) bgNumber = 1;
  updateVisuals();
  contentChanger();
  animateSplitText([".title", ".heading", ".description"], "down"); // from bottom to top
  slideAnimation.restart(true);
  paginationfunc(bgNumber);
};

slideContents.forEach((item) => {
  let startX = 0;
  let endX = 0;
  const minSwipeDistance = 50; // px

  item.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
  });

  item.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    handleSwipe();
  });

  function handleSwipe() {
    const diff = endX - startX;

    if (Math.abs(diff) < minSwipeDistance) return; // ignore tiny movements

    if (diff > 0) {
      console.log("Swiped RIGHT");
      onSwipeRight();
    } else {
      console.log("Swiped LEFT");
      onSwipeLeft();
    }
  }

  function onSwipeRight() {
    // your custom logic
    // alert("Swipe Right!");
    bgNumber--;
    if (bgNumber < 1) bgNumber = 6;
    updateVisuals();
    contentChanger();
    animateSplitText([".title", ".heading", ".description"], "up"); // from top to bottom
    slideAnimation.restart(true);
    paginationfunc(bgNumber);
  }

  function onSwipeLeft() {
    // your custom logic
    // alert("Swipe Left!");
    bgNumber++;
    if (bgNumber > 6) bgNumber = 1;
    updateVisuals();
    contentChanger();
    animateSplitText([".title", ".heading", ".description"], "up"); // from top to bottom
    slideAnimation.restart(true);
    paginationfunc(bgNumber);
  }
});

// Prev button
prevBtn?.addEventListener("click", () => {
  bgNumber--;
  if (bgNumber < 1) bgNumber = 6;
  updateVisuals();
  contentChanger();
  animateSplitText([".title", ".heading", ".description"], "up"); // from top to bottom
  slideAnimation.restart(true);
  paginationfunc(bgNumber);
});

// Next button
nextBtn?.addEventListener("click", () => {
  bgNumber++;
  if (bgNumber > 6) bgNumber = 1;
  updateVisuals();
  contentChanger();
  animateSplitText([".title", ".heading", ".description"], "up"); // from top to bottom
  slideAnimation.restart(true);
  paginationfunc(bgNumber);
});

// ================== SPLIT TEXT ANIMATION FUNCTION ==================
function animateSplitText(selector, direction = "up") {
  // Direction logic: up means text comes from top, down means from bottom
  const yValue = direction === "up" ? -400 : 300;

  // Create split text effect
  SplitText.create(selector, {
    type: "lines",
    mask: "lines",
    onSplit: (self) => {
      gsap.from(self.lines, {
        y: yValue,
        duration: 1,
      });
    },
  });
}
animateSplitText([".title", ".heading", ".description"], "down"); // from bottom to top

// Smooth intro animation for video text elements
// gsap.from([".on-video-heading", ".on-video-text"], {
//     scale: 1.5,
//     filter: "blur(10px)",
//     //   opacity: 0,
//     duration: 1,
//     //   delay: 1,
//     ease: "power3.out",
//     stagger: 0.2
// });

// Sliders

new Swiper(".testimonials", {
  loop: true,
  speed: 700,
  autoplay: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper(".brands", {
  loop: true,
  speed: 400,
  autoplay: true,
  slidesPerView: 2,
  breakpoints: {
    440: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 5,
      spaceBetween: 50,
    },
  },
});
