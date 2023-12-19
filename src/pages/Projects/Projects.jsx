/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from "react";
import "./Projects.css";
import Project1Img from "./../../assets/p1.jpg";
import Project2Img from "./../../assets/p2.jpg";
import Project3Img from "./../../assets/p3.png";
import Project4Img from "./../../assets/p4.png";
import HtmlImg from "./../../assets/html.png";
import SCImg from "./../../assets/styled-components1.png";
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
  const imgAnimation = {
    initial: {
      y: 30,
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    transition: {
      duration: 0.5,
      delay: 0.4,
    },
  };

  useEffect(() => {
    CallingAnimationProjects();
  }, []);
  return (
    <div className="projects" id="project">
      <div className="project-heading">
        <motion.h1
          initial={{
            y: 110,
            opacity: 0,
          }}
          whileInView={{
            y: 0,
            opacity: 1,
          }}
          transition={{
            delay: 0.5,
            duration: 0.5,
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
              <motion.img {...imgAnimation} src={Project1Img} alt="" />
            </div>
            <div className="project-h1-container">
              <motion.h1
                initial={{
                  y: 32,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
              >
                Adidas Clone
              </motion.h1>
              <div className="icon-container-project">
                <motion.img
                  initial={{
                    y: 32,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                  }}
                  src={HtmlImg}
                  alt=""
                />
                <motion.img
                  initial={{
                    y: 32,
                    opacity: 0,
                  }}
                  whileInView={{
                    y: 0,
                    opacity: 1,
                  }}
                  transition={{
                    delay: 0.5,
                    duration: 0.5,
                  }}
                  src={CssImg}
                  alt=""
                />
              </div>
            </div>
            <div className="project-details">
              <motion.p
                initial={{
                  y: 32,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore tenetur facilis architecto incidunt, totam laborum
                dolorem ipsum. Vitae fuga labore, odit, provident dolore fugiat
                recusandae asperiores suscipit eos harum voluptatum?
              </motion.p>
            </div>
            <div className="btn-container-project">
              <a
                href="https://github.com/9xVibee/AdidasCloneWebsite"
                className="btn-project"
                target="_blank"
              >
                <FaGithub />
                <p>View Code</p>
              </a>
              <a
                href="https://9xvibee.github.io/AdidasCloneWebsite/"
                className="btn-project"
                target="_blank"
              >
                <IoMdLink />
                <p>Go Live</p>
              </a>
            </div>
          </a>
        </div>

        {/* Project 2 */}
        <div className="card-container-project card-2 margin-top-card">
          <a
            href="https://github.com/9xVibee/InstagramThreadCloneUsingMERNStack"
            target="_blank"
          >
            <div className="project-img-container">
              <motion.img {...imgAnimation} src={Project2Img} alt="" />
            </div>
            <div className="project-h1-container">
              <motion.h1
                initial={{
                  y: 32,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
              >
                Instagram Thread
              </motion.h1>
              <motion.div
                initial={{
                  y: 32,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
                className="icon-container-project"
              >
                <img src={ReactSvg} alt="" />
                <img src={NodeJs} alt="" />
                <img src={MongoDb} alt="" />
                <img src={Express} alt="" />
              </motion.div>
            </div>
            <div className="project-details">
              <motion.p
                initial={{
                  y: 32,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore tenetur facilis architecto incidunt, totam laborum
                dolorem ipsum. Vitae fuga labore, odit, provident dolore fugiat
                recusandae asperiores suscipit eos harum voluptatum?
              </motion.p>
            </div>
            <a
              href="https://github.com/9xVibee/InstagramThreadCloneUsingMERNStack"
              className="btn-project"
              target="_blank"
            >
              <FaGithub />
              <p>View Code</p>
            </a>
          </a>
        </div>

        {/* Project 3 */}
        <div className="card-container-project card-3 margin-top-card">
          <a href="https://react-dice-roller-game.vercel.app/" target="_blank">
            <div className="project-img-container">
              <motion.img {...imgAnimation} src={Project3Img} alt="" />
            </div>
            <div className="project-h1-container">
              <motion.h1
                initial={{
                  y: 32,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
              >
                Dice Roller
              </motion.h1>
              <motion.div
                initial={{
                  y: 32,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
                className="icon-container-project"
              >
                <img src={ReactSvg} alt="" />
                <img src={SCImg} alt="" />
              </motion.div>
            </div>
            <div className="project-details">
              <motion.p
                initial={{
                  y: 32,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore tenetur facilis architecto incidunt, totam laborum
                dolorem ipsum. Vitae fuga labore, odit, provident dolore fugiat
                recusandae asperiores suscipit eos harum voluptatum?
              </motion.p>
            </div>
            <div className="btn-container-project">
              <a
                href="https://github.com/9xVibee/React-DiceRollerGame"
                className="btn-project"
                target="_blank"
              >
                <FaGithub />
                <p>View Code</p>
              </a>
              <a
                href="https://react-dice-roller-game.vercel.app/"
                className="btn-project"
                target="_blank"
              >
                <IoMdLink />
                <p>Go Live</p>
              </a>
            </div>
          </a>
        </div>

        {/* Project 4 */}
        <div className="card-container-project card-4">
          <a href="https://react-advanced-filter.vercel.app/" target="_blank">
            <div className="project-img-container">
              <motion.img {...imgAnimation} src={Project4Img} alt="" />
            </div>
            <div className="project-h1-container">
              <motion.h1
                initial={{
                  y: 32,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
              >
                React Advance Filter
              </motion.h1>
              <motion.div
                initial={{
                  y: 32,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
                className="icon-container-project"
              >
                <img src={ReactSvg} alt="" />
              </motion.div>
            </div>
            <div className="project-details">
              <motion.p
                initial={{
                  y: 32,
                  opacity: 0,
                }}
                whileInView={{
                  y: 0,
                  opacity: 1,
                }}
                transition={{
                  delay: 0.5,
                  duration: 0.5,
                }}
              >
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Inventore tenetur facilis architecto incidunt, totam laborum
                dolorem ipsum. Vitae fuga labore, odit, provident dolore fugiat
                recusandae asperiores suscipit eos harum voluptatum?
              </motion.p>
            </div>
            <div className="btn-container-project">
              <a
                href="https://github.com/9xVibee/ReactAdvancedFilter"
                className="btn-project"
                target="_blank"
              >
                <FaGithub />
                <p>View Code</p>
              </a>
              <a
                href="https://react-advanced-filter.vercel.app/"
                className="btn-project"
                target="_blank"
              >
                <IoMdLink />
                <p>Go Live</p>
              </a>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;
