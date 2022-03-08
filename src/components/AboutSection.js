import React from "react";
import Home1 from "../img/home1.png";

const AboutSection = () => {
  return (
    <div>
      <div className="description">
        <div className="title">
          <div className="hide">
            <h2>We work to make</h2>
          </div>
          <div className="hide">
            <h2>
              your <span>dreams</span> come
            </h2>
          </div>
          <div className="hide">
            <h2>true</h2>
          </div>
        </div>
        <p>
          Contact Us for any Photography and Videography ideas that you have. We
          have professionals with amazing skills.{" "}
        </p>
        <button>Contact Us</button>
      </div>
      <div className="image">
        <img src={Home1} alt="Photography expert" />
      </div>
    </div>
  );
};

export default AboutSection;
