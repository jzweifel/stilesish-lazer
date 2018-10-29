import React, { Component } from "react";
import styled, { keyframes } from "styled-components";

const fly = (angle, target) => keyframes`
  from { transform: translate(-50%, -50%) rotate(${angle}deg) }
  to { transform: translate(${target.x}px, ${target.y}px) rotate(${angle}deg) }
`;

const LaserDiv = styled.div`
  background-color: pink;
  border-radius: 15px;
  width: 45px;
  height: 15px;
  transform: rotate(${props => props.angle || 0}deg);
  top: 50%;
  left: 50%;
  position: absolute;
  animation: ${props => fly(props.angle || 0, props.target || {x: 0, y: 0})} linear 2s;
`;

class Laser extends Component {
  state = {};
  render() {
    return <LaserDiv angle={this.props.angle} target={this.props.target} />;
  }
}

export default Laser;
