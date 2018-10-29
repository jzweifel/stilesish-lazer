import React from "react";
import styled from "styled-components";
import stiles from "../stiles.png";

const RotatingImage = styled.img`
  height: 40vmin;
  transform: rotate(${props => props.angle || 0}deg);
`;

const RotatingFace = ({angle}) => (
  <RotatingImage src={stiles} angle={angle} />
);

export default RotatingFace;
