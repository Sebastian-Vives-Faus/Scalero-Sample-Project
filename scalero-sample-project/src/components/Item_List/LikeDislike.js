import React, { useState } from "react";

// React-Icons
import {
  BsFillHandThumbsDownFill,
  BsFillHandThumbsUpFill,
} from "react-icons/bs";
import { LikeDislikeDiv, LikeDislikeIcon, LikeDislikeWrapper } from "./styles";

export const LikeDislike = (props) => {
  // Handler to increase either like or dislike based on the button that was clicked.
  const clickHandler = (vote) => {
    if (vote) {
      // Like
      props.videogame.likes++;
    } else {
      // Dislike
      props.videogame.dislikes++;
    }

    // Send the updated object over at ItemList
    props.updateLocalStorage(props.videogame, props.index);
  };

  return (
    <LikeDislikeWrapper>
      <LikeDislikeDiv>
        <LikeDislikeIcon>
          <BsFillHandThumbsUpFill
            onClick={() => clickHandler(true)}
            size="20px"
          />
        </LikeDislikeIcon>
        {props.videogame.likes}
      </LikeDislikeDiv>
      <LikeDislikeDiv>
        {props.videogame.dislikes}
        <LikeDislikeIcon>
          <BsFillHandThumbsDownFill
            onClick={() => clickHandler(false)}
            size="20px"
          />
        </LikeDislikeIcon>
      </LikeDislikeDiv>
    </LikeDislikeWrapper>
  );
};
