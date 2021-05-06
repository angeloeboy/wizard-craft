import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

// import IMAGES from "../assets/product-icons/index";

const Div = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 49%;
  margin: 6px 0px;
  transition: all 0.3s ease;
  background-color: #26095c;
  position: relative;

  a {
    text-decoration: none;
  }
  p {
    color: white;
  }

  .inner-product {
    display: flex;
    align-items: center;
    justify-content: space-between;

    .img-container {
      width: 35%;
      /* height: 100%; */
      height: auto;
      padding: 20px;
      text-align: center;
      img {
        max-width: 80%;
        max-height: 30px;
      }
    }
    .texts {
      margin-left: 20px;
      width: 65%;
      background-color: #2c0b6b;
      width: 60%;
      padding: 18px 20px;
      padding-right: 0px;
      position: relative;

      .product-name {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1rem;
        padding-right: 100px;
      }

      .product-desc {
        font-weight: 300;
      }

      button {
        text-transform: uppercase;
        /* background-color: #651ed6; */
        background: rgb(74, 16, 166);
        background: linear-gradient(
          0deg,
          rgba(74, 16, 166, 1) 0%,
          rgba(108, 34, 224, 1) 64%
        );
        width: 90px;
        border: none;
        height: 100%;
        padding: 5px 10px;
        position: absolute;
        top: 0px;
        right: 0;
        font-weight: 600;
        font-size: 0.8rem;
      }

      .line {
        content: "";
        width: 1px;
        height: 80%;
        background-color: #462e74;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
      }

      .icons {
        display: flex;
        .icon-container {
          display: grid;
          align-content: center;
        }
        img {
          width: 18px;
          margin-top: 14px;
          margin-right: 26px;
          align-items: center;
          &:nth-child(1) {
            margin-left: 0px;
          }
        }
      }
    }
  }

  @media (max-width: 1110px) {
    width: 80%;
  }

  @media (max-width: 900px) {
    width: 100%;
  }

  @media (max-width: 600px) {
    .inner-product {
      .img-container {
        padding: 10px;
        width: 40%;
      }

      .texts {
        margin-left: 0px;
        .product-name {
          font-size: 10px;
          padding-right: 0px;
        }

        .product-desc {
          font-size: 10px;
          margin-top: 5px;
        }

        .icons {
          img {
            width: 15px;
            margin-right: 10px;
          }
        }

        button {
          font-size: 10px;
          width: 70px;
        }
      }
    }
  }

  @media (max-width: 500px) {
    .inner-product {
      .texts {
        .product-name {
          padding-right: 90px;
        }
      }
    }
  }
`;

let Product = (props) => {
  return (
    <Div>
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <div className="inner-product">
          <div className="img-container">
            <img src={props.products.ProductLogo} alt="" />
          </div>

          <div className="texts">
            <div className="line"></div>
            <p className="product-name">{props.products.name}</p>
            <p className="product-desc">{props.products.description}</p>

            <div className="icons">
              <div className="icon-container">
                <img src={props.products.ImgLink1} alt="" />
              </div>
              <div className="icon-container">
                <img src={props.products.ImgLink2} alt="" />
              </div>
              <div className="icon-container">
                <img src={props.products.ImgLink3} alt="" />
              </div>
            </div>

            <Link to={`/${props.link}/${props.products.name}`}>
              <button>More Details</button>
            </Link>
          </div>
        </div>
      </motion.div>
    </Div>
  );
};

export default Product;
