import React from "react";
import Product from "./product";
import styled from "styled-components";
import { BrowserRouter as Router, Link, Route } from "react-router-dom";
import Distillate from "./distillate";
import FullSpectrum from "./fullSpectrum";
import Nav from "./nav";

//Images
import HeroImg from "../assets/hero-bg-image.png";
import LogoHomePage from "../assets/logo-homepage.png";
import fullSpectrumImg from "../assets/fullSpectrum.png";
import distillateImg from "../assets/distillate.png";
import bigImg from "../assets/highlightsBig.png";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import img4 from "../assets/img4.png";
import { Footer } from "./footer";

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
  height: 100vh;

  .text-container {
    width: 50%;
    h1 {
      color: white;
    }
    h1:nth-child(1) {
      font-weight: 400;
    }

    h1:nth-child(2) {
      color: #d5931c;
      font-size: 3.2rem;
    }

    p {
      color: white;
      opacity: 0.7;
      font-weight: 300;
    }
  }

  .hero-image {
    width: 50%;
    img {
      width: 100%;
    }
  }
`;

const Products = styled.div`
  text-align: center;
  box-sizing: border-box;
  background-color: #120033;
  padding: 100px;
  /* padding-bottom: 0px; */
  min-height: 120vh;

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
      width: 100%;
      /* background-color: pink; */
    }

    div {
      display: flex;
      align-items: center;
      flex-flow: column;
      width: 70%;
      position: absolute;
      /* background-color: pink; */
    }

    div:nth-child(2) {
      right: 0;
    }

    .link {
      position: absolute;
      bottom: 20%;
      z-index: 2;
    }
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
      background-color: red;
    }
  }
`;
let Home = () => {
  return (
    <Main>
      <Nav />

      <Hero>
        <div className="text-container">
          <h1>Welcome to</h1>
          <h1>Wizard Craft</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin
            mattis non magna id scelerisque. Nullam urna justo, facilisis
            aliquam leo non, pellentesque malesuada est. Nam sollicitudin
            vehicula massa, ac sodales augue volutpat ut.{" "}
          </p>
        </div>
        <div className="hero-image">
          <img src={LogoHomePage} alt="" />
        </div>
      </Hero>

      <Products id="products">
        <h1>Products</h1>
        <p>Find out the details of our prouducts below.</p>

        <div className="product-choice">
          <div>
            <img src={distillateImg} alt="distillate" />
            <Link to="/Distillate" className="link">
              <Button button="distillate">Distillate</Button>
            </Link>
          </div>
          <div>
            <img src={fullSpectrumImg} alt="" />
            <Link to="/Full-Spectrum" className="link">
              <Button button="full-spectrum">Full Spectrum</Button>
            </Link>
          </div>
        </div>
      </Products>

      <Highlights>
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
      <Footer />
    </Main>
  );
};

export default Home;
