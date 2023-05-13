import React from "react";
import { BiClipboard } from "react-icons/bi";

const Skills = () => {
  return (
    <div className="skills" id="my_skills">
      <div className="intro_top" style={{ color: "#bfbfbf" }}>
        <BiClipboard style={{ marginRight: "1rem" }} />
        <p>MY SKILLS</p>
      </div>
      <div className="intro_head">
        <p>
          My <span>Advantages</span>
        </p>
      </div>
    </div>
  );
};

export default Skills;
