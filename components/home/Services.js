import React from "react";
import { BiClipboard } from "react-icons/bi";
import { Element } from "react-scroll";
import {
  AiFillCode,
  AiFillHtml5,
  AiOutlineAntDesign,
  AiOutlineTransaction,
} from "react-icons/ai";
import SpecCard from "../cards/SpecCard";
import { MdDeveloperBoard } from "react-icons/md";
const Services = () => {
  return (
    <Element name="services">
      <div className="services" id="services">
        <div className="intro_top" style={{ color: "#bfbfbf" }}>
          <BiClipboard style={{ marginRight: "1rem" }} />
          <p>SERVICES</p>
        </div>
        <div className="intro_head">
          <p>
            My <span>Speciallizations</span>
          </p>
        </div>
        <div className="ser_holder">
          <SpecCard
            one="Website Design"
            two="I know Figma and Framer"
            ico={<AiOutlineAntDesign />}
          />
          <SpecCard
            one="Devlopment"
            two="I make full stack websites like ecommerce app and blogs"
            ico={<AiFillCode />}
          />
          <SpecCard
            one="SEO/Marketing"
            two="I increse the traffic of your website"
            ico={<AiOutlineTransaction />}
          />
        </div>
      </div>
    </Element>
  );
};

export default Services;
