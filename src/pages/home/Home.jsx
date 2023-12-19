import { useEffect } from "react";
import gsap from "gsap";
import { motion } from "framer-motion";
import "./Home.css";

const Home = () => {
  const tagAnime = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    transition: {
      delay: 0.7,
      duration: 0.5,
    },
    whileInView: {
      y: "0%",
      opacity: 1,
    },
  };
  useEffect(() => {
    gsap.fromTo(
      ".home",
      {
        display: "none",
        delay: 3,
      },
      {
        display: "flex",
        delay: 3,
      }
    );
  });
  return (
    <div className="home" id="home">
      <div className="info-container">
        <div className="h1-container">
          <motion.h1
            initial={{
              y: "100%",
              opacity: 0,
            }}
            whileInView={{
              y: "0%",
              opacity: 1,
            }}
            transition={{
              delay: 0.5,
              duration: 0.5,
            }}
            className="hellow-h1"
          >
            Hellowww.
          </motion.h1>
        </div>
        <div className="name-container">
          <motion.span className="im" {...tagAnime}>
            i'm{" "}
          </motion.span>
          <motion.p {...tagAnime}>Abhay!</motion.p>
          <motion.span
            className="full-stack-span"
            {...tagAnime}
            transition={{
              delay: 1,
              duration: 0.5,
            }}
          >
            (Full-Stack Developer)
          </motion.span>
        </div>
      </div>
      <div className="container2">
        <div className="box2">
          <h1 className="h1">
            Looking for full-stack Developer? <br /> Then you have visited right
            place!
          </h1>
          <h1 className="h2">
            Looking for full-stack Developer? Then you have visited right place!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Home;
