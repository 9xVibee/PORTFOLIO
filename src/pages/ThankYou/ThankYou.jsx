import "./ThankYou.css";
import { motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import PrayingImg from "./../../assets/praying.jpg";

const ThankYou = () => {
  const ThankYouAnimation = {
    initial: {
      y: 40,
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="thankyou">
      <div className="thankyou-msg-container">
        <motion.h1
          {...ThankYouAnimation}
          transition={{
            duration: 0.5,
            delay: 0.3,
          }}
        >
          Thank{" "}
        </motion.h1>
        <motion.h1
          {...ThankYouAnimation}
          transition={{
            duration: 0.5,
            delay: 0.4,
          }}
        >
          You
        </motion.h1>
        <motion.h1
          {...ThankYouAnimation}
          transition={{
            duration: 0.5,
            delay: 0.5,
          }}
        >
          For
        </motion.h1>
        <motion.h1
          {...ThankYouAnimation}
          transition={{
            duration: 0.5,
            delay: 0.6,
          }}
        >
          Visiting!
        </motion.h1>
        <motion.img
          {...ThankYouAnimation}
          src={PrayingImg}
          transition={{
            duration: 0.5,
            delay: 0.7,
          }}
          alt=""
        />
      </div>
      <div className="connect-me-container">
        <motion.a
          target="_blank"
          data-blobity-radius="10"
          data-blobity-magnetic="false"
          href="mailto:abpanchal951357@gmail.com"
          {...ThankYouAnimation}
          transition={{
            duration: 0.4,
            delay: 0.8,
          }}
        >
          <p>Connect Me</p>
          <MdOutlineEmail />
        </motion.a>
      </div>
    </div>
  );
};

export default ThankYou;
