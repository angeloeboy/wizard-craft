import React from "react";
import styled from "styled-components";
import img from "../assets/product-logo/strawberry.png";
import cert from "../assets/certs/psi.png";
import { useHistory } from "react-router-dom";
import ScrollToTop from "./ScrollTop";
import { motion } from "framer-motion";
import { animation, transition } from "./animation";
import bg from "../assets/detailsBg.png";

const Div = styled.div`
  background-color: #120033;
  background-image: url(${bg});
  background-position: center;
  background-size: cover;
  .product-description-container {
    padding: 15% 5%;
    display: flex;
    justify-content: space-around;
    color: white;
    align-items: center;

    .texts-container {
      width: 50%;
      h1 {
        font-size: 25px;
        margin-top: 50px;
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
        margin: 10px 0px;

        span {
          text-transform: uppercase;
          font-weight: 700;
        }
      }

      .details {
        font-weight: 300;
      }

      button {
        text-transform: uppercase;
        background-color: #d5931c;
        border: 0px;
        padding: 10px 50px;
        font-size: 20px;
        font-weight: 800;
        margin-top: 70px;
      }

      .feeling {
        .feeling-container {
          display: inline-flex;
          margin-right: 30px;
          .icon {
            width: 20px;
            margin-right: 10px;
            position: relative;
            img {
              width: 100%;
              position: absolute;
              top: 50%;
              transform: translateY(-50%);
            }
          }
        }
      }
    }
    .cert-container {
      width: 40%;
      img {
        width: 90%;
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
          <div className="texts-container">
            <img src={img} alt="" className="product-img" />

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
            <ul>
              {/* {props.products.feelings.map((feeling) => {
                return <li>{feeling}</li>;
              })} */}
            </ul>
            <p>
              <span>TYPE: </span> {props.products.description}
            </p>
            <p className="details-title">
              {" "}
              <span>STRAIN DETAILS</span>{" "}
            </p>
            <p className="details">{props.products.details}</p>

            <button onClick={goToPreviousPath}>Back</button>
          </div>

          <div className="cert-container">
            <img src={cert} alt="" />
          </div>
          {/* <img src={bg} alt="" /> */}
        </div>
      </Div>
    </motion.div>
  );
};

export default ProductDetails;
