import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import strawberry from "../assets/product-logo/strawberry.png";
const Div = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 49%;
  border: 1px solid #594d6c;
  padding: 20px;
  margin: 6px 0px;

  a {
    text-decoration: none;
  }
  p {
    color: white;
  }

  .inner-product {
    display: flex;
    align-items: center;

    .img-container {
      width: 40%;
      img {
        width: 100%;
      }
    }
    .texts {
      margin-left: 20px;
      width: 60%;
      .product-name {
        text-transform: uppercase;
        font-weight: 700;
      }

      .product-desc {
        margin-top: 10px;
      }

      button {
        text-transform: uppercase;
        font-weight: 600;
        background-color: #d5931c;
        margin-top: 20px;
        width: 60%;
        border: none;
        padding: 5px 10px;
      }
    }
  }
`;

let Product = (props) => {
  return (
    <Div>
      <Link to={`/${props.link}/${props.products.name}`}>
        <div className="inner-product">
          <div className="img-container">
            <img src={strawberry} alt="" />
          </div>
          <div className="texts">
            <p className="product-name">{props.products.name}</p>
            <p className="product-desc">{props.products.description}</p>
            <button>View more details</button>
          </div>
        </div>
      </Link>
    </Div>
  );
};

export default Product;
