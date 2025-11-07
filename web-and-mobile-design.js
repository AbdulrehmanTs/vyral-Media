gsap.registerPlugin(ScrollTrigger);

gsap.set(".iphone-apps", { overflow: "hidden" });
let scrollMobileAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".iphone-apps",
    start: "top top",
    end: "+=1000",
    scrub: true,
    pin: true,
  },
});

// Apply animations safely
scrollMobileAnimation
  .add([
    gsap.from(".app-1", { x: -120, y: -60, scale: 1.9, transformOrigin: "center center" }),
    gsap.from(".app-3", { x: 20, y: -80, scale: 2, transformOrigin: "center center" }),
    gsap.from(".app-4", { x: 100, scale: 1.8, transformOrigin: "center center" }),
    gsap.from(".app-6", { x: -300, y: 40, scale: 4.6, transformOrigin: "center center" }),
    gsap.from(".app-13", { x: -100, y: 120, scale: 2, transformOrigin: "center center" }),
    gsap.from(".app-15", { x: 300, y: 200, scale: 4, transformOrigin: "center center" }),
    gsap.from(".app-16", { x: 50, y: 60, scale: 2.3, transformOrigin: "center center" }),
    gsap.from(".app-17", { x: -26, y: 160, scale: 2, transformOrigin: "center center" }),
  ])
  .add([
    gsap.to(".hero-heading", {
      y: -200,
      opacity: 0,
    }),
  ]);

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}

let scrollServicesAnimation = gsap.timeline({
  scrollTrigger: {
    trigger: ".services-section",
    start: "center center",
    end: "+=2000",
    scrub: true,
    pin: true
  },
});

scrollServicesAnimation
  .add([
    gsap.to(".services-title", {
      y: "-100%",
    }),
    gsap.to(".services-heading", {
      y: "-100%",
    }),
    gsap.from(".text-box-1", {
      x: "-50%",
      opacity: 0,
    }),
    gsap.to('.services-color-box', {
      backgroundColor: '#3036ff',
    })
  ])
  .add([
    gsap.from(".text-box-2", {
      x: "50%",
      opacity: 0,
    }),
    gsap.to(".text-box-1", {
      x: "-50%",
      opacity: 0,
    }),
  ])
  .add([
    gsap.from(".text-box-3", {
      x: "-50%",
      opacity: 0,
    }),
    gsap.to(".text-box-2", {
      x: "50%",
      opacity: 0,
    }),
  ])
  .add([
     gsap.to('.services-color-box', {
      backgroundColor: '#fa8947',
    })
  ]).add([
    gsap.to('.services-color-box',
      {
        height: '0px',
      }
    )
  ])




