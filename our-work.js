// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger, SplitText);

// Create a scroll-triggered timeline
let tl = gsap.timeline({
  scrollTrigger: {
    trigger: "#our-work-hero-section",
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
