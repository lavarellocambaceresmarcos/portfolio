//***** Hamburger menu *****//
document
  .querySelector(".hamburger_menu_button")
  .addEventListener("click", () => {
    if (
      !document
        .querySelector(".hamburger_menu_button")
        .classList.contains("open")
    ) {
      const menu = document.querySelector(".hamburger_menu_button");
      menu.classList.toggle("open");
      document.querySelector(".nav_links").classList.toggle("open");
    } else {
      document.querySelector(".hamburger_menu_button").classList.remove("open");
      document.querySelector(".nav_links").classList.remove("open");
    }
  });

// GALLERY SCROLL SCRIPT ANIMATION && HEADING TEXT SCROLL SCRIPT ANIMATION

const galleryBox = document.getElementsByClassName("galleryBox");
const mainBox = document.getElementsByClassName("mainBox");
const foldsContentTwo = Array.from(
  document.querySelectorAll(".fold-content-two")
);

const mainBoxOne = document.getElementById("mainBoxOne");
const mainBoxTwo = document.getElementById("mainBoxOneTwo");
const mainBoxHeading = document.getElementById("mainBoxHeading");

for (let i in galleryBox) {
  let targetScrollTwo = -(
    document.documentElement.scrollTop || document.body.scrollTop
  );
  let currentScrollTwo = targetScrollTwo;

  const animateGallery = () => {
    targetScrollTwo = -(
      document.documentElement.scrollTop || document.body.scrollTop
    );

    currentScrollTwo += (targetScrollTwo - currentScrollTwo) * 0.1;

    foldsContentTwo.forEach((content) => {
      if (content.parentElement == mainBoxOne) {
        content.style.transform = `translateX(${currentScrollTwo / 5}px)`;
      }
      if (content.parentElement == mainBoxTwo) {
        content.style.transform = `translateX(${-currentScrollTwo / 5}px)`;
      }
      if (content.parentElement == mainBoxHeading) {
        content.style.transform = `translateX(${-currentScrollTwo}px)`;
      }
    });

    requestAnimationFrame(animateGallery);
  };

  animateGallery();
}

// CURSOR ANIMATION

const coords = { x: 0, y: 0 };
const circles = document.querySelectorAll(".circle");

const colors = ["#242323"];

circles.forEach(function (circle, index) {
  circle.x = 0;
  circle.y = 0;
  circle.style.backgroundColor = colors[index % colors.length];
});

window.addEventListener("mousemove", function (e) {
  coords.x = e.clientX;
  coords.y = e.clientY;
});

function animateCircles() {
  let x = coords.x;
  let y = coords.y;

  circles.forEach(function (circle, index) {
    circle.style.left = x - 12 + "px";
    circle.style.top = y - 12 + "px";

    circle.style.scale = (circles.length - index) / circles.length;

    circle.x = x;
    circle.y = y;

    const nextCircle = circles[index + 1] || circles[0];
    x += (nextCircle.x - x) * 0.3;
    y += (nextCircle.y - y) * 0.3;
  });

  requestAnimationFrame(animateCircles);
}

animateCircles();
