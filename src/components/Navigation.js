import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <div>
      <Link to="/">
        <span>Home</span>
      </Link>
      <Link to="/Profile">
        <span>Profile</span>
      </Link>
    </div>
  );
};

export default Navigation;
