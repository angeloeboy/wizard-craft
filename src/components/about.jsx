import React from "react";
import styled from "styled-components";
import bg from "../assets/aboutBg.png";
import { motion } from "framer-motion";
import { animation, transition } from "./animation";
import ScrollToTop from "./ScrollTop";

const Div = styled.div`
  background-image: url(${bg});
  height: 100vh;
  background-size: cover;
  padding: 20px 5%;
  background-position: center;
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
        <div className="text">
          <h1>
            <span>About </span>Us
          </h1>
          <div className="line"></div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
            accumsan lacus vel facilisis. Lorem ipsum dolor sit amet,
            consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua. Quis ipsum suspendisse ultrices
            gravida. Risus commodo viverra maecenas accumsan lacus vel
            facilisis.{" "}
          </p>
        </div>
      </Div>
    </motion.div>
  );
};

export default About;
