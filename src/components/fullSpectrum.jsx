import React, { useState } from "react";
import Product from "./product";
import Nav from "./nav";
import styled from "styled-components";
import { Footer } from "./footer";

const Div = styled.div`
  background-color: #130030;

  .fullSpectrum-title {
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

let FullSpectrum = (props) => {
  let [noOfProduct, setNoOfProduct] = useState(5);

  let product = [];

  for (let i = 0; i < noOfProduct; i++) {
    let item = props.products[i];
    product.push(<Product products={item} link="Full-Spectrum" />);
  }

  return (
    <Div>
      <Nav />
      <h1 className="fullSpectrum-title">Full Spectrum</h1>
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
      <Footer />
    </Div>
  );
};

export default FullSpectrum;
