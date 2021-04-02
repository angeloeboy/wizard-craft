import React from "react";
import Product from "./product";
import Nav from "./nav";
import styled from "styled-components";
import { Footer } from "./footer";

const Div = styled.div`
  background-color: #130030;

  .distillate-title {
    padding-top: 15%;
    text-align: center;
    color: #d5931c;
    font-size: 3rem;
  }

  .showMore {
    display: block;
    margin: 20px auto 100px auto;
    background-color: #d5931c;
    padding: 20px 40px;
    font-weight: 500;
    color: white;
    font-size: 1rem;
    border: none;
  }
`;

let Distillate = (props) => {
  return (
    <Div>
      <Nav />
      <h1 className="distillate-title">Distillate</h1>

      <div className="product-container">
        {props.products.map((product) => (
          <Product products={product} link="Distillate" />
        ))}
      </div>

      <button className="showMore">Show More (10)</button>

      <Footer />
    </Div>
  );
};

export default Distillate;