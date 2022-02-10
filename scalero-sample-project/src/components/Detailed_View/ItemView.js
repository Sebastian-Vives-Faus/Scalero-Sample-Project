import React, { useEffect, useState } from "react";

import "../../App.css";

// React Router
import { useParams } from "react-router-dom";

// Styles
import { Divider } from "../../UI/GlobalStyle";
import { LikeDislike } from "../Item_List/LikeDislike";

// Slugify
import { slugify } from "../../functions/slugify";

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

  return (
    <div className="App">
      <h1>{videogame.name}</h1>
      <Divider />
      <p>{videogame.description}</p>
      <p>{index}</p>
      <Divider />
      <LikeDislike videogame={videogame} index={index} updateLocalStorage={props.updateLocalStorage} />
    </div>
  );
};
