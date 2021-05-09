import React from "react";
import styled from "styled-components";
import bg from "../assets/aboutBg.png";
import { motion } from "framer-motion";
import { animation, transition } from "./animation";
import ScrollToTop from "./ScrollTop";

const Div = styled.div`
  background-image: url(${bg});
  min-height: 100vh;
  background-size: cover;
  padding: 20px 5%;
  background-position: center;
  box-sizing: border-box;

  .container {
    max-width: 1550px;
    margin: 0 auto;
  }
  .text {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 40%;
    h1 {
      font-size: 4rem;
      color: white;
      span {
        color: #d5931c;
      }
    }

    .line {
      height: 3px;
      width: 100px;
      content: "";
      background-color: #d5931c;
      margin-bottom: 20px;
    }

    p {
      color: #ceccd5;
    }
  }

  @media (max-width: 1090px) {
    background-position: right;

    .text {
      width: 90%;
    }
  }

  @media (max-width: 500px) {
    .text {
      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 12px;
        margin-top: 10px;
      }
    }
  }
`;

let About = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animation}
      transition={transition}
    >
      <ScrollToTop />
      <Div>
        <div className="container">
          <div className="text">
            <h1>
              <span>About </span>Us
            </h1>
            <div className="line"></div>
            <p>
              Wizard carts are focused on quality. We want our consumers to
              enjoy the highest quality vape that is possible. You can trust
              Wizard to never cut corners on quality or price to make a quick
              dollar. we are focused on safety and quality. We show lab testing
              and the dates of the testing to keep our customers up to date on
              what’s going into there body to help build a trusting
              relationship. If you have any questions or concerns please reach
              out.
            </p>
            <p>
              Our goal at wizard carts is to help our customers have a trust
              worthy product they can vape without and illnesses. Wizard carts
              sends our condolences to families dealing with vaping related
              illnesses.
            </p>
          </div>
        </div>
      </Div>
    </motion.div>
  );
};

export default About;
