import React from "react";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="layout">
      {children}
      <Sidebar />
    </div>
  );
};

export default Layout;
