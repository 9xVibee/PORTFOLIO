/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from "react";
import "./Projects.css";
import AdidasImg from "./../../assets/adidasnew.png";
// import Project1Img from "./../../assets/p1.jpg";
import Project2Img from "./../../assets/p2.jpg";
import Project3Img from "./../../assets/p3.png";
import Project4Img from "./../../assets/p4.png";
import Project5Img from "./../../assets/p5.png";
import HtmlImg from "./../../assets/html.png";
import TypeScript from "./../../assets/typescript.svg";
import SCImg from "./../../assets/styled-components1.png";
import CssImg from "./../../assets/css-3.png";
import ReactSvg from "./../../assets/react.svg";
import MongoDb from "./../../assets/mongodb.svg";
import NodeJs from "./../../assets/nodejs.svg";
import Express from "./../../assets/express.svg";
import JavaScript from "./../../assets/js.png";
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
              <motion.img {...imgAnimation} src={AdidasImg} alt="" />
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
                  src={JavaScript}
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
                A Meticulous recreation of the Adidas e-commerce platform, built
                from the ground up using HTML, CSS, and JavaScript. This clone
                captures the essence of Adidas' user interface, product
                showcases, and navigation flow.
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
                Developed a MERN stack-based web application mimicking
                Instagram's thread functionality. Key features include user
                authentication, thread creation with multiple images, real-time
                engagement using Socket.io, and a responsive design
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
                A dynamic and interactive dice roller game crafted using
                React.js. Players can roll virtual dice with a click, simulating
                the thrill of a real-world dice roll. The game interface is
                designed with intuitive controls and visual feedback.
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
                An advanced filtering system built using React.js, designed to
                streamline data navigation and enhance user experience. The
                interface offers a range of filtering options, from basic search
                queries to intricate multi-criteria selections.
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

        {/* Project 5 */}
        <div className="card-container-project card-5">
          <a href="https://movieratingts.vercel.app/" target="_blank">
            <div className="project-img-container">
              <motion.img {...imgAnimation} src={Project5Img} alt="" />
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
                Movie Rating
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
                <img src={TypeScript} alt="" />
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
                Our Movie Rating WebApp is a user-friendly platform designed to
                help movie enthusiasts discover, rate, and review films.
                Developed using ReactJS and TypeScript, the application offers a
                seamless user experience.
              </motion.p>
            </div>
            <div className="btn-container-project">
              <a
                href="https://github.com/9xVibee/MovieRatingWebApp"
                className="btn-project"
                target="_blank"
              >
                <FaGithub />
                <p>View Code</p>
              </a>
              <a
                href="https://movieratingts.vercel.app/"
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
