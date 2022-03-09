import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <StyledNav>
      <h1>
        <Link to="/" className="logo">
          Capture
        </Link>
      </h1>
      <ul>
        <li>
          <Link to="/">About Us</Link>
        </li>
        <li>
          <Link to="/work">Our Work</Link>
        </li>
        <li>
          <Link to="/contact">Contact Us</Link>
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 7rem;
  background: #282828;
  a {
    color: white;
  }
  ul {
    display: flex;
    list-style: none;
    li {
      padding-left: 4rem;
      position: relative;
    }
  }
  .logo {
    font-family: "Lobster", cursive;
    font-size: 1.3rem;
    font-weight: lighter;
  }
`;

export default Nav;
