import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <React.Fragment>
      <div className="navbar">
        <div className="logo">
          <h2>
            <span>job</span>
            <span className="logo-r">huntr</span>
          </h2>
        </div>
        <div className="links">
          <Link to="/home">Home</Link>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/about">About</Link>
        </div>
        <div className="photo">
          <div className="circle" />
        </div>
      </div>
      <div className="spacer" />
    </React.Fragment>
  );
};

export default Navbar;
