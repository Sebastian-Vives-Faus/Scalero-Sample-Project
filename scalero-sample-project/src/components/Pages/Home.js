// GlobalStyles
import { TitleWrapper, AppHeader, Divider, TitleSpan } from "../../UI/GlobalStyle";

// React Router
import { Link } from "react-router-dom";

// Components
import { ItemList } from "../Item_List/ItemList";

export const Home = (props) => {
  return (
    <div className="App">
      <AppHeader>
        <TitleWrapper>
          <h1>
            Internet Choice Awards: <TitleSpan>Videogames</TitleSpan>
          </h1>
        </TitleWrapper>
        <Divider />
        <ItemList
          updateLocalStorage={props.updateLocalStorage}
          videogames={props.videogames}
        />
      </AppHeader>
      {/* <button onClick={() => {localStorage.setItem("videogames", '')}}>Reset</button> */}
    </div>
  );
};
