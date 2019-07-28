import React from "react";
import styled from "styled-components";
import logo from "../../material/info.png";

const FootBarWrapper = styled.div`
  padding: 15px 0px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const LeftWrapper = styled.div`
  display: flex;
`;
const Img = styled.img`
  width: 40px;
  height: 40px;
  border: 2px solid black;
  border-radius: 50%;
`;
const Info = styled.div`
  margin: 0px 10px;
  display: flex;
`;
const InfoTag = styled.p`
  margin-right: 7px;
  padding: 10px 0px;
`;
const InfoSpan = styled.span`
  padding: 10px 0px;
`;
const Button = styled.button`
  margin: 0px 5px;
  color: #ffffff;
  font-weight: bold;
  background-color: #222222;
  border-radius: 100px;
  padding: 10px 30px;
  :hover {
    background-color: #ffb53e;
  }
`;
export default class extends React.Component {
  render() {
    return (
      <FootBarWrapper>
        <LeftWrapper>
          <Img src={logo} />
          <Info>
            <InfoTag>TIME:</InfoTag>
            <InfoSpan>00:00</InfoSpan>
          </Info>
          <Info>
            <InfoTag>SCORE:</InfoTag>
            <InfoSpan>0</InfoSpan>
          </Info>
        </LeftWrapper>
        <div>
          <Button>NEW GAME</Button>
          <Button>RESTART</Button>
          <Button>HINT</Button>
          <Button>UNDO</Button>
        </div>
      </FootBarWrapper>
    );
  }
}
