import React from "react";
import styled from "styled-components";

const TempBox = styled.div`
  position: absolute;
  width: 101.75px;
  height: 154.25px;
  flex: 0 1 auto;
  border: 1px solid grey;
  border-radius: 5px;
  background-size: contain;
  background-repeat: no-repeat;
`;
const StyledImg = styled.img`
  width: 99.75px;
  height: 152.25px;
  objet-fit: cover;
`;
export default function(props) {
  const { suit, num } = props;
  const urlImg = "../../material/cards_background/";
  const urlCard = suit.slice(0, 1).toUpperCase() + num;
  const myUrl = urlImg + urlCard + ".png";
  const mymyUrl = `../../material/cards_background/${urlCard}.png`;
  const style = {
    backgroundImage: `url(${require("../../material/cards_background/" +
      urlCard +
      ".png")})`,
  };
  console.log(urlCard);
  return (
    <TempBox>
      <StyledImg
        src={require(`${"../../material/cards_background/"}${urlCard}.png`)}
      />
    </TempBox>
  );
}
