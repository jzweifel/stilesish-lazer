import React, { Component } from "react";
import styled from "styled-components";
import stiles from "../stiles.png";

const RotatingImage = styled.img`
  height: 40vmin;
  transform: rotate(${props => props.angle || 0}deg);
`;

class RotatingFace extends Component {
  constructor(props) {
    super(props);
    this.myRef = React.createRef();

    this.getCenter = this.getCenter.bind(this);
    this.getAngle = this.getAngle.bind(this);
  }

  getCenter = () => {
    if (this.myRef.current) {
      const { offsetLeft, offsetTop, width, height } = this.myRef.current;
      const center = {
        x: offsetLeft + width / 2,
        y: offsetTop + height / 2
      };

      return center;
    }
    return { x: 0, y: 0 };
  };

  getAngle = () => {
    const { mouseX, mouseY } = this.props;
    const { x, y } = this.getCenter();
    const angle = Math.atan2(mouseY - y, mouseX - x) * (180 / Math.PI);
    return angle;
  };

  render() {
    return (
      <RotatingImage ref={this.myRef} src={stiles} angle={this.getAngle} />
    );
  }
}

export default RotatingFace;
