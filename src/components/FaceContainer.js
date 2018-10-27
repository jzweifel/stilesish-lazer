import React, { Component } from "react";
import styled from "styled-components";
import RotatingFace from "./RotatingFace";

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
    this.handleMouseMove = this.handleMouseMove.bind(this);
  }

  handleMouseMove = (e) => {
      const {offsetX, offsetY} = e.nativeEvent;
    this.setState({ mouse: { x: offsetX, y: offsetY } });
  };

  render() {
    const { x, y } = this.state.mouse;
    return (
      <FaceDiv onMouseMove={this.handleMouseMove}>
        <p>
          mouse: ({x}, {y})
        </p>
        <RotatingFace />
      </FaceDiv>
    );
  }
}

export default FaceContainer;
