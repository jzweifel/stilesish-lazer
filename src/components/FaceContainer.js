import React, { Component } from "react";
import styled from "styled-components";
import RotatingFace from "./RotatingFace";
import Laser from "./Laser";

const FaceDiv = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class FaceContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mouse: {
        x: 0,
        y: 0
      }
    };
    this.myRef = React.createRef();

    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.getCenter = this.getCenter.bind(this);
    this.getAngle = this.getAngle.bind(this);
    this.getNewPosition = this.getNewPosition.bind(this);
  }

  getCenter = () => {
    if (this.myRef.current) {
      const {
        offsetLeft,
        offsetTop,
        offsetWidth,
        offsetHeight
      } = this.myRef.current;
      const center = {
        x: offsetLeft + offsetWidth / 2,
        y: offsetTop + offsetHeight / 2
      };
      return center;
    }
    return { x: 0, y: 0 };
  };

  getNewPosition = () => {
    const { x, y } = this.getCenter();

    return { x: this.state.mouse.x - x, y: this.state.mouse.y - y };
  };

  getAngle = () => {
    const mouseX = this.state.mouse.x;
    const mouseY = this.state.mouse.y;
    const { x, y } = this.getCenter();
    const angle = Math.atan2(mouseY - y, mouseX - x) * (180 / Math.PI);
    return angle;
  };

  handleMouseMove = e => {
    const { offsetX, offsetY } = e.nativeEvent;
    this.setState({ mouse: { x: offsetX, y: offsetY } });
  };

  render() {
    return (
      <FaceDiv
        ref={this.myRef}
        onMouseMove={this.handleMouseMove}
        onClick={this.handleMouseMove}
      >
        <Laser angle={this.getAngle()} target={this.getNewPosition()} />
        <RotatingFace angle={this.getAngle()} />
      </FaceDiv>
    );
  }
}

export default FaceContainer;
