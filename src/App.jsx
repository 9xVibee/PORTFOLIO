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

const App = () => {
  useEffect(() => {
    cursorJs();
  }, []);

  return (
    <div className="container">
      {/* Navbar */}
      <Navbar />

      {/* Cursor */}
      <Cursor />
      <div className="circle2"></div>

      {/* Home Page */}
      <Home />

      {/* About Me */}
      <AboutMe />

      {/* Skills */}
      <Skills />

      {/* UppArrow btn */}
      <a href="#home" className="up-btn">
        <MdOutlineKeyboardArrowUp />
      </a>
    </div>
  );
};

export default App;
