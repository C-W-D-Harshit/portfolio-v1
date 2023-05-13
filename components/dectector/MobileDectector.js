import { useEffect } from "react";
import isMobile from "is-mobile";

const MobileDetector = ({ children }) => {
  useEffect(() => {
    if (isMobile()) {
      document.getElementById("page-content").style.display = "none";
    }
  }, []);

  return <div id="page-content">{children}</div>;
};

export default MobileDetector;
