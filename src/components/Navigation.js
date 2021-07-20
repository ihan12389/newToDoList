import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navContainer">
      <Link to="/">
        <span className="navLink">Home</span>
      </Link>
      <Link to="/Profile">
        <span className="navLink">Profile</span>
      </Link>
    </div>
  );
};

export default Navigation;
