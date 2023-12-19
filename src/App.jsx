/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from "react";
import Cursor from "./component/cursor/Cursor";
import { cursorJs } from "./component/cursor/cursorJs";
import { MdOutlineKeyboardArrowUp } from "react-icons/md";
import "./App.css";
import Navbar from "./component/Navbar/Navbar";
import Home from "./pages/home/Home";
import AboutMe from "./pages/AboutMe/AboutMe";
import Skills from "./pages/Skills/Skills";
import Projects from "./pages/Projects/Projects";
import { FaGithub } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import PreLoader from "./pages/PreLoader/PreLoader";
import ThankYou from "./pages/ThankYou/ThankYou";

const App = () => {
  useEffect(() => {
    cursorJs();
  }, []);

  return (
    <div className="container">
      {/* PreLoader */}
      <PreLoader />

      {/* Navbar */}
      <Navbar />

      {/* Cursor */}
      <Cursor />
      <div className="circle2"></div>
      <div className="project-circle github-circle">
        <p>Code!</p>
        <FaGithub />
      </div>

      <div className="project-circle go-live-circle">
        <p>Go Live!</p>
        <IoMdLink />
      </div>

      {/* Home Page */}
      <Home />

      {/* About Me */}
      <AboutMe />

      {/* Skills */}
      <Skills />

      {/* Projects */}
      <Projects />

      {/* Thank you message */}
      <ThankYou />

      {/* UppArrow btn */}
      <a href="#home" className="up-btn">
        <MdOutlineKeyboardArrowUp />
      </a>
    </div>
  );
};

export default App;
