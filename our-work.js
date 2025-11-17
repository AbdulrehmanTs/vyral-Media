// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

// Create a scroll-triggered timeline
let tl = gsap.timeline({
  scrollTrigger: {
    // trigger: "#our-work-hero-section",
    start: "top top",
    end: "+=4000", // Adjust scroll distance as needed
    scrub: 1,
    pin: true,
  },
});

// Split each heading and paragraph text into lines
let split1 = new SplitText("#text-content-1 h2, #text-content-1 p", { type: "lines", mask: "lines", });
let split2 = new SplitText("#text-content-2 h2, #text-content-2 p", { type: "lines", mask: "lines", });
let split3 = new SplitText("#text-content-3 h2, #text-content-3 p", { type: "lines", mask: "lines", });
let split4 = new SplitText("#text-content-4 h2, #text-content-4 p", { type: "lines", mask: "lines", });

let video = document.querySelectorAll(".video");


// Hide all text initially
gsap.set([split2.lines, split3.lines, split4.lines], {
  opacity: 0,
  y: 100,
});
gsap.set([split1.lines, split2.lines, split3.lines, split4.lines], {
  mask: true
});

// Animate each text block one after another
tl
  // Text Block 1
  .to(split1.lines, {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "power2.in",
    onComplete: () => {
      video[0].pause();
      gsap.to(video[0], {
        y: "-100%",
        duration: 1,
        ease: "power2.in",
      });
      gsap.fromTo(video[1], {
        y: "100%",
      }, {
        y: "0%",
        duration: 1,
        ease: "power2.in",
      });
      video[1].muted = true;
      video[1].play();
    },
    onReverseComplete: () => {
      video[1].pause();
      gsap.to(video[1], {
        y: "100%",
        duration: 1,
        ease: "power2.in",
      });
      gsap.fromTo(video[0],
        { y: "-100%" },
        { y: "0%", duration: 1, ease: "power2.in" }
      );
      video[0].play();
    },
  }, "+=0.5")

  // Text Block 2
  .to(split2.lines, {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out",
  })
  .to(split2.lines, {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "power2.in",
    onComplete: () => {
      video[1].pause();
      gsap.to(video[1], {
        y: "-100%",
        duration: 1,
        ease: "power2.in",
      });
      gsap.fromTo(video[2], {
        y: "100%",
      }, {
        y: "0%",
        duration: 1,
        ease: "power2.in",
      });
      video[2].play();
    },
    onReverseComplete: () => {
      video[2].pause();
      gsap.to(video[2], {
        y: "100%",
        duration: 1,
        ease: "power2.in",
      });
      gsap.fromTo(video[1],
        { y: "-100%" },
        { y: "0%", duration: 1, ease: "power2.in" }
      );
      video[1].play();
    },
  }, "+=0.5")

  // Text Block 3
  .to(split3.lines, {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out",
  })
  .to(split3.lines, {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "power2.in",
    onComplete: () => {
      video[2].pause();
      gsap.to(video[2], {
        y: "-100%",
        duration: 1,
        ease: "power2.in",
      });
      gsap.fromTo(video[3], {
        y: "100%"
      }, {
        y: "0%",
        duration: 1,
        ease: "power2.in",
      });
      video[3].play();
    },
    onReverseComplete: () => {
      video[3].pause();
      gsap.to(video[3], {
        y: "100%",
        duration: 1,
        ease: "power2.in",
      });
      gsap.fromTo(video[2],
        { y: "-100%" },
        { y: "0%", duration: 1, ease: "power2.in" }
      );
      video[2].play();
    },
  }, "+=0.5")

  // Text Block 4
  .to(split4.lines, {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out",
  })
  .to(split4.lines, {
    opacity: 0,
    y: -100,
    duration: 1,
    ease: "power2.in",
    onComplete: () => {
      video[3].pause();
    },
    onReverseComplete: () => {
      video[3].play();
    },
  }, "+=0.5");



// Hero Video Slider
let slideVideos = document.querySelectorAll(".slide-video-container");
let paginationButtons = document.querySelectorAll(".pagination-btn");
let videoDurationLine = document.querySelector(".video-duration-line");
let videoIndex = 1;

// Pagination click
paginationButtons.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    videoIndex = index + 1;
    videoChanger();
  });
});

// Next/Prev buttons
document.querySelector(".next-btn").addEventListener("click", () => {
  videoIndex++;
  if (videoIndex > slideVideos.length) videoIndex = 1;
  videoChanger();
});
document.querySelector(".prev-btn").addEventListener("click", () => {
  videoIndex--;
  if (videoIndex < 1) videoIndex = slideVideos.length;
  videoChanger();
});

// Function to change videos
let videoChanger = () => {
  slideVideos.forEach((video, index) => {
    let vid = video.children[0]; // the <video> element inside container

    if (index === videoIndex - 1) {
      // ACTIVE video
      gsap.to(video, { opacity: 1, duration: 0.6, ease: "power2.out" });

      // Update pagination buttons
      paginationButtons.forEach((btn) => {
        btn.classList.replace("h-12!", "h-10!");
        btn.classList.replace("w-12!", "w-10!");
        btn.querySelector(".pagination-overlay").classList.replace("bg-transparent", "bg-black/50");
      });
      paginationButtons[videoIndex - 1].classList.replace("h-10!", "h-12!");
      paginationButtons[videoIndex - 1].classList.replace("w-10!", "w-12!");
      paginationButtons[videoIndex - 1].querySelector(".pagination-overlay").classList.replace("bg-black/50", "bg-transparent");

      video.classList.replace("z-0", "z-10");
      vid.currentTime = 0;
      vid.play();

      // Listen for video end to go to next
      vid.onended = () => {
        videoIndex++;
        if (videoIndex > slideVideos.length) videoIndex = 1;
        videoChanger();
      };

    } else {
      // INACTIVE videos
      gsap.to(video, { opacity: 0, duration: 0.6, ease: "power2.out" });
      video.classList.replace("z-10", "z-0");
      vid.pause();
      vid.currentTime = 0;
      vid.onended = null; // remove previous listener
    }
  });
};

// Initialize first video
videoChanger();

// const paginationContainer = document.getElementById("pagination-container");
// const children = paginationContainer.children;

// function centerChild(index) {
//     const child = children[index];
    
//     // container center
//     const containerCenter = paginationContainer.offsetWidth / 2;
    
//     // child center relative to container
//     const childLeft = child.offsetLeft;
//     const childWidth = child.offsetWidth;
//     const childCenter = childLeft + childWidth / 2;

//     // amount to scroll to center child
//     const scrollAmount = childCenter - containerCenter;

//     paginationContainer.scrollTo({
//         left: scrollAmount,
//         behavior: "smooth"
//     });
// }

// Example: center the 4th div (index 3)
// centerChild(videoIndex - 1);

// You can dynamically attach this to click events
// Array.from(children).forEach((child, i) => {
//     child.addEventListener("click", () => centerChild(videoIndex - 1));
// });

// -------------Pagination Swiper
// var swiper = new Swiper(".pagination-swiper", {
//     slidesPerView: 'auto',
//     centeredSlides: true,
//     spaceBetween: 12,
//     initialSlide: 1,
//     grabCursor: true,
//     loop: true,
//     breakpoints: {
//         1280: {
//             spaceBetween: 12,
//         },
//         1024: {
//             spaceBetween: 10,
//         },
//         768: {
//             spaceBetween: 8,
//         },
//         0: {
//             spaceBetween: 6,
//         }
//     }
// });

// swiper.on('init', function () {
//     swiper.slideToLoop(1, 0);
// });
// swiper.init();