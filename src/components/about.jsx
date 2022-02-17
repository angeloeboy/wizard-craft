import React from "react";
import styled from "styled-components";
import bg from "../assets/about-bg.png";
import aboutImg from "../assets/about-img.png";
import { motion } from "framer-motion";
import { animation, transition } from "./animation";
import ScrollToTop from "./ScrollTop";

const Div = styled.div`
  background-image: url(${bg});
  background-size: cover;
  padding: 20px 5%;
  background-position: center;
  box-sizing: border-box;

  .container {
    max-width: 1550px;
    margin: 0 auto;
    display: flex;
    /* align-items: center; */
    justify-content: space-between;
    min-height: 800px;
    padding-top: 150px;
  }
  .text {
    width: 40%;
    padding-top: 100px;

    h1 {
      font-size: 4rem;
      color: white;
      text-transform: uppercase;
      span {
        color: #3b118b;
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
      color: #875171;
      margin-top: 10px;
    }
  }

  .img-container {
    width: 55%;
    padding-top: 70px;
    transform: translateX(10%);
    img {
      width: 100%;
    }
  }

  @media (max-width: 1090px) {
    background-position: right;
    .container {
      flex-flow: column;
      align-items: center;
    }
    .text {
      width: 90%;
      margin-bottom: 60px;
    }

    .img-container {
      width: 80%;
      transform: translateX(10%);
    }
  }

  @media (max-width: 500px) {
    .text {
      padding-top: 60px;
      h1 {
        font-size: 2.5rem;
      }

      p {
        font-size: 12px;
        margin-top: 10px;
      }
    }

    .img-container {
      width: 100%;
      padding-top: 30px;
      img {
        width: 100%;
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

          <div className="img-container">
            <img src={aboutImg} alt="" />
          </div>
        </div>
      </Div>
    </motion.div>
  );
};

export default About;
