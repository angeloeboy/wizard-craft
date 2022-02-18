import React from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import ScrollToTop from "./ScrollTop";
import { motion } from "framer-motion";
import { animation, transition } from "./animation";
import comingSoon from "../assets/comingSoon.png";
import bg from "../assets/bg-stripe.png";

const Div = styled.div`
  background-position: center;
  background-size: cover;
  overflow-x: hidden;
  .container {
    max-width: 1500px;
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
    margin: 0 auto;
  }

  .product-description-container {
    padding: 15% 5%;
    color: #3b118b !important;

    .texts-container {
      width: 50%;

      .product-img-info {
        display: flex;
        align-items: flex-start;

        .product-img {
          max-height: 200px;
          background-image: url(${bg});
          background-position: center;
          background-size: cover;
          padding: 20px 60px;
          border-radius: 20px;
        }

        .product-infos {
          margin-left: 30px;

          .feeling {
            .feeling-container {
              display: flex;
              margin-right: 30px;
              margin: 10px 0px;
              .icon {
                width: 20px;
                margin-right: 10px;
                position: relative;
                img {
                  width: 100%;
                  position: absolute;
                  top: 50%;
                  transform: translateY(-50%);
                  /* filter: invert(100%); */
                  filter: invert(7%) sepia(92%) saturate(4288%)
                    hue-rotate(261deg) brightness(110%) contrast(104%);
                }

                svg {
                  background-color: black;
                  color: black;
                }
              }
            }
          }
        }
      }

      h1 {
        font-size: 25px;
      }

      ul {
        padding-left: 20px;
        margin: 10px 0px;
        display: flex;

        li {
          margin-right: 50px;
        }
      }

      p {
        span {
          text-transform: uppercase;
          font-weight: 700;
        }
      }

      .product-type {
        margin-top: 30px;
      }
      .details-title {
        margin-top: 20px;
        font-size: 20px;
      }
      .details {
        font-weight: 400;
        margin-top: 10px;
      }

      button {
        text-transform: uppercase;
        background-color: #d5931c;
        border: 0px;
        padding: 20px 70px;
        font-size: 20px;
        font-weight: 800;
        margin-top: 70px;
        border: none;
        color: white;
        font-size: 16px;
        cursor: pointer;
        color: #3b118b;
        font-weight: bold;
        background-image: linear-gradient(140deg, #ffb726, #e98800);
      }
    }

    .cert-container {
      width: 40%;
      max-width: 500px;
      img {
        width: 90%;
      }
    }
  }

  @media (max-width: 1000px) {
    padding-bottom: 100px;
    background-position: 30%;
    .container {
      flex-flow: column;
      position: relative;
    }
    .product-description-container {
      .texts-container {
        width: 90%;
        margin-top: 100px;
      }
      .cert-container {
        width: 80%;
        margin-top: 80px;
        margin-bottom: 100px;
      }

      button {
        position: absolute;
        bottom: 0%;
        font-size: 12px;
        font-size: 12px;
      }

      .feeling {
        .feeling-container {
          .icon {
            width: 15px;
            img {
              width: 50%;
              color: white;
            }
          }
        }

        p {
          font-size: 12px;
        }
      }

      .product-img {
        width: 50%;
      }
    }
  }

  @media (max-width: 500px) {
    .product-description-container {
      flex-flow: column;

      .texts-container {
        width: 95%;

        .product-img-info {
          .product-img {
            padding: 20px 0px;
          }

          .product-infos {
            margin-left: 10px;

            .feeling {
              .feeling-container {
                .icon {
                  width: 15px;
                }
              }
            }
          }
        }
        .details {
          font-size: 12px;
        }

        h1 {
          font-size: 18px;
        }

        .product-type {
          margin-top: 20px;
          font-size: 12px;
        }
      }
      .cert-container {
        width: 90%;

        img {
          width: 100%;
        }
      }

      button {
        font-size: 12px;
      }
    }
  }
`;

let ProductDetails = (props) => {
  let history = useHistory();
  const goToPreviousPath = () => {
    history.goBack();
  };

  return (
    <motion.div
      initial="out"
      animate="in"
      exit="out"
      variants={animation}
      transition={transition}
    >
      <Div>
        <ScrollToTop />
        <div className="product-description-container">
          <div className="container">
            <div className="texts-container">
              <div className="product-img-info">
                <img
                  src={props.products.ProductLogo}
                  alt=""
                  className="product-img"
                />

                <div className="product-infos">
                  <h1>{props.products.name}</h1>
                  <div className="feeling">
                    <div className="feeling-container">
                      <div className="icon">
                        <img src={props.products.ImgLink1} alt="" />
                      </div>
                      <p>{props.products.feeling1}</p>
                    </div>
                    <div className="feeling-container">
                      <div className="icon">
                        <img src={props.products.ImgLink2} alt="" />
                      </div>
                      <p>{props.products.feeling2}</p>
                    </div>
                    <div className="feeling-container">
                      <div className="icon">
                        <img src={props.products.ImgLink3} alt="" />
                      </div>
                      <p>{props.products.feeling3}</p>
                    </div>
                  </div>

                  <p className="product-type">
                    <span>TYPE: </span> {props.products.description}
                  </p>
                </div>
              </div>

              <p className="details-title">
                {" "}
                <span>STRAIN DETAILS</span>{" "}
              </p>
              <p className="details">{props.products.details}</p>

              <button onClick={goToPreviousPath}>Back</button>
            </div>

            <div className="cert-container">
              <img src={comingSoon} alt="" />
            </div>
            {/* <img src={bg} alt="" /> */}
          </div>
        </div>
      </Div>
    </motion.div>
  );
};

export default ProductDetails;
