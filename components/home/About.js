import React from "react";
import { MdOutlineAccountBox } from "react-icons/md";
import { Element, scroller } from "react-scroll";

const About = () => {
  return (
    <Element name="about">
      <div className="about" id="about">
        <div className="intro_top" style={{ color: "#bfbfbf" }}>
          <MdOutlineAccountBox style={{ marginRight: "1rem" }} />
          <p>ABOUT</p>
        </div>
        <div className="intro_head">
          <p style={{ width: "110rem" }}>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            Empowering businesses through <span>
              full stack development
            </span>{" "}
            expertise.
          </p>
          <p style={{ marginBottom: "8rem" }}>
            As a full stack developer, I am passionate about creating powerful
            and engaging web applications. With expertise in both front-end and
            back-end technologies, I strive to deliver seamless user experiences
            and robust functionality. I excel in crafting responsive interfaces,
            implementing efficient databases, and optimizing performance to
            ensure optimal results. By leveraging my skills in various
            programming languages and frameworks, I have the ability to bring
            ideas to life and solve complex problems. I am dedicated to staying
            updated with the latest industry trends and technologies, allowing
            me to deliver innovative solutions that drive business growth. With
            a strong commitment to quality, efficiency, and collaboration, I am
            ready to contribute my skills to help businesses thrive in the
            digital landscape.
          </p>
        </div>
      </div>
    </Element>
  );
};

export default About;
