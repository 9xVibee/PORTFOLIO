import { useEffect } from "react";
import gsap from "gsap";
import Pic from "./../../assets/pin2.png";
import "./Navbar.css";
import { LuDownloadCloud } from "react-icons/lu";

const Navbar = () => {
  useEffect(() => {
    // Hiding circle on ham
    const circle2 = document.querySelectorAll(".circle2");
    document.querySelector(".btn").addEventListener("mousemove", function () {
      gsap.to(".circle", {
        opacity: 0,
        duration: 0.1,
      });
      gsap.to(circle2, {
        opacity: 0,
        duration: 0.1,
      });
    });
    document.querySelector(".btn").addEventListener("mouseleave", function () {
      gsap.to(".circle", {
        opacity: 1,
        duration: 1,
      });
      gsap.to(circle2, {
        opacity: 1,
        duration: 0.1,
      });
    });
    // Hiding circle on ham items
    document
      .querySelector(".ham-items-div")
      .addEventListener("mousemove", function () {
        gsap.to(".circle", {
          opacity: 0,
          duration: 0.1,
        });
        gsap.to(circle2, {
          opacity: 0,
          duration: 0.1,
        });
      });
    document
      .querySelector(".ham-items-div")
      .addEventListener("mouseleave", function () {
        gsap.to(".circle", {
          opacity: 1,
          duration: 1,
        });
        gsap.to(circle2, {
          opacity: 1,
          duration: 0.1,
        });
      });

    // Hamburger
    var btn = document.querySelector(".btn");
    let i = 1;
    btn.addEventListener("click", function () {
      if (i % 2 !== 0) {
        btn.classList.remove("not-active");
        btn.classList.add("active");
        i++;
        gsap.to(".ham-items-div", {
          opacity: 1,
          duration: 0.3,
          x: 0,
        });
      } else {
        btn.classList.remove("active");
        btn.classList.add("not-active");
        i++;
        gsap.to(".ham-items-div", {
          opacity: 0,
          duration: 0.3,
          x: 100,
        });
      }
    });
  }, []);
  return (
    <div className="navbar">
      {/* profile */}
      <div className="bitemoji-container">
        <img src={Pic} alt="" />
      </div>

      {/* Hamburger */}
      <div className="box">
        <div className="btn">
          <span className="first"></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {/* Hamburger Item */}
      <div className="ham-items-div">
        <div className="ham-items">
          <p>Resume</p>
          <LuDownloadCloud />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
