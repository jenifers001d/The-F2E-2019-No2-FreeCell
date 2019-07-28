import React from "react";
import styled from "styled-components";
import Card from "./card.jsx";

const SeriesCardsBox = styled.div`
  width: 101.75px;
  height: 154.25px;
  position: relative;
  top: -3px;
  left: -3px;
`;
const RelatedDiv = styled.div`
  position: relative;
`;
let draggedTarget;
// <TestNested nestedCards={accNestedCards} newCard={currNewCard} />
// 直接被 「<Card {...newCard} /> {nestedCards}」 替換掉
// const reducer = (accNestedCards, currNewCard) => (
//   <TestNested nestedCards={accNestedCards} newCard={currNewCard} />
// );
// reduce 中，如果「累計項目 acc」是物件，記得加 initValue = {}
const initValue = null;
export default class extends React.Component {
  hDragOver = e => {
    e.preventDefault();
  };
  hDrop = e => {
    e.preventDefault();
    //e.stopPropagation();
    console.log(e);
    //e.cancelBubble = true;
    console.log(e.target);
    //draggedTarget.style = "z-index: 12";
    e.target.appendChild(draggedTarget);
  };
  render() {
    const { seriesCards } = this.props;
    const length = seriesCards.length;
    return (
      // SeriesCardsBox 是我放置卡片的區域，不能被拖拖曳，可以放置
      <SeriesCardsBox onDragOver={this.hDragOver} onDrop={this.hDrop}>
        {seriesCards.reverse().reduce(
          (accNestedCards, currNewCard, index) => (
            <RelatedDiv
              id={length - index + "pieces"}
              style={index !== length - 1 ? { top: "30px", left: "0px" } : null}
            >
              <Card {...currNewCard} />
              {accNestedCards}
            </RelatedDiv>
          ),
          initValue
        )}
      </SeriesCardsBox>
    );
  }
}
