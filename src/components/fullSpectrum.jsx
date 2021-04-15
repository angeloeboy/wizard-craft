import React, { useState } from "react";
import Product from "./product";
import Nav from "./nav";
import styled from "styled-components";
import { Footer } from "./footer";
import { motion } from "framer-motion";
import { animation, transition } from "./animation";
import ScrollToTop from "./ScrollTop";

const Div = styled.div`
  background-color: #130030;
  /* min-height: 100vh; */
  padding-bottom: 100px;
  background: rgb(18, 0, 51);
  background: linear-gradient(
    0deg,
    rgba(18, 0, 51, 1) 10%,
    rgba(38, 9, 94, 1) 100%
  );

  overflow-x: hidden;
  .title {
    position: relative;
    z-index: 99;
    padding-bottom: 25%;
    /* background-color: green; */
    .fullSpectrum-title {
      padding-top: 15%;
      text-align: center;
      color: #d5931c;
      font-size: 3rem;
      z-index: 99;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -70%);

      &-bg {
        color: #200750;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -30%);
        z-index: 00;
        font-size: 10rem;
      }
    }
  }

  .showMore {
    display: block;
    margin: 20px auto 0px auto;
    background-color: #d5931c;
    padding: 20px 40px;
    font-weight: 500;
    color: white;
    font-size: 1rem;
    border: none;
  }

  @media (max-width: 1020px) {
    .title {
      margin-top: 155px;

      .fullSpectrum-title {
        width: 100vw;
      }
      .fullSpectrum-title-bg {
        display: none;
      }
    }
  }

  @media (max-width: 500px) {
    .title {
      margin-top: 175px;

      .fullSpectrum-title {
        font-size: 2.5rem;
        width: 100vw;
      }
    }
  }
`;

let FullSpectrum = (props) => {
  let [noOfProduct, setNoOfProduct] = useState(5);

  let product = [];

  for (let i = 0; i < noOfProduct; i++) {
    let item = props.products[i];
    product.push(<Product products={item} link="Full-Spectrum" />);
  }

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
        <div className="title">
          <h1 className="fullSpectrum-title-bg">FullSpectrum</h1>

          <h1 className="fullSpectrum-title">Full Spectrum</h1>
        </div>
        <div className="product-container">
          {/* {props.products.map((product) => (
          <Product products={product} link="Full-Spectrum" />
        ))} */}

          {product}
        </div>
        <button
          className="showMore"
          onClick={() =>
            setNoOfProduct(noOfProduct + (props.products.length - noOfProduct))
          }
        >
          Show More ({props.products.length - noOfProduct})
        </button>
      </Div>
    </motion.div>
  );
};

export default FullSpectrum;
