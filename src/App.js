import React from "react";
import "./App.css";
import Image from "./Components/Image.js";
import styled from "styled-components";

const AppStyle = styled.div`
  text-align: center;
  background-repeat: no-repeat;
  background-size: 100%;
  max-width: 100%;
  margin: 0 auto;
`;

function App() {
  return (
    <AppStyle>
      <Image />
    </AppStyle>
  );
}

export default App;
