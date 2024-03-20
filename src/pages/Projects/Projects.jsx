/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-target-blank */
import { useEffect } from "react";
import "./Projects.css";
import AdidasImg from "./../../assets/adidasnew.png";
// import Project1Img from "./../../assets/p1.jpg";
import Project2Img from "./../../assets/p2.jpg";
// import Project3Img from "./../../assets/p3.png";
import Project4Img from "./../../assets/QuizApp.png";
import Project5Img from "./../../assets/p5.png";
import Project6Img from "./../../assets/netflix.png";
import Project0Img from "./../../assets/jotion.png";

import HtmlImg from "./../../assets/html.png";
import TypeScript from "./../../assets/typescript.svg";
// import SCImg from "./../../assets/styled-components1.png";
import CssImg from "./../../assets/css-3.png";
import ReactSvg from "./../../assets/react.svg";
import MongoDb from "./../../assets/mongodb.svg";
import TailwindCss from "./../../assets/tailwindcss.svg";
import NodeJs from "./../../assets/nodejs.svg";
import Express from "./../../assets/express.svg";
import JavaScript from "./../../assets/js.png";
import swiggyImg from "./../../assets/swiggy.png";
import zustandImg from "./../../assets/zustand.png";
import NextJs from "./../../assets/next.js.svg";
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
        {/* Project 1 */}
        <div className="card-container-project card-0 margin-top-card always-top">
          <a href="https://jotion-abhay.vercel.app/" target="_blank">
            <div className="project-img-container">
              <motion.img {...imgAnimation} src={Project0Img} alt="" />
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
                Jotion
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
                  src={NextJs}
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
                  src={TailwindCss}
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
                Dive deep into the world of efficient data management and
                customizable workflows, all powered by the latest in web
                technology. Imagine experiencing the power of real-time
                collaboration, dynamic content organization{" "}
              </motion.p>
            </div>
            <div className="btn-container-project">
              <a
                href="https://github.com/9xVibee/Notion-Clone"
                className="btn-project"
                target="_blank"
              >
                <FaGithub />
                <p>View Code</p>
              </a>
              <a
                href="https://jotion-abhay.vercel.app/"
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
        <div className="card-container-project card-1 margin-top-card">
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

        {/* Project 3 */}
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

        {/* Project 4 */}
        <div className="card-container-project card-3">
          <a href="https://swiggyyy.vercel.app/" target="_blank">
            <div className="project-img-container">
              <motion.img {...imgAnimation} src={swiggyImg} alt="" />
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
                Swiggy
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
                <img src={zustandImg} alt="" className="zustand" />
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
                Welcome to our cutting-edge Swiggy clone built with ReactJS and
                powered by Zustand for seamless state management. This modern
                web application brings the convenience of online food ordering
                and delivery to your fingertips
              </motion.p>
            </div>
            <div className="btn-container-project">
              <a
                href="https://github.com/9xVibee/SwiggyyyClone"
                className="btn-project"
                target="_blank"
              >
                <FaGithub />
                <p>View Code</p>
              </a>
              <a
                href="https://swiggyyy.vercel.app/"
                className="btn-project"
                target="_blank"
              >
                <IoMdLink />
                <p>Go Live</p>
              </a>
            </div>
          </a>
        </div>

        {/* Project 5*/}
        <div className="card-container-project card-4">
          <a
            href="https://reacttypescriptquizgame.vercel.app//"
            target="_blank"
          >
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
                Quiz App (Translation Based)
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
                mbark on a knowledge-filled journey with our state-of-the-art
                Quiz App, meticulously crafted using ReactJS, TypeScript, and
                powered by the efficiency of Redux Toolkit. This educational
                platform seamlessly combines a captivating user experience
              </motion.p>
            </div>
            <div className="btn-container-project">
              <a
                href="https://github.com/9xVibee/ReactTypeScriptQuizGame"
                className="btn-project"
                target="_blank"
              >
                <FaGithub />
                <p>View Code</p>
              </a>
              <a
                href="https://reacttypescriptquizgame.vercel.app/"
                className="btn-project"
                target="_blank"
              >
                <IoMdLink />
                <p>Go Live</p>
              </a>
            </div>
          </a>
        </div>

        {/* Project 6 */}
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

        {/* Project 7 */}
        <div className="card-container-project card-6">
          <a href="https://netflix-gpt-red.vercel.app/" target="_blank">
            <div className="project-img-container">
              <motion.img {...imgAnimation} src={Project6Img} alt="" />
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
                Netflix
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
                <img src={TailwindCss} alt="" />
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
                href="https://github.com/9xVibee/NetflixGPT"
                className="btn-project"
                target="_blank"
              >
                <FaGithub />
                <p>View Code</p>
              </a>
              <a
                href="https://netflix-gpt-red.vercel.app/"
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
