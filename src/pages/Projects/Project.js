import gsap from "gsap";

export const CallingAnimationProjects = () => {
  function ChangeColor() {
    gsap.to(".circle", {
      backgroundColor: "white",
    });
  }
  function ChangeColorToBlack() {
    gsap.to(".circle", {
      backgroundColor: "black",
    });
  }
  document
    .querySelector(".projects")
    .addEventListener("mousemove", ChangeColor);
  document
    .querySelector(".projects")
    .addEventListener("mouseleave", ChangeColorToBlack);

  // Project card
  const card1 = document.querySelector(".card-1");

  const liveCursor = document.querySelector(".go-live-circle");
  card1.addEventListener("mousemove", function () {
    gsap.to(liveCursor, {
      scale: 1,
    });
    gsap.to(".circle", {
      opacity: 0,
    });
  });
  card1.addEventListener("mouseenter", function () {
    gsap.to(liveCursor, {
      scale: 1,
    });
  });
  card1.addEventListener("mouseleave", function () {
    gsap.to(liveCursor, {
      scale: 0,
    });
    gsap.to(".circle", {
      opacity: 1,
    });
  });

  const cursor = document.querySelector(".github-circle");
  const card2 = document.querySelector(".card-2");
  card2.addEventListener("mousemove", function () {
    gsap.to(cursor, {
      scale: 1,
    });
    gsap.to(".circle", {
      opacity: 0,
    });
  });
  card2.addEventListener("mouseenter", function () {
    gsap.to(cursor, {
      scale: 1,
    });
  });
  card2.addEventListener("mouseleave", function () {
    gsap.to(cursor, {
      scale: 0,
    });
    gsap.to(".circle", {
      opacity: 1,
    });
  });
};