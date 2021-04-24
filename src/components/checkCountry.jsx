import React, { useState } from "react";
import styled from "styled-components";

let Prompt = styled.div`
  background-color: #120033;
  width: 100vw;
  height: 100vh;
  color: white;
  position: fixed;
  z-index: 105;
  position: relative;
  .inner {
    background-color: #1d0054;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 80px;
    h1 {
      color: #d3851d;
      font-size: 16px;
    }
  }
`;
let CheckCountry = () => {
  let [country, setCountry] = useState("United States");

  return (
    <Prompt>
      <div className="inner">
        <h1>Welcome to Wizard Cart.</h1>
        <h1>Thanks For stopping by.</h1>
        <div className="dropwDownContainer">
          <p>Where are you from?</p>
          <p>{country}</p>
        </div>
      </div>
    </Prompt>
  );
};

export default CheckCountry;
