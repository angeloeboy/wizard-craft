import React from "react";
import Product from "./product";
import styled from "styled-components";
import { motion } from "framer-motion";
import { animation, transition } from "./animation";
import ScrollToTop from "./ScrollTop";

const Div = styled.div`
  padding-bottom: 100px;
  overflow-x: hidden;

  .title {
    z-index: 99;

    .distillate-title {
      text-align: center;
      color: #3b118b;
      font-size: 3rem;
      z-index: 99;
      margin-top: 200px;
      margin-bottom: 50px;
    }
  }

  .product-container {
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 0px;
  }

  .showMore {
    display: block;
    margin: 20px auto 0px auto;
    margin-top: 60px;
    padding: 20px 45px;
    border: none;
    background-color: #d5931c;
    color: white;
    font-weight: 300;
    font-size: 18px;
    cursor: pointer;
    color: #3b118b;
    font-weight: bold;
    background-image: linear-gradient(140deg, #ffb726, #e98800);
  }

  @media (max-width: 1020px) {
    .title {
      margin-top: 155px;

      .distillate-title {
        width: 100vw;
      }
      .distillate-title-bg {
        display: none;
      }
    }
  }

  @media (max-width: 500px) {
    .title {
      margin-top: 180px;

      .distillate-title {
        font-size: 2rem;
        width: 100vw;
      }
    }

    .product-container {
      padding-top: 16px;
    }
  }
`;
let SauceConcentrate = (props) => {
  let product = [];

  for (let i = 0; i < props.noOfProduct; i++) {
    let item = props.products[i];
    product.push(<Product products={item} link="Sauce-Concentrate" />);
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
          <h1 className="distillate-title">Sauce Concentrate</h1>
        </div>

        <div className="product-container">{product}</div>

        <button
          className="showMore"
          onClick={() => {
            if (props.products.length - props.noOfProduct >= 5) {
              props.setNoOfProduct(props.noOfProduct + 5);
            } else {
              props.setNoOfProduct(
                props.noOfProduct + (props.products.length - props.noOfProduct)
              );
            }
          }}
        >
          Show More ({props.products.length - props.noOfProduct})
        </button>
      </Div>
    </motion.div>
  );
};

export default SauceConcentrate;
