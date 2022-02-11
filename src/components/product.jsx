import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bg from "../assets/bg-stripe.png";

// import IMAGES from "../assets/product-icons/index";

const Div = styled.div`
  box-sizing: border-box;
  display: inline-block;
  width: 23%;
  margin: 6px 0px;
  transition: all 0.3s ease;
  background-color: #3b118b;
  margin: 5px;
  a {
    text-decoration: none;
  }
  p {
    color: white;
  }

  .inner-product {
    align-items: center;
    justify-content: space-between;
    padding: 20px;

    .img-container {
      width: 100%;
      text-align: center;
      background-image: url(${bg});
      padding: 30px;
      background-size: cover;
      img {
        max-width: 100%;
        /* max-height: 40px; */
      }
    }

    .texts {
      margin-top: 20px;
      display: flex;
      justify-content: space-between;

      .product-name {
        text-transform: uppercase;
        font-weight: 700;
        font-size: 1rem;
        width: 100%;
      }

      .product-desc {
        font-weight: 300;
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
          margin-right: 10px;
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
      }
      .texts {
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
          }
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
      <Link to={`/${props.link}/${props.products.name}`}>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <div className="inner-product">
            <div className="img-container">
              <img src={props.products.ProductLogo} alt="" />
            </div>

            <div className="texts">
              <div className="titles">
                <p className="product-name">{props.products.name}</p>
                <p className="product-desc">{props.products.description}</p>
              </div>

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

              {/* <button>More Details</button> */}
            </div>
          </div>
        </motion.div>
      </Link>
    </Div>
  );
};

export default Product;
