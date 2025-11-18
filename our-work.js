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
let split1 = new SplitText("#text-content-1 h2, #text-content-1 p", {
  type: "lines",
  mask: "lines",
});
let split2 = new SplitText("#text-content-2 h2, #text-content-2 p", {
  type: "lines",
  mask: "lines",
});
let split3 = new SplitText("#text-content-3 h2, #text-content-3 p", {
  type: "lines",
  mask: "lines",
});
let split4 = new SplitText("#text-content-4 h2, #text-content-4 p", {
  type: "lines",
  mask: "lines",
});

let video = document.querySelectorAll(".video");

// Hide all text initially
gsap.set([split2.lines, split3.lines, split4.lines], {
  opacity: 0,
  y: 100,
});
gsap.set([split1.lines, split2.lines, split3.lines, split4.lines], {
  mask: true,
});

// Animate each text block one after another
tl
  // Text Block 1
  .to(
    split1.lines,
    {
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
        gsap.fromTo(
          video[1],
          {
            y: "100%",
          },
          {
            y: "0%",
            duration: 1,
            ease: "power2.in",
          }
        );
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
        gsap.fromTo(
          video[0],
          { y: "-100%" },
          { y: "0%", duration: 1, ease: "power2.in" }
        );
        video[0].play();
      },
    },
    "+=0.5"
  )

  // Text Block 2
  .to(split2.lines, {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out",
  })
  .to(
    split2.lines,
    {
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
        gsap.fromTo(
          video[2],
          {
            y: "100%",
          },
          {
            y: "0%",
            duration: 1,
            ease: "power2.in",
          }
        );
        video[2].play();
      },
      onReverseComplete: () => {
        video[2].pause();
        gsap.to(video[2], {
          y: "100%",
          duration: 1,
          ease: "power2.in",
        });
        gsap.fromTo(
          video[1],
          { y: "-100%" },
          { y: "0%", duration: 1, ease: "power2.in" }
        );
        video[1].play();
      },
    },
    "+=0.5"
  )

  // Text Block 3
  .to(split3.lines, {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out",
  })
  .to(
    split3.lines,
    {
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
        gsap.fromTo(
          video[3],
          {
            y: "100%",
          },
          {
            y: "0%",
            duration: 1,
            ease: "power2.in",
          }
        );
        video[3].play();
      },
      onReverseComplete: () => {
        video[3].pause();
        gsap.to(video[3], {
          y: "100%",
          duration: 1,
          ease: "power2.in",
        });
        gsap.fromTo(
          video[2],
          { y: "-100%" },
          { y: "0%", duration: 1, ease: "power2.in" }
        );
        video[2].play();
      },
    },
    "+=0.5"
  )

  // Text Block 4
  .to(split4.lines, {
    opacity: 1,
    y: 0,
    stagger: 0.1,
    duration: 1,
    ease: "power2.out",
  })
  .to(
    split4.lines,
    {
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
    },
    "+=0.5"
  );

// Auto-generate thumbnails from videos
document.addEventListener("DOMContentLoaded", () => {
  const slideVideos = document.querySelectorAll(".slide-video-container video");
  const paginationContainer = document.getElementById("pagination-container");

  paginationContainer.innerHTML = ""; // Clear existing manual thumbnails

  slideVideos.forEach((video, index) => {
    const thumbBtn = document.createElement("button");
    thumbBtn.className =
    "pagination-btn w-12! h-16! bg-white/10 backdrop-blur border-2 border-gray-700/50 cursor-pointer relative overflow-hidden";
    
    const img = document.createElement("img");
    img.className = "size-full object-cover";
    img.alt = "video thumbnail";

    thumbBtn.appendChild(img);
    paginationContainer.appendChild(thumbBtn);

    // --- Generate thumbnail from video ---
    video.addEventListener("loadeddata", () => {
      video.currentTime = 1; // capture frame at 1 sec
    });

    video.addEventListener("seeked", () => {
      const canvas = document.createElement("canvas");
      canvas.width = 200;
      canvas.height = 300;

      const ctx = canvas.getContext("2d");
      ctx.drawImage(video, 0, 0, canvas.width, canvas.height);

      img.src = canvas.toDataURL("image/jpeg");

      // If you want full resolution:
      // img.src = canvas.toDataURL();
    });
  });
});

// Hero Video Slider
let slideVideos = document.querySelectorAll(".slide-video-container");
let paginationButtons = document.querySelectorAll(".pagination-btn");
let videoDurationLine = document.querySelector(".video-duration-line");
let videoIndex = 1;

// Pagination click
setTimeout(() => {
  paginationButtons = document.querySelectorAll(".pagination-btn");

  paginationButtons?.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      videoIndex = index + 1;
      videoChanger();
    });
  });
}, 500); // slight delay to allow thumbs to render

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
      const syncScaleWithPlayback = () => {
        const duration = vid.duration;
        const current = vid.currentTime;

        if (!isNaN(duration) && duration > 0) {
          const progress = current / duration; // 0 → 1

          // Animate scaleY smoothly with GSAP
          gsap.to(videoDurationLine, {
            scaleY: progress,
            ease: "power2.out",
          });
        }
      };

      // When video metadata loads, update height
      vid.addEventListener("timeupdate", syncScaleWithPlayback);

      // ACTIVE video
      gsap.to(video, { opacity: 1, duration: 0.6, ease: "power2.out" });

      // Update pagination buttons
      paginationButtons?.forEach((btn) => {
        btn.classList.replace("border-red-700", "border-gray-700/50");
      });
      paginationButtons[videoIndex - 1]?.classList.replace(
        "border-gray-700/50",
        "border-red-700"
      );

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
