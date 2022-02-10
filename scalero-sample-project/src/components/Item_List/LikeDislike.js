import React, { useState } from "react";

// React-Icons
import {BsFillHandThumbsDownFill, BsFillHandThumbsUpFill} from 'react-icons/bs';

export const LikeDislike = (props) => {
  
  // Handler to increase either like or dislike based on the button that was clicked.
  const clickHandler = (vote) => {
    if (vote) { // Like
      props.videogame.likes++;
    } else { // Dislike
      props.videogame.dislikes++;
    }

    // Send the updated object over at ItemList
    props.updateLocalStorage(props.videogame, props.index);
  };

  return (
    <div>
      <button onClick={() => clickHandler(true)}><BsFillHandThumbsUpFill/></button>{" "}
      {props.videogame.likes} | {props.videogame.dislikes}{" "}
      <button onClick={() => clickHandler(false)}><BsFillHandThumbsDownFill/></button>
      
    </div>
  );
};
