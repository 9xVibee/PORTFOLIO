import { motion } from "framer-motion";
import "./Skills.css";
import SkillsCard from "../../component/SkillsCard/SkillsCard";
import { SkillsInfo } from "../../data/data";
const Skills = () => {
  return (
    <div className="skills">
      <div className="h1-container-skills">
        <motion.h1
          initial={{
            y: "100%",
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
          Skills.
        </motion.h1>
      </div>
      <div className="skills-container">
        <div className="skills-inner-container">
          {SkillsInfo.map((info, idx) => {
            return <SkillsCard Logo={info.Logo} name={info.name} key={idx} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Skills;
