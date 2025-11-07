const navbar = document.querySelector("#navbar");
const hamburger = document.querySelector("#hamburger");
const mobileMenu = document.querySelector(".mobile-menu");
const barLines = document.querySelectorAll(".bars-line");
const desktopSideBarHamburger = document.querySelector(".desktop-side-bar-hamburger");
const desktopSideBarCloser = document.querySelector(".desktop-side-bar-closer");
const nav_menu = document.querySelector('.nav-menu');
const nav_item = document.querySelectorAll('.nav-item');
const searchIcon = document.querySelector('.search-icon');
const searchX = document.querySelector('.search-x');
const searchWindow = document.querySelector('.search-window');

let searchOpen = false;

// Open Search Window
searchIcon?.addEventListener('click', () => {
  if (!searchOpen) {
    searchOpen = true;
    gsap.to(searchWindow, {
      opacity: 1,
      duration: 0.5,
      onStart: () => (searchWindow.style.display = "flex"), // show
    });
  }
});

// Close Search Window
searchX?.addEventListener('click', () => {
  if (searchOpen) {
    searchOpen = false;
    gsap.to(searchWindow, {
      opacity: 0,
      duration: 0.5,
      onComplete: () => (searchWindow.style.display = "none"), // hide
    });
  }
});




// Desktop sidebar toggle
desktopSideBarHamburger?.addEventListener("click", () =>
  document
    .querySelector(".desktop-side-bar")
    .classList.replace("-right-96", "right-0")
);
desktopSideBarCloser?.addEventListener("click", () =>
  document
    .querySelector(".desktop-side-bar")
    .classList.replace("right-0", "-right-96")
);

// --- MOBILE MENU TOGGLE ---
let menuOpen = false;
hamburger.addEventListener("click", () => {
  menuOpen = !menuOpen;
  if (menuOpen) {
    mobileMenu.classList.replace("-translate-y-full", "translate-y-0");
    barLines.forEach((line) => line.classList.replace("left-0", "left-5"));
  } else {
    mobileMenu.classList.replace("translate-y-0", "-translate-y-full");
    barLines.forEach((line) => line.classList.replace("left-5", "left-0"));
  }
});

// --- NAVBAR STICKY ON SCROLL ---
let isSticky = false;
window.addEventListener("scroll", () => {
  const atTop = window.scrollY <= 50;
  navbarSticky(atTop);
});

let navbarSticky = (atTop) => {
  if (window.scrollY > 100 && !isSticky) {
    isSticky = true;
    navbar.classList.replace("bg-transparent", "bg-black");
    nav_item.forEach((item) => {
      item.classList.replace("after:bg-white", "after:bg-black")
    })
    gsap.fromTo(
      navbar,
      { y: -100 },
      { y: 0, duration: 0.8, ease: "power3.out" }
    );
  } else if (atTop && isSticky) {
    isSticky = false;
    navbar.classList.replace("bg-black", "bg-transparent");
    nav_menu.classList.replace("text-black", "text-white");
    nav_item.forEach((item) => {
      item.classList.replace("after:bg-black", "after:bg-white")
    })
    gsap.fromTo(
      navbar,
      { y: -100 },
      { y: 0, duration: 0.8, ease: "power3.out" }
    );
  }
};
