import React from "react";
import { ItemCard } from "./ItemCard";
import { CardListWrapper } from "../styles";

export const CardList = (props) => {
  const card_items = props.videogames.map((videogame, index) => {
    return <ItemCard videogame={videogame} key={index} />;
  });

  return (<CardListWrapper>{card_items}</CardListWrapper>);
};
