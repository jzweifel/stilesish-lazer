import React, { Component } from "react";
import styled from "styled-components";
import FaceContainer from "./components/FaceContainer";

const AppDiv = styled.div`
  text-align: center;
  background-color: #282c34;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

class App extends Component {
  render() {
    return (
      <AppDiv>
        <FaceContainer />
      </AppDiv>
    );
  }
}

export default App;
