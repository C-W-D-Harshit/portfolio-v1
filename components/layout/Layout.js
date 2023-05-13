import React from "react";
import Sidebar from "./Sidebar";
import MobileDetector from "../dectector/MobileDectector";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <MobileDetector>
        {children}

        <Sidebar />
      </MobileDetector>
      <main className="mob_main">
        <h1>Please use a PC!</h1>
      </main>
    </div>
  );
};

export default Layout;
