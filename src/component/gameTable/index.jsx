import React from "react";
import styled from "styled-components";
import kingImg from "../../material/king_happy.png";
import tempImg from "../../material/cards_background/C1.png";
import tempImg2 from "../../material/cards_background/C13.png";
import NestedSeriesCard from "../card/seriesCards.jsx";
import cells from "../questionLib/questions";

const UpperArea = styled.div`
  display: flex;
  justify-content: space-around;
`;
const TempArea = styled.div`
  display: flex;
  testesjustify-content: center;
`;
const TempBox = styled.div`
  position: relative;
  //   width: 20%;
  //   height: 98%;
  width: 101.75px;
  height: 154.25px;
  margin: 0px 5px;
  flex: 0 1 auto;
  border: 3px solid black;
  border-radius: 7px;
`;
const MainAreaBox = styled.div`
  position: absolute;
  top: 20px;
  //   width: 20%;
  //   height: 98%;
  width: 99.75px;
  height: 152.25px;
  margin: 0px 5px;
  flex: 0 1 auto;
  border: 1px solid black;
  border-radius: 5px;
  background-image: url(${tempImg2});
  background-size: contain;
  background-repeat: no-repeat;
`;
const ImgTemp = styled.img`
  //   position: absolute;
  //   top: 0px;
  //   left: 0px;
  width: 100%;
  object-fit: cover;
`;
const ImgWrapper = styled.div`
  width: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ImgLogo = styled.img`
  width: 70%;
`;
const CollectArea = styled.div`
  display: flex;
  justify-content: center;
`;
const MainArea = styled.div`
  margin: 20px 0px;
  height: 55vh;
  min-height: 340px;
  display: flex;
  justify-content: center;
`;
const Main = styled.div`
  width: 101.75px;
  height: 154.25px;
  margin: 0px 10px;
  border: 3px solid black;
  border-radius: 7px;
  //transform: translate(0, 0);
`;
let draggedTarget;
const initialState = {
  temp: [null, null, null, null],
  collect: [[], [], [], []],
  main: cells,
};
export default class extends React.Component {
  hDragStart = e => {
    console.log(e.target);
    draggedTarget = e.target;
  };
  hDragOver = e => {
    e.preventDefault();
  };
  hDrop = e => {
    e.preventDefault();
    e.stopPropagation();
    console.log(e);
    //e.cancelBubble = true;
    console.log(e.target);
    //draggedTarget.style = "z-index: 12";
    e.target.appendChild(draggedTarget);
  };
  render() {
    return (
      <div>
        <UpperArea>
          <TempArea>
            <TempBox />
            <TempBox onDragOver={this.hDragOver} onDrop={this.hDrop} />
            <TempBox />
            <TempBox />
          </TempArea>
          <ImgWrapper>
            <ImgLogo src={kingImg} />
            <div>FREECELL</div>
          </ImgWrapper>
          <CollectArea>
            <TempBox />
            <TempBox />
            <TempBox />
            <TempBox />
          </CollectArea>
        </UpperArea>
        <MainArea>
          {/* <TempBox>
            <MainAreaBox draggable="true" onDragStart={this.hDragStart} />
          </TempBox> */}
          {initialState.main.map((seriesCards, columnIndex) => (
            <Main>
              <NestedSeriesCard
                key={columnIndex}
                seriesCards={seriesCards}
                columnIndex={columnIndex}
                type="main"
              />
            </Main>
          ))}
          {/* <MainAreaBox draggable="true" onDragStart={this.hDragStart} /> */}
        </MainArea>
      </div>
    );
  }
}
