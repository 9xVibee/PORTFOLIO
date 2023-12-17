/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from "react";
import "./Projects.css";
import Project1Img from "./../../assets/p1.jpg";
import Project2Img from "./../../assets/p2.jpg";
import HtmlImg from "./../../assets/html.png";
import CssImg from "./../../assets/css-3.png";
import ReactSvg from "./../../assets/react.svg";
import MongoDb from "./../../assets/mongodb.svg";
import NodeJs from "./../../assets/nodejs.svg";
import Express from "./../../assets/express.svg";
import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { IoMdLink } from "react-icons/io";
import { CallingAnimationProjects } from "./Project";

const Projects = () => {
  useEffect(() => {
    CallingAnimationProjects();
  }, []);
  return (
    <div className="projects">
      <div className="project-heading">
        <motion.h1
          initial={{
            opacity: 0,
            y: 50,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
            ease: "linear",
          }}
        >
          Projects
        </motion.h1>
      </div>
      <div className="projects-container">
        {/* <div className="video-container">
          <video src={AdidasVideo} autoPlay muted loop></video>
          <div className="coverUp"></div>
        </div> */}
        {/* Project 1 */}
        <div className="card-container-project card-1 margin-top-card always-top">
          <a
            href="https://9xvibee.github.io/AdidasCloneWebsite/"
            target="_blank"
          >
            <div className="project-img-container">
              <img src={Project1Img} alt="" />
            </div>
            <div className="project-h1-container">
              <h1>Adidas Clone</h1>
              <div className="icon-container-project">
                <img src={HtmlImg} alt="" />
                <img src={CssImg} alt="" />
              </div>
            </div>
            <div className="project-details">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore tenetur facilis architecto incidunt, totam laborum
                dolorem ipsum. Vitae fuga labore, odit, provident dolore fugiat
                recusandae asperiores suscipit eos harum voluptatum?
              </p>
            </div>
            <div className="btn-container-project">
              <a
                href="https://github.com/9xVibee/AdidasCloneWebsite"
                className="btn-project"
              >
                <FaGithub />
                <p>View Code</p>
              </a>
              <a
                href="https://9xvibee.github.io/AdidasCloneWebsite/"
                className="btn-project"
              >
                <IoMdLink />
                <p>Go Live</p>
              </a>
            </div>
          </a>
        </div>

        {/* Project 2 */}
        <div className="card-container-project card-2 margin-top-card">
          <a href="">
            <div className="project-img-container">
              <img src={Project2Img} alt="" />
            </div>
            <div className="project-h1-container">
              <h1>Instagram Thread</h1>
              <div className="icon-container-project">
                <img src={ReactSvg} alt="" />
                <img src={NodeJs} alt="" />
                <img src={MongoDb} alt="" />
                <img src={Express} alt="" />
              </div>
            </div>
            <div className="project-details">
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore tenetur facilis architecto incidunt, totam laborum
                dolorem ipsum. Vitae fuga labore, odit, provident dolore fugiat
                recusandae asperiores suscipit eos harum voluptatum?
              </p>
            </div>
            <a
              href="https://github.com/9xVibee/InstagramThreadCloneUsingMERNStack"
              className="btn-project"
            >
              <FaGithub />
              <p>View Code</p>
            </a>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
