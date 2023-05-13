import { IconButton } from "@mui/material";
import React, { useEffect, useState } from "react";
import { AiOutlineHome } from "react-icons/ai";
import { MdOutlineAccountBox, MdOutlineLibraryBooks } from "react-icons/md";
import { BiClipboard } from "react-icons/bi";
import { TbBooks, TbEyeglass, TbLayoutDashboard } from "react-icons/tb";
import { BsCurrencyRupee } from "react-icons/bs";
import { useRouter } from "next/router";
import { Element, animateScroll, scroller } from "react-scroll";

const Sidebar = () => {
  const [isActive, setIsActive] = useState(1);
  const router = useRouter();

  const handleClick = (buttonId, sectionId) => {
    setIsActive(buttonId === isActive ? null : buttonId);
    const element = document.getElementById(sectionId);
    if (sectionId === "intro") {
      animateScroll.scrollToTop({
        duration: 800, // Optional: Specify the duration of the scroll animation
        smooth: "easeInOutQuart", // Optional: Specify the easing function for the scroll animation
      });
    }
    if (element) {
      // element.scrollIntoView({ behavior: "smooth" });
      scroller.scrollTo(sectionId, {
        duration: 800,
        delay: 0,
        smooth: "easeInOutQuart",
      });
    }
  };
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      const shouldShowScrollToTop = scrollTop > 200; // Adjust the scroll position as needed
      setShowScrollToTop(shouldShowScrollToTop);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="sidebar">
      <div className="sidebar_">
        <IconButton
          onClick={() => {
            handleClick(1, "intro");
            // scrollToTop();
          }}
        >
          <AiOutlineHome
            className={isActive === 1 ? "side-ico-active" : "side-ico"}
          />
        </IconButton>
        <IconButton onClick={() => handleClick(2, "about")}>
          <MdOutlineAccountBox
            className={isActive === 2 ? "side-ico-active" : "side-ico"}
          />
        </IconButton>
        <IconButton onClick={() => handleClick(3, "resume")}>
          <BiClipboard
            className={isActive === 3 ? "side-ico-active" : "side-ico"}
          />
        </IconButton>
        <IconButton onClick={() => handleClick(4, "services")}>
          <TbBooks
            className={isActive === 4 ? "side-ico-active" : "side-ico"}
          />
        </IconButton>
        <IconButton onClick={() => handleClick(5, "my_skills")}>
          <TbEyeglass
            className={isActive === 5 ? "side-ico-active" : "side-ico"}
          />
        </IconButton>
        <IconButton onClick={() => handleClick(6, "portfolio")}>
          <TbLayoutDashboard
            className={isActive === 6 ? "side-ico-active" : "side-ico"}
          />
        </IconButton>
        <IconButton onClick={() => handleClick(7, "testimonials")}>
          <MdOutlineLibraryBooks
            className={isActive === 7 ? "side-ico-active" : "side-ico"}
          />
        </IconButton>
        <IconButton onClick={() => handleClick(8, "pricing")}>
          <BsCurrencyRupee
            className={isActive === 8 ? "side-ico-active" : "side-ico"}
          />
        </IconButton>
      </div>
    </div>
  );
};

export default Sidebar;
