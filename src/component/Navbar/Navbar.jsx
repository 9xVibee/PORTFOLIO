/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import Pic from "./../../assets/pin2.png";
import "./Navbar.css";
import { LuDownloadCloud } from "react-icons/lu";
// import { FaCircleArrowDown } from "react-icons/fa6";
import { MdWorkOutline } from "react-icons/md";
import { GrContact } from "react-icons/gr";

const Navbar = () => {
  useEffect(() => {
    // Emojis
    gsap.fromTo(
      ".bitemoji-container",
      {
        x: -100,
        opacity: 0,
        delay: 3.8,
        duration: 0.5,
      },
      {
        x: 0,
        opacity: 1,
        delay: 3.8,
        duration: 0.5,
      }
    );
    gsap.fromTo(
      ".box",
      {
        x: 100,
        opacity: 0,
        delay: 4,
        duration: 0.5,
      },
      {
        x: 0,
        opacity: 1,
        delay: 4,
        duration: 0.5,
      }
    );
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
    <motion.div className="navbar">
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
        <a href="#">
          <div className="ham-items">
            <p>Resume</p>
            <LuDownloadCloud />
          </div>
        </a>
        <a href="#project">
          <div className="ham-items middle">
            <p>Work</p>
            <MdWorkOutline />
          </div>
        </a>
        <a
          target="_blank"
          data-blobity-radius="10"
          data-blobity-magnetic="false"
          href="mailto:abpanchal951357@gmail.com"
        >
          <div className="ham-items last">
            <p>Contact</p>
            <GrContact />
          </div>
        </a>
      </div>
    </motion.div>
  );
};

export default Navbar;
