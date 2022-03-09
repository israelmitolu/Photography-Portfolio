import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
//Import Images
import athlete from "../img/athlete-small.png";
import theracer from "../img/theracer-small.png";
import goodtimes from "../img/goodtimes-small.png";

const OurWork = () => {
  return (
    <StyledWork>
      <h1>Our Work</h1>
      <StyledMovie>
        <h2>The Athlete</h2>
        <div className="line"></div>
        <Link to="/">
          <img src={athlete} alt="Athlete" />
        </Link>
      </StyledMovie>

      <StyledMovie>
        <h2>The Racer</h2>
        <div className="line"></div>
        <Link to="/">
          <img src={theracer} alt="The Racer" />
        </Link>
      </StyledMovie>

      <StyledMovie>
        <h2>Good Times</h2>
        <div className="line"></div>
        <Link to="/">
          <img src={goodtimes} alt="Good Times" />
        </Link>
      </StyledMovie>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  min-height: 100vh;
  overflow: hidden;
  padding: 2.5rem 7rem;
  h2 {
    padding: 0.5rem 0;
  }
`;

const StyledMovie = styled.div`
  padding-bottom: 6rem;
  .line {
    height: 0.3rem;
    background: #ccc;
    margin-bottom: 1.5rem;
  }
  img {
    width: 100%;
    height: 70vh;
    object-fit: cover;
  }
`;
export default OurWork;
