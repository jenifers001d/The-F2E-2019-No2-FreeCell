import React from "react";
import styled from "styled-components";
import GameTable from "./component/gameTable/index.jsx";
import FootBar from "./component/footBar/index.jsx";
import "./App.css";

const Wrapper = styled.div`
  width: 100%;
  min-width: 800px;
`;

class App extends React.Component {
  render() {
    return (
      <Wrapper>
        <GameTable />
        <hr />
        <FootBar />
      </Wrapper>
    );
  }
}

export default App;
