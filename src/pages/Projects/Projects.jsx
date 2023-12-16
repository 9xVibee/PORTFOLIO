import { useEffect } from "react";
import "./Projects.css";
import gsap from "gsap";
import AdidasVideo from "./../../assets/adidas.mp4";

const Projects = () => {
  useEffect(() => {
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
  });
  return (
    <div className="projects">
      <div className="project-heading">
        <h1>Projects</h1>
      </div>
      <div className="projects-container">
        <div className="video-container">
          <video src={AdidasVideo} autoPlay muted loop></video>
          <div className="coverUp"></div>
        </div>
        div
      </div>
    </div>
  );
};

export default Projects;
