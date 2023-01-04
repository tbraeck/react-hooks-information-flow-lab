import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import Header from "./Header";
import itemData from "../data/items";

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [selectedItem, setSelectedItem] = useState({});

  function handleDarkModeClick() {
    // console.log('heyyyy')
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  const handleSelectedItem = (myItem) => {
    setSelectedItem(myItem)
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header isDarkMode={isDarkMode} handleDarkModeClick={handleDarkModeClick} />
      <ShoppingList handleSelectedItem={handleSelectedItem} items={itemData} />
      {/* <Filter /> */}
    </div>
  );

}


export default App;
