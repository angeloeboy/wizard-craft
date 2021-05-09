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
        z-index: 10;

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

    @media (max-width: 700px) {
      width: 60%;
      padding: 30px 40px;
    }

    @media (max-width: 400px) {
      margin-top: 30px;

      .atleast-21 {
        .buttons {
          button {
            padding: 5px 0px;
            font-size: 12px;
            width: 120px;
          }
        }
      }
    }
  }
`;
let CheckCountry = (props) => {
  let [country, setCountry] = useState("United States");
  let [countryChoiceVisible, setCountryChoiceVisibility] = useState(false);
  let [canadaCountriesVisible, setCanadaCountryVisibility] = useState(false);
  let [canadaState, setCanadaState] = useState("Select a region");

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

        {country === "Canada" ? (
          <div
            className="dropwDownContainer"
            onClick={() => setCanadaCountryVisibility(!canadaCountriesVisible)}
          >
            <div className="container">
              <div className="texts">
                <p>Which part of Canada?</p>
                <p>{canadaState}</p>
              </div>

              <div className="icon-container">
                <img src={icon} alt="" />
              </div>
            </div>

            {canadaCountriesVisible && (
              <div className="country-choice">
                <p>Countries</p>
                <ul>
                  <li onClick={() => setCanadaState("Select a region")}>
                    Select a region
                  </li>
                  <li onClick={() => setCanadaState("Alberta")}>Alberta</li>
                  <li onClick={() => setCanadaState("British Columbia")}>
                    British Columbia
                  </li>

                  <li onClick={() => setCanadaState("Manitoba")}>Manitoba</li>
                  <li onClick={() => setCanadaState("New Brunswick")}>
                    New Brunswick
                  </li>
                  <li onClick={() => setCanadaState("Newdoundland & Labrador")}>
                    Newdoundland & Labrador
                  </li>
                  <li onClick={() => setCanadaState("Northwest Territories ")}>
                    Northwest Territories
                  </li>
                  <li onClick={() => setCanadaState("Nova Scotia")}>
                    Nova Scotia
                  </li>
                  <li onClick={() => setCanadaState("Nunavut")}>Nunavut</li>
                  <li onClick={() => setCanadaState("Ontario")}>Ontario</li>
                  <li onClick={() => setCanadaState("Prince Edward Island")}>
                    Prince Edward Island
                  </li>
                  <li onClick={() => setCanadaState("Quebec")}>Quebec</li>
                  <li onClick={() => setCanadaState("Saskatchewan")}>
                    Saskatchewan
                  </li>
                  <li onClick={() => setCanadaState("Yukon")}>Yukon</li>
                </ul>
              </div>
            )}
          </div>
        ) : null}

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
