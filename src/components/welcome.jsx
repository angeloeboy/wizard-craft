import React from "react";
import { styled } from "styled-components";

const Div = styled.div`
  background-color: #1c004f;
`;

let Welcome = () => {
  return (
    <Div>
      <h1>Welcome to Wizard Cart. Thanks for stopping by.</h1>
    </Div>
  );
};

export default Welcome;
