import React from "react";
//Import Icons
import diaphragm from "../img/diaphragm.svg";
import clock from "../img/clock.svg";
import money from "../img/money.svg";
import teamwork from "../img/teamwork.svg";
import Home2 from "../img/home2.png";

//Styles
import { StyledAbout, StyledDescription, StyledImage } from "../style";

import styled from "styled-components";

const ServicesSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <h2>
          High <span>Quality</span> services
        </h2>

        <StyledCards>
          <Card>
            <div className="icon">
              <img src={clock} alt="" />
              <h3>Effecient</h3>
            </div>

            <p>Lorem ipsum dolor sit amet. </p>
          </Card>

          <Card>
            <div className="icon">
              <img src={teamwork} alt="" />
              <h3>Teamwork</h3>
            </div>

            <p>Lorem ipsum dolor sit amet. </p>
          </Card>

          <Card>
            <div className="icon">
              <img src={diaphragm} alt="" />
              <h3>Diaphragm</h3>
            </div>

            <p>Lorem ipsum dolor sit amet. </p>
          </Card>

          <Card>
            <div className="icon">
              <img src={money} alt="" />
              <h3>Affordable</h3>
            </div>

            <p>Lorem ipsum dolor sit amet. </p>
          </Card>
        </StyledCards>
      </StyledDescription>

      <StyledImage>
        <img src={Home2} alt="" />
      </StyledImage>
    </StyledAbout>
  );
};

const Services = styled(StyledAbout)`
  h2 {
    padding-bottom: 3rem;
  }
  p {
    width: 70%;
    padding: 2rem 0 3rem 0rem;
  }
`;

const StyledCards = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Card = styled.div`
  flex-basis: 15rem;
  .icon {
    display: flex;
    align-items: center;
    h3 {
      margin-left: 1rem;
      background: white;
      color: #000;
      padding: 1rem;
    }
  }
`;

export default ServicesSection;
