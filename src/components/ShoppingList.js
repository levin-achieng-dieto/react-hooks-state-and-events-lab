import React, { useState } from "react";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const handleSelectedCategory = (e) => {
    setSelectedCategory(e.target.value)
  }

  const categoryToDisplay = items.filter((item) => {
    if(selectedCategory === "All"){
      return true;
    }
    else{
      return item.category === selectedCategory
    }
  })

  const categoryList = categoryToDisplay.map((item) => {
    return (
      <Item key={item.id} name={item.name} category={item.category} />
    )
  })


  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select name="filter" onChange={handleSelectedCategory}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {categoryList}
      </ul>
    </div>
  );
}

export default ShoppingList;
