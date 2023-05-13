import React from "react";
import { BiClipboard } from "react-icons/bi";

const Resume = () => {
  return (
    <div className="resume" id="resume">
      <div className="intro_top" style={{ color: "#bfbfbf" }}>
        <BiClipboard style={{ marginRight: "1rem" }} />
        <p>RESUME</p>
      </div>
      <div className="resume_cont">
        <h1>Coming Soon!</h1>
      </div>
    </div>
  );
};

export default Resume;
