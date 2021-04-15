import React from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import { motion } from "framer-motion";
import { animation, transition } from "./animation";

//Images
import HeroImg from "../assets/hero-images/hero-bg-image-1.png";
import LogoHomePage from "../assets/hero-images/logo192.png";
import fullSpectrumImg from "../assets/hero-images/fullSpectrum-1.png";
import distillateImg from "../assets/hero-images/distillate-1.png";
import bigImg from "../assets/hero-images/highlightsBig-1.png";
import img1 from "../assets/hero-images/img1-1.png";
import img2 from "../assets/hero-images/img2-1.png";
import img3 from "../assets/hero-images/img3-1.png";
import img4 from "../assets/hero-images/img4-1.png";
import ScrollToTop from "./ScrollTop";

const Main = styled.div`
  background-color: #120033;
`;

const Hero = styled.div`
  padding: 0px 5%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url(${HeroImg});
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  min-height: 100vh;
  .text-container {
    width: 50%;
    margin-top: 20px;
    h1 {
      color: white;
    }
    h1:nth-child(1) {
      font-weight: 400;
      font-size: 50px;
    }

    h1:nth-child(2) {
      color: #d5931c;
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
      color: white;
      opacity: 0.7;
      font-weight: 300;
      font-size: 20px;
    }

    button {
      margin-top: 60px;
      padding: 10px 45px;
      border: none;
      background-color: #d5931c;
      color: white;
      font-size: 20px;
      cursor: pointer;
    }
  }

  .hero-image {
    width: 50%;
    /* background-color: green; */
    img {
      width: 500px;
    }
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    align-items: center;
    padding: 10vh 5%;
    .text-container {
      width: 100%;
    }
    .hero-image {
      width: 70%;
      img {
        width: 100%;
      }
    }
  }

  @media (max-width: 600px) {
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
  }

  @media (max-width: 430px) {
    .text-container {
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
  background-color: #120033;
  padding: 100px;
  min-height: 105vh;
  overflow-x: hidden;

  h1 {
    color: #d5931c;
    font-size: 2.5rem;
  }

  p {
    font-weight: 500;
    color: white;
    font-size: 1.2rem;
  }

  .product-choice {
    position: relative;
    top: -200px;

    img {
      width: 800px;
      /* background-color: pink; */
    }

    div {
      display: flex;
      align-items: center;
      flex-flow: column;
      width: 65%;
      position: absolute;
      /* background-color: pink; */
    }

    div:nth-child(2) {
      right: 0;
    }

    .link {
      position: absolute;
      bottom: 15%;
      z-index: 2;
    }

    .full {
      transform: translateY(2px);
    }
  }

  @media (max-width: 1092px) {
    .product-choice {
      img {
        width: 800px;
      }
      div:nth-child(1) {
        left: -10%;
      }
      div:nth-child(2) {
        right: -10%;
      }
    }
  }

  @media (max-width: 900px) {
    .product-choice {
      img {
        width: 800px;
      }
      div:nth-child(1) {
        left: -10%;
      }
      div:nth-child(2) {
        right: -10%;
      }
    }
  }

  @media (max-width: 700px) {
    overflow-y: hidden;
  }

  @media (max-width: 600px) {
    padding: 100px 5%;
    p {
      font-size: 1rem;
      width: 100%;
    }
    .product-choice {
      top: -100px;
      img {
        width: 700px;
      }
      div:nth-child(1) {
        left: -10vw;
      }
      div:nth-child(2) {
        right: -10vw;
      }
    }
  }

  @media (max-width: 450px) {
    min-height: 700px;
    .product-choice {
      top: 0px;

      img {
        width: 400px;
      }
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
  /* height: 100vh; */
  background-color: #0f0028;
  padding-bottom: 50px;

  .text {
    width: 50%;
    padding: 50px;
    h1 {
      color: #d5931c;
      font-size: 2.5rem;
    }

    p {
      color: white;
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
      background-color: #080114;
    }

    div:nth-child(2) {
      grid-column: 3/4;
      grid-row: 1/2;
    }
    div:nth-child(3) {
      grid-column: 4/5;
      grid-row: 1/2;
    }

    div:nth-child(4) {
      grid-column: 3/4;
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
    .highlights-img {
      div:nth-child(1) {
        grid-column: 1/5;
        grid-row: 1/3;
      }
      div:nth-child(2) {
        grid-column: 1/3;
        grid-row: 3/4;
      }
      div:nth-child(3) {
        grid-column: 3/5;
        grid-row: 3/4;
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
      <ScrollToTop />
      <Main>
        <Hero>
          <div className="text-container">
            <h1>Welcome to</h1>
            <h1>Wizard Craft</h1>
            <div className="line"></div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas
              accumsan lacus vel facilisis.{" "}
            </p>
            <button>Contact Us</button>
          </div>
          <div className="hero-image">
            <img src={LogoHomePage} alt="" />
          </div>
        </Hero>

        <Products id="Products">
          <h1>Products</h1>
          <p>Find out the details of our products below.</p>

          <div className="product-choice">
            <div>
              <img src={distillateImg} alt="distillate" />
              <Link to="/Distillate" className="link">
                <Button button="distillate">Distillate</Button>
              </Link>
            </div>
            <div>
              <img src={fullSpectrumImg} alt="" />
              <Link to="/Full-Spectrum" className="link full">
                <Button button="full-spectrum">Full Spectrum</Button>
              </Link>
            </div>
          </div>
        </Products>

        <Highlights id="Highlights">
          <div className="text">
            <h1>Highlights</h1>
            <p>
              {" "}
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
              mattis non magna id scelerisque. Nullam urna justo, facilisis
              aliquam leo non, pellentesque malesuada est.
            </p>
          </div>

          <div className="highlights-img">
            <div>
              <img src={bigImg} alt="bigimage" />
            </div>
            <div>
              <img src={img1} alt="bigimage" />
            </div>
            <div>
              <img src={img2} alt="bigimage" />
            </div>
            <div>
              <img src={img3} alt="bigimage" />
            </div>
            <div>
              <img src={img4} alt="bigimage" />
            </div>
          </div>
        </Highlights>
      </Main>
    </motion.div>
  );
};

export default Home;
