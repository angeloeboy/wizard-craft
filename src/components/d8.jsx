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
      padding-top: 15%;
      text-align: center;
      color: #3b118b;
      font-size: 3rem;
      z-index: 99;
    }
  }

  .product-container {
    max-width: 1500px;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
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
      margin-top: 175px;

      .distillate-title {
        font-size: 2.5rem;
        width: 100vw;
      }
    }
  }
`;

let D8 = (props) => {
  let product = [];

  for (let i = 0; i < props.noOfProduct; i++) {
    let item = props.products[i];
    product.push(<Product products={item} link="d8" />);
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
          <h1 className="distillate-title">D8</h1>
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

export default D8;
