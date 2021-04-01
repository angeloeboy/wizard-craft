import React from "react";
import { Footer } from "./footer";
import Nav from "./nav";
import styled from "styled-components";
import img from "../assets/product-logo/strawberry.png";
import cert from "../assets/certs/psi.png";
const Div = styled.div`
  background-color: #120033;
  .product-description-container {
    padding: 20% 0px;
    display: flex;
    justify-content: space-around;
    .cert-container {
      width: 40%;
      img {
        width: 80%;
      }
    }
  }
`;

let ProductDetails = (props) => {
  return (
    <Div>
      <Nav />
      <div className="product-description-container">
        <div className="texts">
          <img src={img} alt="" className="product-img" />

          <h1>{props.products.name}</h1>
          <h1>{props.products.description}</h1>
        </div>
        <div className="cert-container">
          <img src={cert} alt="" />
        </div>
      </div>

      <Footer />
    </Div>
  );
};

export default ProductDetails;
