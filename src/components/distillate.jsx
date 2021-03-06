import React from "react";
import Product from "./product";
import styled from "styled-components";
import { motion } from "framer-motion";
import { animation, transition } from "./animation";
import ScrollToTop from "./ScrollTop";

const Div = styled.div`
  /* background-color: #130030; */
  padding-bottom: 100px;
  /* background: rgb(18, 0, 51);
  background: linear-gradient(
    0deg,
    rgba(18, 0, 51, 1) 10%,
    rgba(38, 9, 94, 1) 100%
  ); */
  overflow-x: hidden;

  .title {
    position: relative;
    z-index: 99;
    padding-bottom: 25%;
    .distillate-title {
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

  .product-container {
    max-width: 1500px;
    margin: 0 auto;
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

let Distillate = (props) => {
  let product = [];

  for (let i = 0; i < props.noOfProduct; i++) {
    let item = props.products[i];
    product.push(<Product products={item} link="Distillate" />);
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
          <h1 className="distillate-title">Distillate</h1>
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

export default Distillate;
