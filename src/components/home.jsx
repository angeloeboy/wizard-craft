import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { animation, transition } from "./animation";

//Images
import HeroImg from "../assets/hero-images/hero-bg-image-1.png";
import LogoHomePage from "../assets/hero-images/hero-image-logo.png";

import d8 from "../assets/hero-images/D8.png";
import sauce from "../assets/hero-images/SAUCE.png";

import bigImg from "../assets/hero-images/first.png";
import second from "../assets/hero-images/second.png";
import third from "../assets/hero-images/third.png";
import fourth from "../assets/hero-images/fourth.png";

const Main = styled.div`
  background-color: #120033;
`;

const Hero = styled.div`
  background-image: url(${HeroImg});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  overflow: hidden;
  padding: 0px 5%;

  .container {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    min-height: 900px;
    margin: 0 auto;
    max-width: 1500px;
    /* min-width: 100%; */
  }

  .text-container {
    width: 40%;
    margin-top: 20px;
    align-self: center;

    h1 {
      color: white;
      font-size: 20px;
      text-transform: uppercase;
      font-weight: 800;
    }
    h1:nth-child(1) {
      font-weight: 400;
      font-size: 40px;
    }

    h1:nth-child(2) {
      color: #ff9f0b;
      font-size: 70px;
      margin-top: -20px;
    }

    .line {
      width: 125px;
      height: 3px;
      background-color: #d5931c;
      content: "";
      margin-bottom: 20px;
    }

    p {
      color: #d1cddd;
      font-weight: 300;
      font-size: 16px;
    }

    button {
      margin-top: 60px;
      padding: 20px 45px;
      border: none;
      background-color: #d5931c;
      color: white;
      font-size: 18px;
      cursor: pointer;
      color: #3b118b;
      font-weight: bold;
      background-image: linear-gradient(140deg, #ffb726, #e98800);
    }
  }

  .hero-image {
    width: 60%;
    max-width: 800px;
    margin-bottom: 0px;
    transform: translateY(7px);
    img {
      width: 100%;
      margin-left: 10%;
    }
  }

  @media (max-width: 900px) {
    padding: 100px 5%;
    display: relative;
    background-position-x: 25%;
    .container {
      flex-direction: column;
      align-items: center;
      justify-content: center;
      min-height: initial;
    }

    .box2 {
      right: 100px;
      left: initial;
      transform: rotate(90deg);
      right: -5%;
      bottom: initial;
      bottom: 0;
      width: 100px;
    }

    .text-container {
      width: 100%;
    }
    .hero-image {
      width: 100%;

      margin-top: 100px;

      img {
        width: 90%;
        margin: 0px;
        margin: 0 auto;
        display: block;
        transform: translateX(10%);
      }
    }
  }

  @media (max-width: 600px) {
    padding-bottom: 0px;
    overflow-y: hidden;
    .container {
      padding-top: 70px;
    }

    .box1 {
      width: 20px;
      top: 10%;
    }

    .text-container {
      h1:nth-child(1) {
        font-size: 2rem;
      }
      h1:nth-child(2) {
        font-size: 50px;
      }

      p {
        font-size: 16px;
      }
    }

    .hero-image {
      width: 120%;
    }
  }

  @media (max-width: 430px) {
    .text-container {
      h1:nth-child(1) {
        font-size: 1.5rem;
      }
      h1:nth-child(2) {
        font-size: 40px;
        margin-top: 0px;
      }
      p {
        font-size: 13px;
      }

      button {
        font-size: 13px;
      }
    }
  }
`;

const Products = styled.div`
  text-align: center;
  box-sizing: border-box;
  background-color: white;
  padding: 100px;
  min-height: 900px;
  overflow-x: hidden;

  .container {
    max-width: 1500px;
    margin: 0 auto;
  }

  h1 {
    color: #3c118c;
    font-size: 2.5rem;
  }

  p {
    font-weight: 500;
    color: #3c118c;
    font-size: 1rem;
  }

  .product-choice {
    display: flex;
    margin-top: 100px;
    img {
      width: 100%;
    }
  }

  @media (max-width: 700px) {
    .product-choice {
      flex-flow: column;
    }
  }

  @media (max-width: 600px) {
    padding: 100px 5%;
    p {
      font-size: 1rem;
      width: 100%;
    }
  }

  @media (max-width: 450px) {
    min-height: 700px;
    .product-choice {
      top: 0px;

      div:nth-child(1) {
        /* left: -35%; */
        left: -5vw;
      }
      div:nth-child(2) {
        /* right: -35%; */
        right: -5vw;
      }
    }
  }

  @media (max-width: 340px) {
    min-height: 600px;
    /* background-color: pink; */
  }
`;

const Button = styled.button`
  box-sizing: border-box;
  width: 250px;
  font-weight: bold;
  font-size: 1rem;
  padding: 20px;
  text-transform: uppercase;
  background-color: ${(props) =>
    props.button === "distillate" ? "#d4921e" : "transparent"};
  color: ${(props) => (props.button === "distillate" ? "black" : "#6c22e1")};
  border: ${(props) =>
    props.button === "distillate" ? "2px solid#d4921e" : "2px solid #6c22e1"};
  box-shadow: 0px 3px 10px #1f1f1f;
  outline: none;
  transition: all 0.1s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
  }

  @media (max-width: 770px) {
    width: 200px;
  }

  @media (max-width: 600px) {
    width: 200px;
    /* padding: 10px; */
    font-size: 16px;
  }

  @media (max-width: 550px) {
    width: 150px;
    /* padding: 10px; */
    font-size: 13px;
  }

  @media (max-width: 450px) {
    width: 140px;
    padding: 10px;
    font-size: 12px;
  }

  @media (max-width: 350px) {
    font-size: 10px;
    padding: 8px;
    width: 120px;
  }
`;

const Highlights = styled.div`
  background-color: #f9f5f4;
  padding-bottom: 50px;

  .container {
    max-width: 1500px;
    margin: 0 auto;
    padding: 0px 10%;
  }
  .text {
    padding: 50px;
    text-align: center;
    h1 {
      color: #3c118c;
      font-size: 2.5rem;
    }

    p {
      color: #3c118c;
    }
  }

  .highlights-img {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr;

    img {
      width: 100%;
      height: 100%;
    }

    div:nth-child(1) {
      grid-column: 1/3;
      grid-row: 1/3;
    }

    div:nth-child(2) {
      grid-column: 3/5;
      grid-row: 1/2;
    }
    div:nth-child(3) {
      grid-column: 3/4;
      grid-row: 2/3;
    }

    div:nth-child(4) {
      grid-column: 4/5;
      grid-row: 2/3;
    }

    div:nth-child(5) {
      grid-column: 4/5;
      grid-row: 2/3;
    }
  }

  @media (max-width: 900px) {
    .text {
      box-sizing: border-box;
      padding: 50px;
      width: 100%;
      padding: 50px 5%;
    }
  }

  @media (max-width: 600px) {
    .container {
      padding: 0px 5%;
    }

    .highlights-img {
      div:nth-child(1) {
        grid-column: 1/5;
        grid-row: 1/3;
      }
      div:nth-child(2) {
        grid-column: 1/5;
        grid-row: 3/4;
      }
      div:nth-child(3) {
        grid-column: 3/5;
        grid-row: 4/5;
      }

      div:nth-child(4) {
        grid-column: 1/3;
        grid-row: 4/5;
      }

      div:nth-child(5) {
        grid-column: 3/5;
        grid-row: 4/5;
      }
    }
  }
  @media (max-width: 400px) {
    .text {
      box-sizing: border-box;
      padding: 50px 5%;
      width: 100%;

      p {
        font-size: 12px;
      }
    }
  }
`;
let Home = () => {
  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animation}
      transition={transition}
    >
      <Main>
        <Hero>
          <div className="container">
            <div className="text-container">
              <h1>Welcome to</h1>
              <h1>Wizard Cart</h1>
              <div className="line"></div>
              <p>
                We'll bring you the most premium quality strains available in
                the country, that will help ease all medical conditions, such as
                anxiety, stress, ADD/ADHD, depression, loss of appetite muscular
                dystrophy, hypertension, insomnia, migraines, and many more.{" "}
              </p>
              <a href="#footer">
                <button>Contact Us</button>
              </a>
            </div>
            <div className="hero-image">
              <img src={LogoHomePage} alt="" />
            </div>
          </div>
        </Hero>

        <Products id="products">
          <div className="container">
            <h1>PRODUCTS</h1>
            <p>Find out the details of our products below.</p>

            <div className="product-choice">
              <div>
                <Link to="/d8" className="link">
                  <img src={d8} alt="distillate" />
                </Link>
              </div>
              <div>
                <Link to="/Sauce-Concentrate" className="link full">
                  <img src={sauce} alt="" />
                </Link>
              </div>
            </div>
          </div>
        </Products>

        <Highlights id="Highlights">
          <div className="container">
            <div className="text">
              <h1>HIGHLIGHTS</h1>
              <p>Get thrilled with our new packaging design</p>
            </div>

            <div className="highlights-img">
              <div>
                <img src={bigImg} alt="bigimage" />
              </div>
              <div>
                <img src={second} alt="bigimage" />
              </div>
              <div>
                <img src={third} alt="bigimage" />
              </div>
              <div>
                <img src={fourth} alt="bigimage" />
              </div>
            </div>
          </div>
        </Highlights>
      </Main>
    </motion.div>
  );
};

export default Home;
