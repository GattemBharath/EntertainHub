import React from "react";
import "./header.css";

const Header = () => {
  return (
    <span onClick={() => window.scrollTo(0, 0)} className="header">
      🎬 Entertainment Hub 📽️
    </span>
  );
};

export default Header;
