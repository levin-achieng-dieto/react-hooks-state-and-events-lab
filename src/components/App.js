import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
// import "./src/index.css"; 
// import styled, { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme} from "./themes"


function App() {
  const [theme, setTheme] = useState()

  const themeToggler = () => {
    setTheme(appClass ? lightTheme : darkTheme)
    console.log(theme)
    }
// console.log(themeToggler);
  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
   const appClass = false ? "App dark" : "App light"

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick = {themeToggler}>{false ? "Dark mode" : "Light Mode"}</button>
      </header>
      <ShoppingList items={itemData} theme={theme === "false" ? lightTheme : darkTheme}></ShoppingList>
    </div>
  );
}

export default App;
