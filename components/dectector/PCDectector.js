import { useEffect } from "react";
import isMobile from "is-mobile";

const PCDectector = ({ children }) => {
  useEffect(() => {
    if (!isMobile()) {
      document.getElementById("page-contentt").style.display = "none";
    }
  }, []);

  return <div id="page-contentt">{children}</div>;
};

export default PCDectector;
