import React from "react";
import Home1 from "../img/home1.png";

//Styled Components
// import styled from "styled-components";
import {
  StyledAbout,
  StyledDescription,
  StyledImage,
  StyledHide,
} from "../style";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>We work to make</h2>
          </StyledHide>
          <StyledHide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>true</h2>
          </StyledHide>
        </div>
        <p>
          Contact Us for any Photography and Videography ideas that you have. We
          have professionals with amazing skills.{" "}
        </p>
        <button>Contact Us</button>
      </StyledDescription>
      <StyledImage>
        <img src={Home1} alt="Photography expert" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
