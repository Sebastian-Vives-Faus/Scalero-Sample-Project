import React, { useEffect, useState } from "react";

import "../../App.css";

// React Router
import { useParams } from "react-router-dom";

// Styles
import { Divider } from "../../UI/GlobalStyle";
import { LikeDislike } from "../Item_List/LikeDislike";

// Slugify
import { slugify } from "../../functions/slugify";
import { ReviewCard } from "./ReviewCard";
import {
  CardWrapper,
  FlexSpacedBetween,
  ReviewCharacter_ButtonWrapper,
  TextWrapper,
} from "./UI/style";
import { Button } from "../../UI/GlobalStyle.js";
import { ReviewInput } from "./ReviewInput";

// Function to filter correct videogame based of the slug and the array of videogames
const filterVideogame = (videogames, slug) => {
  //console.log(videogames.findIndex(videogames.filter(videogame => slugify(videogame.name) === slug)[0]));
  return videogames.filter((videogame) => slugify(videogame.name) === slug)[0];
};

export const ItemView = (props) => {
  // Reading the slug of the URL
  let params = useParams();

  //State
  const [videogame, setVideogame] = useState(
    filterVideogame(props.videogames, params.slugname)
  );
  const [index, setIndex] = useState(
    props.videogames.findIndex((obj) => {
      return slugify(obj.name) === params.slugname;
    })
  );

  const [view, setView] = useState(true);

  // Function to render dynamically the videogame's review
  const review_items = videogame.reviews.map((review, index) => {
    return <ReviewCard review={review} key={index} />;
  });

  return (
    <div className="App">
      <h1>{videogame.name}</h1>
      <Divider />
      <TextWrapper>
        <p>{videogame.description}</p>
      </TextWrapper>
      <Divider />
      <FlexSpacedBetween style={{ margin: "10px 10% 0px 10%" }}>
        <Button onClick={() => setView(!view)}>Write your own...</Button>
        <LikeDislike
          videogame={videogame}
          index={index}
          updateLocalStorage={props.updateLocalStorage}
        />
      </FlexSpacedBetween>
      {view ? null : (
        <ReviewInput
          updateLocalStorage={props.updateLocalStorage}
          videogame={videogame}
          setView={setView}
        />
      )}
      <CardWrapper>{review_items}</CardWrapper>
    </div>
  );
};
