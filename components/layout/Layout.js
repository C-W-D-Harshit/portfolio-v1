import React from "react";
import Sidebar from "./Sidebar";
import MobileDetector from "../dectector/MobileDectector";
import PCDectector from "../dectector/PCDectector";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      <MobileDetector>
        {children}
        <Sidebar />
      </MobileDetector>
      <PCDectector>
        <main className="mob_main">
          <h1>Please use a PC!</h1>
        </main>
      </PCDectector>
    </div>
  );
};

export default Layout;
