import React from "react";
import Sunnyd from "../../assets/sunnyd.svg";
import { Link } from "react-router-dom";

const HomePage = () => (
  <div className="home">
    <img className="sunnyd" src={Sunnyd} alt="side orange" />
    <div className="logo">
      <h2>jobhuntr</h2>
    </div>
    <div className="heading-box">
      <h1 className="heading">Make Smarter Career Choices</h1>
      <h3 className="info">
        A Data-driven decision visualizer for finding new jobs and their pros
        and cons
      </h3>
      <Link to="/dashboard">
        <button className="btn">Start Now</button>
      </Link>
    </div>
  </div>
);

export default HomePage;
