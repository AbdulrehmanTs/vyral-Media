// Elements
const hero_section = document.querySelector(".hero-section");
const bigBox = document.querySelector("#bigBox");
const overlayRemover = document.querySelector(".overlay-remover");
const phoneImg = document.querySelector("#iPhoneImg");
const serviceItems = document.querySelectorAll(".service-item");
const heroSocialIcons = document.querySelectorAll(".hero-social-icons");
const phoneBox = document.querySelector(".phone-box");
const overlay = document.querySelector(".content-overlay");
const heading = document.querySelector(".overlay-heading-text");
const button = document.querySelector(".overlay-button");

// --- CLIP-PATH SCROLL ANIMATION ---
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(SplitText);

// Slider images overlay remover
let overlayRemoverClicked = false;
overlayRemover.addEventListener("click", () => {
  overlayRemoverClicked = !overlayRemoverClicked;

  if (overlayRemoverClicked) {
    // Fade out all overlay elements
    gsap.to(overlay, { opacity: 0, duration: 0.8, ease: "power2.out" });
    gsap.to([heading, button], {
      opacity: 0,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.out",
    });
    document
      .querySelector(".overlay-remover-icon")
      .classList.replace(
        "fa-arrow-up-right-from-square",
        "fa-down-left-and-up-right-to-center"
      );
  } else {
    // Fade back in
    gsap.to(overlay, {
      opacity: 0.6,
      duration: 0.8,
      ease: "power2.inOut",
    });
    gsap.to([heading, button], {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: 0.1,
      ease: "power2.inOut",
    });
    document
      .querySelector(".overlay-remover-icon")
      .classList.replace(
        "fa-down-left-and-up-right-to-center",
        "fa-arrow-up-right-from-square"
      );
  }
});

// --- INITIAL ANIMATIONS ---
document.addEventListener("DOMContentLoaded", () => {
  gsap.fromTo(
    ".hero-bg-img",
    { y: 2000 },
    { y: 0, duration: 1.3, ease: "power3.out" }
  );
  gsap.fromTo(
    ".hero-txt-content",
    { y: 1000 },
    { y: 0, duration: 1.2, delay: 0.5, ease: "power3.out", stagger: 0.1 }
  );
  gsap.fromTo(
    ".astronaut",
    { y: -1000, x: -1500 },
    { y: 0, x: 0, delay: 0.7, duration: 1.2, ease: "power3.out", stagger: 0.1 }
  );
  gsap.fromTo(
    ".hero-social-line",
    { scale: 0 },
    { scale: 1, delay: 0.7, duration: 0.8, ease: "power3.out" }
  );
  gsap.fromTo(
    heroSocialIcons,
    { y: -100, opacity: 0 },
    {
      y: 0,
      delay: 1,
      duration: 1,
      ease: "power3.out",
      stagger: 0.3,
      opacity: 1,
    }
  );
});

// --- PARALLAX MOUSE MOVE ---
if (hero_section) {
  hero_section.addEventListener("mousemove", (e) => {
    const x = (e.clientX / window.innerWidth - 0.5) * 20;
    const y = (e.clientY / window.innerHeight - 0.5) * 20;
    gsap.to(".astronaut", { duration: 2, x, y, ease: "power3.out" });
    gsap.to(".hero-heading", { duration: 2, x: -x, y: -y, ease: "power3.out" });
    gsap.to(".hero-pera", { duration: 2, x: x, y: -y, ease: "power3.out" });
  });
}

const state = {
  topDepth: 10, // Top V depth (initial V)
  bottomDepth: 100, // Bottom straight (initially flat)
};
if (window.innerWidth < 768) {
  state.leftSpread = 0;
}

function applyClip() {
  const clip = `polygon(
    0 0, 0% 0, 50% ${state.topDepth}% , 100% 0,
    100% 0, 100% 100%, 100% 100%, 50% ${state.bottomDepth}%, 0% 100%, 0 100%
  )`;
  bigBox.style.clipPath = bigBox.style.webkitClipPath = clip;
}
applyClip();

// --- Top V -> Straight ---
gsap.to(state, {
  topDepth: 0, // V closes to straight line
  leftSpread: 0,
  rightSpread: 100,
  ease: "none",
  onUpdate: applyClip,
  scrollTrigger: {
    trigger: bigBox,
    start: "top center",
    end: "140vh",
    scrub: true,
  },
});
let bottomV = () => {
  let bottomState = {
    bottomDepth: 90, // Straight turns into V shape
    ease: "none",
    onUpdate: applyClip,
    scrollTrigger: {
      trigger: bigBox,
      start: "top start",
      end: "180vh",
      scrub: true,
    },
  };

  // Adjust values for smaller screens
  if (window.innerWidth < 768) {
    bottomState.bottomDepth = 95;
  }

  return bottomState;
};

// --- Bottom Straight -> V ---
gsap.to(state, bottomV());

// --- SMOOTH SCROLL ---
// (function smoothScroll({ ease = 0.12, multiplier = 1 } = {}) {
//   let target = window.scrollY;
//   if (target) {
//     current = target,
//     running = false;
//   }

//   function tick() {
//     current += (target - current) * ease;
//     window.scrollTo(0, current);
//     if (Math.abs(target - current) > 0.5) requestAnimationFrame(tick);
//     else running = false;
//   }

//   window.addEventListener(
//     "wheel",
//     (e) => {
//       if (e.ctrlKey) return; // ignore pinch zoom
//       e.preventDefault();
//       let delta =
//         e.deltaY *
//         (e.deltaMode === 1 ? 16 : e.deltaMode === 2 ? window.innerHeight : 1);
//       const max = document.documentElement.scrollHeight - window.innerHeight;
//       target = Math.max(0, Math.min(max, target + delta * multiplier));
//       if (!running) {
//         running = true;
//         requestAnimationFrame(tick);
//       }
//     },
//     { passive: false }
//   );
// })();

// --- Phone images ---

const imageCount = serviceItems.length; // Assuming 1.png, 2.png, ..., N.png
const preloadedImages = [];

for (let i = 1; i <= imageCount; i++) {
  const img = new Image();
  img.src = `./assets/img/${i}.jpg`;
  preloadedImages.push(img);
}

serviceItems.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    // Animate all other items to lower opacity
    serviceItems.forEach((el) => {
      if (el !== item) {
        gsap.to(el, { opacity: 0.3, duration: 0.4, ease: "power2.out" });
      }
    });

    // Highlight the hovered item
    gsap.to(item, { opacity: 1, duration: 0.4, ease: "power2.out" });

    // Smooth image transition with preloaded image
    gsap.to(phoneImg, {
      opacity: 0,
      duration: 0,
      onComplete: () => {
        phoneImg.src = preloadedImages[index].src;
        gsap.to(phoneImg, { opacity: 1, duration: 0 });
      },
    });
  });

  item.addEventListener("mouseleave", () => {
    // Reset all item opacities
    serviceItems.forEach((el) => {
      gsap.to(el, { opacity: 1, duration: 0.4, ease: "power2.out" });
    });
  });
});

let mobileBlur = gsap.timeline({
  scrollTrigger: {
    trigger: phoneBox,
    start: "10% top",
    // end: "bottom top",
    scrub: true,
  },
});

mobileBlur.add([
  gsap.to(phoneBox, {
    filter: "blur(8px)",
    ease: "power2.out",
    overwrite: true,
  }),
]);

// --- Infinite Image Slider ---
// Using GSAP for smooth animation
const slider = document.querySelector(".slider");
const slides = slider.querySelectorAll("img");
const totalWidth = slider.scrollWidth; // total width of the image set

// Clone all slides once for infinite loop effect
slides.forEach((slide) => {
  const clone = slide.cloneNode(true);
  slider.appendChild(clone);
});

// Create infinite loop animation
gsap.to(slider, {
  x: `-${totalWidth}px`,
  duration: 40,
  ease: "none",
  repeat: -1,
  modifiers: {
    x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth), // wrap movement
  },
});

// Optional: Pause on hover
slider.addEventListener("mouseenter", () => gsap.globalTimeline.pause());
slider.addEventListener("mouseleave", () => gsap.globalTimeline.play());

// Parallax effect on scroll
let ticking = false;

window.addEventListener("scroll", () => {
  if (!ticking) {
    window.requestAnimationFrame(() => {
      ticking = false;
    });
    ticking = true;
  }
});

//

const cardContainer = document.getElementById("card-container");
const card = document.getElementById("card");
const laptop = document.getElementById("laptop");
const tablet = document.getElementById("tablet");
const phone = document.getElementById("phone");

let isHovering = false;

cardContainer?.addEventListener("mousemove", (e) => {
  const rect = cardContainer.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const y = e.clientY - rect.top;

  const centerX = rect.width / 3;
  const centerY = rect.height / 3;

  const rotateX = (y - centerY) / 40;
  const rotateY = (centerX - x) / 40;

  card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;

  if (isHovering) {
    laptop.style.transform = `translateZ(60px) rotateY(-5deg)`;
    tablet.style.transform = `translateX(-50%) translateZ(80px)`;
    phone.style.transform = `translateZ(100px) rotateY(5deg)`;
  }
});

cardContainer?.addEventListener("mouseleave", () => {
  isHovering = false;
  card.style.transform = "rotateX(0deg) rotateY(0deg) scale(1)";

  laptop.style.transform = "translateZ(40px) rotateY(-5deg)";
  tablet.style.transform = "translateX(-50%) translateZ(60px)";
  phone.style.transform = "translateZ(80px) rotateY(5deg)";
});

// gravity astraunaut

const particlesContainer = document.getElementById("particles");
const particleCount = 50;

for (let i = 0; i < particleCount; i++) {
  const particle = document.createElement("div");
  particle.className = "particle";
  const size = Math.random() * 4 + 1;
  particle.style.width = `${size}px`;
  particle.style.height = `${size}px`;
  particle.style.left = `${Math.random() * 100}%`;
  particle.style.top = `${Math.random() * 100}%`;
  particle.style.opacity = Math.random() * 0.5 + 0.3;
  particlesContainer.appendChild(particle);
}

// Mouse position
let mouseX = 0;
let mouseY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
  mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
});

// Animate particles with GSAP
const particles = document.querySelectorAll(".particle");
particles.forEach((particle, i) => {
  const duration = Math.random() * 3 + 2;
  const delay = Math.random() * 2;

  gsap.to(particle, {
    y: `+=${Math.random() * 100 + 50}`,
    x: `+=${Math.random() * 100 - 50}`,
    duration: duration,
    delay: delay,
    repeat: -1,
    yoyo: true,
    ease: "sine.inOut",
  });
});

// Animate WEB 3.0 title
// gsap.from(".web3-title h1", {
//   opacity: 0,
//   y: -50,
//   duration: 1,
//   stagger: 0.2,
//   ease: "power3.out",
// });

// Floating animation for astronaut
// gsap.to(".astronaut-container", {
//   y: 10,
//   duration: 2,
//   repeat: -1,
//   yoyo: true,
//   ease: "sine.inOut",
// });

// Rotate astronaut slightly
// gsap.to(".floating-astronaut", {
//   rotation: 2,
//   duration: 3,
//   repeat: -1,
//   yoyo: true,
//   ease: "sine.inOut",
// });

// Mouse follow effect
gsap.ticker.add(() => {
  // Move title based on mouse
  // gsap.to(".web3-title", {
  //   x: mouseX * 30,
  //   y: mouseY * 20,
  //   duration: 0.5,
  //   ease: "power2.out",
  // });

  // Move astronaut (more dramatic movement)
  // gsap.to(".astronaut-container", {
  //   x: mouseX * 20,
  //   rotationY: mouseX * 20,
  //   duration: 0.8,
  //   ease: "power2.out",
  // });

  // Move subtitle
  if (document.querySelector(".subtitle-container")) {
    // Animate subtitle
    gsap.from(".subtitle-container", {
      opacity: 0,
      scale: 0.8,
      duration: 1,
      delay: 0.5,
      ease: "back.out(1.7)",
    });

    gsap.to(".subtitle-container", {
      x: mouseX * 20,
      y: mouseY * 15,
      duration: 0.6,
      ease: "power2.out",
    });
  }

  // Move particles based on mouse
  particles.forEach((particle, i) => {
    const speed = ((i % 3) + 1) * 10;
    gsap.to(particle, {
      x: `+=${mouseX * speed}`,
      y: `+=${mouseY * speed}`,
      duration: 1,
      ease: "power2.out",
    });
  });
});

// const video = document.getElementById("scroll-video");

// video?.addEventListener("loadedmetadata", () => {
//   if (isNaN(video.duration) || video.duration === 0) {
//     console.error("Video duration not available.");
//     return;
//   }

//   const vidDuration = video.duration;
//   video.pause();

//   let targetTime = 0; // Where we want the video to go
//   let currentTime = 0; // The smoothed current time
//   let rafId = null;

//   // Easing factor (smaller = smoother but slower response)
//   const ease = 0.1;

//   function smoothUpdate() {
//     const diff = targetTime - currentTime;
//     if (Math.abs(diff) > 0.01) {
//       currentTime += diff * ease;
//       video.currentTime = currentTime;
//       rafId = requestAnimationFrame(smoothUpdate);
//     } else {
//       // Stop updating if close enough
//       currentTime = targetTime;
//       video.currentTime = currentTime;
//       cancelAnimationFrame(rafId);
//       rafId = null;
//     }
//   }

//   ScrollTrigger.create({
//     trigger: "#video-section",
//     start: "top top",
//     end: "+=3000",
//     scrub: true,
//     pin: true,
//     onUpdate: (self) => {
//       targetTime = self.progress * vidDuration;
//       if (!rafId) {
//         smoothUpdate(); // Start the rAF loop if it's not already running
//       }
//     },
//   });
// });

// play canvas video on scroll
const canvas = document.querySelector("#canvas");
const context = canvas.getContext("2d");

canvas.width = 3840;
canvas.height = 2160;

const frameCount = 141;
const currentFrame = (index) =>
  `./assets/dna/ezgif-frame-${(index + 1).toString().padStart(3, "0")}.jpg`;

const images = [];
const dna = { frame: 0 };

for (let i = 0; i < frameCount; i++) {
  const img = new Image();
  img.src = currentFrame(i);
  images.push(img);
}

gsap.to(dna, {
  frame: frameCount * 8 - 1,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    trigger: ".dna-section",
    start: "top 10%",
    end: "+=3000 top",
    scrub: 1,
    pin: true,
  },
  onUpdate: render,
});

images[0].onload = render;

function render() {
  const slowFrame = Math.floor(dna.frame / 8);
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.drawImage(images[slowFrame], 0, 0);
}

// --- OVERLAY TEXT ANIMATION ---
const videoOverlay = gsap.timeline({
  scrollTrigger: {
    trigger: ".dna-section",
    start: "top 10%",
    end: "+=3000",
    scrub: true,
  },
});

let text1split = SplitText.create("#overlay-text-box-1", { type: "chars" });
let text2split = SplitText.create("#overlay-text-box-2", { type: "chars" });
let text3split = SplitText.create("#overlay-text-box-3", { type: "chars" });

videoOverlay.add([
  gsap.to(text1split.chars, {
    y: () => gsap.utils.random(-350, -1250),
    opacity: 0,
    stagger: { each: 0.07, from: "start" }, // random order
    duration: 400,
  }),
  gsap.from(text2split.chars, {
    delay: 100,
    duration: 300,
    y: () => gsap.utils.random(2050, 550), // random vertical offset
    opacity: 0.8,
    stagger: { each: 0.04, from: "random" }, // random order
  }),
  gsap.to(text2split.chars, {
    delay: 400,
    duration: 500,
    y: () => gsap.utils.random(-1250, -550),
    opacity: 0,
    stagger: { each: 0.06, from: "random" },
  }),
  gsap.from(text3split.chars, {
    delay: 500,
    duration: 400,
    y: () => gsap.utils.random(1250, 650),
    opacity: 0,
    stagger: { each: 0.08, from: "random" },
  }),
]);
// .add([
//   gsap.from(text2split.chars, {
//     y: () => gsap.utils.random(250, 350), // random vertical offset
//     opacity: 0.5,
//     autoAlpha: 0,
//     stagger: { each: 0.08, from: "random" }, // random order
//   }),
// ])
// .add([
//   gsap.to(text2split.chars, {
//     y: () => gsap.utils.random(-250, -350),
//     opacity: 0.5,
//     autoAlpha: 0,
//     stagger: { each: 0.06, from: "random" },
//   }),
// ])
// .add([
//   gsap.from(text3split.chars, {
//     y: () => gsap.utils.random(250, 350),
//     opacity: 0,
//     autoAlpha: 0,
//     stagger: { each: 0.08, from: "random" },
//   }),
// ]);

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

let fashionAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: "#fashion-section",
    start: "top bottom",
    end: "center top",
    scrub: true,
  },
});
if (document.querySelector("#fashion-img")) {
  fashionAnimation.to("#fashion-img", {
    y: -300,
    ease: "none",
  });
}
