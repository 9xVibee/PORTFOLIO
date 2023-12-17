/* eslint-disable react/prop-types */
import { motion } from "framer-motion";

const SkillsCard = ({ name, Logo }) => {
  const abtInfo = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    transition: {
      duration: 0.5,
      delay: 0.5,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
  };
  return (
    <div className="skill-card">
      <motion.p {...abtInfo}>{name}</motion.p>
      <motion.img src={Logo} alt="" {...abtInfo} />
    </div>
  );
};

export default SkillsCard;
