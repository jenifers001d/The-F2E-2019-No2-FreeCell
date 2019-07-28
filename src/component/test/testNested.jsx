import React from "react";
import styled from "styled-components";

import Card from "../card/card.jsx";
import urlImg from "../../material/cards_background/S2.png";

export default class extends React.Component {
  render() {
    const { nestedCards, newCard } = this.props;
    return (
      <div>
        <Card {...newCard} />
        {nestedCards}
      </div>
    );
  }
}
