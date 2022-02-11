import React from "react";
import { LikeDislike } from "../LikeDislike";
import { CardContainer, Card, CardTitle } from "../styles";
import { Divider } from "../../../UI/GlobalStyle";

// React Router
import { Link } from "react-router-dom";

// External Functions
import { slugify } from "../../../functions/slugify";

export const ItemCard = (props) => {
  return (
    <div>
      <CardContainer>
        <Card>
          <Link
            to={slugify(props.videogame.name)}
            key={props.videogame.name}
            style={{ textDecoration: "none", color: "white" }}
          >
            <CardTitle>{props.videogame.name}</CardTitle>
          </Link>
          <Divider/>
          <LikeDislike
            videogame={props.videogame}
            index={props.index}
            updateLocalStorage={props.updateLocalStorage}
          />
        </Card>
      </CardContainer>
    </div>
  );
};
