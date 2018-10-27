import React, { Component } from "react";
import styled, { keyframes } from "styled-components";
import stiles from "../stiles.png";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const RotatingImage = styled.img`
  animation: ${spin} infinite 20s linear;
  height: 40vmin;
`;

class RotatingFace extends Component {
  state = {};
  render() {
    return <RotatingImage src={stiles} alt="logo" />;
  }
}

export default RotatingFace;
