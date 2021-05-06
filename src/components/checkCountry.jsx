import React, { useState } from "react";
import styled from "styled-components";
import icon from "../assets/dropDownIcon.png";
let Prompt = styled.div`
  background-color: #120033;
  width: 100vw;
  height: 100vh;
  color: white;
  position: fixed;
  z-index: 105;
  position: relative;
  overflow-x: hidden;
  box-sizing: border-box;

  .inner {
    background-color: #1d0054;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 60px 80px;
    width: 400px;
    box-shadow: 0px 0px 100px -40px #000000;
    h1 {
      color: #d3851d;
      font-size: 16px;
    }

    .dropwDownContainer {
      background-color: #120033;
      margin-top: 23px;
      width: 100%;
      position: relative;

      p:nth-child(1) {
        font-size: 10px;
        color: #d8d8d8;
      }

      .container {
        padding: 10px 10px 5px 10px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        box-sizing: border-box;
      }

      .icon-container {
        width: 20px;
        img {
          width: 100%;
        }
      }

      .country-choice {
        width: 100%;
        background-color: #120033;
        position: absolute;
        transform: translateY(0px);
        padding: 10px;
        box-sizing: border-box;

        p {
          font-size: 16px;
          font-weight: 500;
        }

        ul {
          padding: 0px;
          li {
            list-style-type: none;
            font-weight: 300;
            cursor: pointer;
            padding-left: 10px;

            &:hover {
              background-color: #d3851d;
            }
          }
        }
      }
    }

    .atleast-21 {
      color: #d3851d;
      font-size: 16px;
      font-weight: 400;
      margin-top: 20px;
      .buttons {
        display: flex;
        justify-content: space-between;
        margin-top: 20px;
        button {
          background-color: #ffa302;
          border: none;
          width: 150px;
          padding: 10px 0px;
          font-weight: 500;
          font-size: 16px;
        }
      }
    }
  }
`;
let CheckCountry = (props) => {
  let [country, setCountry] = useState("United States");
  let [countryChoiceVisible, setCountryChoiceVisibility] = useState(false);

  return (
    <Prompt>
      <div
        className="inner"
        onClick={() => {
          if (countryChoiceVisible) {
            setCountryChoiceVisibility(!countryChoiceVisible);
          }
        }}
      >
        <h1>Welcome to Wizard Cart.</h1>
        <h1>Thanks For stopping by.</h1>

        <div
          className="dropwDownContainer"
          onClick={() => setCountryChoiceVisibility(!countryChoiceVisible)}
        >
          <div className="container">
            <div className="texts">
              <p>Where are you from?</p>
              <p>{country}</p>
            </div>

            <div className="icon-container">
              <img src={icon} alt="" />
            </div>
          </div>

          {countryChoiceVisible && (
            <div className="country-choice">
              <p>Countries</p>
              <ul>
                <li onClick={() => setCountry("United States")}>
                  United States
                </li>
                <li onClick={() => setCountry("Canada")}>Canada</li>
              </ul>
            </div>
          )}
        </div>

        <div className="atleast-21">
          <p>Are you atleast 21?</p>

          <div className="buttons">
            <button
              onClick={() => {
                props.setVisited(true);
              }}
            >
              yes
            </button>
            <button
              onClick={() => {
                window.location.href = "https://pbskids.org/";
              }}
            >
              no
            </button>
          </div>
        </div>
      </div>
    </Prompt>
  );
};

export default CheckCountry;
