import { IconButton } from "@mui/material";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { BsArrowDown } from "react-icons/bs";
import { Element, scroller } from "react-scroll";

const Intro = () => {
  const router = useRouter();
  const [isActive, setIsActive] = useState(1);

  const handleClick = (buttonId, sectionId) => {
    setIsActive(buttonId === isActive ? null : buttonId);
    const element = document.getElementById(sectionId);
    if (element) {
      // element.scrollIntoView({ behavior: "smooth" });
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };
  return (
    <Element name="intro">
      <div className="intro">
        <div className="intro_top" style={{ color: "#bfbfbf" }}>
          <AiOutlineHome style={{ marginRight: "1rem" }} />
          <p>INTRO</p>
        </div>
        <div className="intro_head">
          <p>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Hello there! I'm <span>Harshit</span>, a Full Stack Developer on a
            mission to create digital magic.
          </p>
          <p>
            Empowering businesses through innovative web solutions as a skilled
            Full Stack Developer.
          </p>
        </div>
        <div className="intro_c">
          <div className="intro_cta">
            <IconButton
              onClick={() => {
                handleClick(2, "about");
              }}
            >
              <BsArrowDown />
            </IconButton>
          </div>
        </div>
      </div>
    </Element>
  );
};

export default Intro;
