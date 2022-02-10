import React, { useState, useEffect } from "react";

// React-Icons
import { BsGridFill, BsListOl } from "react-icons/bs";

// Components
import { TableList } from "./Table_List/TableList";

// Style
import { WrapperToggleButtons, Wrapper, ToggleButton } from "./styles";
import { CardList } from "./Card_List/CardList";

export const ItemList = (props) => {
  // State
  const [view, setView] = useState(false);

  return (
    <Wrapper>
      <WrapperToggleButtons>
        <ToggleButton
          onClick={() => {
            setView(false);
          }}
        >
          <BsListOl />
        </ToggleButton>
        <ToggleButton
          onClick={() => {
            setView(true);
          }}
        >
          <BsGridFill />
        </ToggleButton>
      </WrapperToggleButtons>
      {view ? (
        <CardList
          videogames={props.videogames}
          updateLocalStorage={props.updateLocalStorage}
        />
      ) : (
        <TableList
          videogames={props.videogames}
          updateLocalStorage={props.updateLocalStorage}
        />
      )}
    </Wrapper>
  );
};
