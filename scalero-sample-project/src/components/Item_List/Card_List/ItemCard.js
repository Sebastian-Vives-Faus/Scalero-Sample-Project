import React from "react";
import { LikeDislike } from "../LikeDislike";
import { CardContainer, Card } from "../styles";

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
          >
            <p>{props.videogame.name}</p>
          </Link>
          <p>Year</p>
        </Card>
      </CardContainer>
    </div>
  );
};
