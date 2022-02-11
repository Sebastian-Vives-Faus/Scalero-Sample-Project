import React, { useState, useEffect } from "react";

// GlobalStyles
import "./App.css";

// React Router
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import the Videogames JSON
import videogames from "./json/videogames.json";
import { Home } from "./components/Pages/Home";
import { ItemView } from "./components/Detailed_View/ItemView";

// Preload our "default-database" into LocalStorage
const preloadLocalStorage = () => {
  if (!localStorage.getItem("videogames")) {
    // Saving our array as a string
    localStorage.setItem("videogames", JSON.stringify(videogames));
    console.log("Local Storage has been pre-loaded!");
  }
};

// Function to obtain list from localStorage and store it in State
const loadLocalStorage = () => {
  // Parse string into array
  const list = JSON.parse(localStorage.getItem("videogames"));
  if (!list) {
    return [];
  } else {
    return list;
  }
};

function App() {
  // Preload our "default-database" into LocalStorage
  preloadLocalStorage();

  // State
  const [videogames, setVideogames] = useState(loadLocalStorage);

  // Function to update the localStorage
  const updateLocalStorage = (videogame, index) => {
    // Update the State
    const temp = [...videogames];
    temp[index] = videogame;
    setVideogames(temp);

    // Update the LocalStorage
    localStorage.setItem("videogames", JSON.stringify(videogames));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Home
              updateLocalStorage={updateLocalStorage}
              videogames={videogames}
            />
          }
        />
        <Route
          path="/:slugname"
          element={
            <ItemView
              videogames={videogames}
              updateLocalStorage={updateLocalStorage}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
