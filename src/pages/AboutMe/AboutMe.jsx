/* eslint-disable react/jsx-no-target-blank */
import "./AboutMe.css";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

{
  /* <a
  target="_blank"
  data-blobity-radius="10"
  data-blobity-magnetic="false"
  href="mailto:abpanchal951357@gmail.com"
></a>; */
}

const iconsAnime = {
  initial: {
    y: "100%",
    opacity: "0",
  },
  whileInView: {
    y: "0%",
    opacity: "1",
  },
};
const abtInfo = {
  initial: {
    y: "100%",
    opacity: "0",
  },
  whileInView: {
    y: "0%",
    opacity: "1",
  },
};

const AboutMe = () => {
  return (
    <div className="abt-me">
      <div className="left-abt">
        <div className="left-abt-h1-container">
          <motion.h1
            initial={{
              y: "-100%",
              opacity: "0",
            }}
            transition={{
              duration: 0.5,
              delay: 0.5,
            }}
            whileInView={{
              y: 0,
              opacity: "1",
            }}
          >
            About Me?
          </motion.h1>
        </div>
        <div className="left-abt-p-container">
          <motion.p
            initial={{
              y: "100%",
              opacity: "0",
            }}
            transition={{
              delay: 0.7,
              duration: 0.5,
            }}
            whileInView={{
              y: "0%",
              opacity: "1",
            }}
          >
            (MERN Developer)
          </motion.p>
        </div>
        <div className="icons-container-abt">
          <motion.div
            className="icon-div"
            {...iconsAnime}
            transition={{
              delay: 0.8,
              duration: 0.1,
            }}
          >
            <a
              href="https://www.linkedin.com/in/abhay-panchal-b1a912293?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
            >
              <FaLinkedin />
            </a>
          </motion.div>
          <motion.div
            className="icon-div"
            {...iconsAnime}
            transition={{
              delay: 0.9,
              duration: 0.1,
            }}
          >
            <a href="https://github.com/9xVibee" target="_blank">
              <FaGithub />
            </a>
          </motion.div>
          <motion.div
            className="icon-div"
            {...iconsAnime}
            transition={{
              delay: 1,
              duration: 0.1,
            }}
          >
            <a href="">
              <FaXTwitter />
            </a>
          </motion.div>
          <motion.div
            className="icon-div"
            {...iconsAnime}
            transition={{
              delay: 1.1,
              duration: 0.1,
            }}
          >
            <a
              target="_blank"
              data-blobity-radius="10"
              data-blobity-magnetic="false"
              href="mailto:abpanchal951357@gmail.com"
            >
              <MdOutlineEmail />
            </a>
          </motion.div>
        </div>
      </div>
      <div className="right-abt right-abt-nothide">
        <motion.div
          className="right-abt-p"
          {...abtInfo}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        >
          <p>Hellow I'm Abhay, a computer science student </p>
        </motion.div>
        <motion.div
          className="right-abt-p"
          {...abtInfo}
          transition={{
            delay: 0.9,
            duration: 0.5,
          }}
        >
          <p>based in India who enjoys building things that live </p>
        </motion.div>
        <motion.div
          className="right-abt-p"
          {...abtInfo}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
        >
          <p>on the internet. I develop exceptional websites and </p>
        </motion.div>
        <motion.div
          className="right-abt-p"
          {...abtInfo}
          transition={{
            delay: 1.1,
            duration: 0.5,
          }}
        >
          <p>web apps that provide intutive, pixel-perfect user interfaces.</p>
        </motion.div>
      </div>
      <div className="right-abt right-abt-hide">
        <motion.div
          className="right-abt-p"
          {...abtInfo}
          transition={{
            delay: 0.8,
            duration: 0.5,
          }}
        >
          <p>Hellow I'm Abhay, a computer </p>
        </motion.div>
        <motion.div
          className="right-abt-p"
          {...abtInfo}
          transition={{
            delay: 0.9,
            duration: 0.5,
          }}
        >
          <p>science student based in India who </p>
        </motion.div>
        <motion.div
          className="right-abt-p"
          {...abtInfo}
          transition={{
            delay: 1,
            duration: 0.5,
          }}
        >
          <p>
            enjoys building things that live on the internet. I develop
            exceptional websites and{" "}
          </p>
        </motion.div>
        <motion.div
          className="right-abt-p last-p"
          {...abtInfo}
          transition={{
            delay: 1.1,
            duration: 0.5,
          }}
        >
          <p>web apps that provide intutive, pixel-perfect user interfaces.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutMe;
