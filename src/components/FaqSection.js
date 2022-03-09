import React from "react";
import styled from "styled-components";
import { StyledAbout } from "../style";

const FaqSection = () => {
  return (
    <Faq>
      <h2>
        Any Questions <span>FAQ</span>
      </h2>
      <div className="question">
        <h4>How do I start?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
            commodi.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Daily Schedule</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
            commodi.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>Different Payment Methods</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
            commodi.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>

      <div className="question">
        <h4>What Products do you have?</h4>
        <div className="answer">
          <p>Lorem ipsum dolor sit amet.</p>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet,
            commodi.
          </p>
        </div>
        <div className="faq-line"></div>
      </div>
    </Faq>
  );
};

const Faq = styled(StyledAbout)`
  display: block;
  span {
    display: block;
  }
  h2 {
    padding-bottom: 1rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #ccc;
    height: 0.1rem;
    width: 100%;
    margin: 1rem 0;
  }
  .question {
    padding: 2rem 0;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0;
    p {
      padding: 1rem 0;
    }
  }
`;

export default FaqSection;
