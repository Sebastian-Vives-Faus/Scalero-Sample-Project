import React from "react";
import { LikeDislike } from "../LikeDislike";

// React Router
import { Link } from "react-router-dom";

// External Functions
import { slugify } from "../../../functions/slugify";
import { TableContent, TableHeader, TableRow } from "./style";

export const TableList = (props) => {
  // Sort videogames by popularity
  props.videogames.sort((a, b) => {
    return b.likes - b.dislikes - (a.likes - a.dislikes);
  });

  // Map the videogame list into table rows
  const videogame_table = props.videogames.map((videogame, index) => {
    return (
      <TableRow key={index}>
        <Link
          to={slugify(videogame.name)}
          key={videogame.name}
          style={{textDecoration: 'none', color: 'white'}}
        >
          <td>{videogame.name}</td>
        </Link>
        <td>{videogame.year}</td>
        <td>
          <LikeDislike
            videogame={videogame}
            index={index}
            updateLocalStorage={props.updateLocalStorage}
          />
        </td>
      </TableRow>
    );
  });

  return (
    <table style={{borderCollapse: "collapse"}}>
      <TableHeader>
        <tr>
          <td>Name</td>
          <td>Year</td>
          <td>Likes/Dislikes</td>
        </tr>
      </TableHeader>
      <tbody>{videogame_table}</tbody>
    </table>
  );
};
