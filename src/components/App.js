import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
// import "./src/index.css"; 
// import styled, { ThemeProvider } from "styled-components";
// import { lightTheme, darkTheme} from "./themes"


function App() {
  
// console.log(themeToggler);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
   const [appClass,  setAppClass] = useState(true)
    // "App dark" : "App light"

    const handleClick = () => {
      setAppClass(!appClass)
    }

  return (
    <div className={appClass ? "App dark" : "App light"}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick} />
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
