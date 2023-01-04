import React, { useState } from "react";

function Item({ name, category, handleSelectedItem, item }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }

  const handlePickMe = () => {
    // console.log(item)
    handleSelectedItem(item)
  }
  return (
    <li className={isInCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button
        className={isInCart ? "remove" : "add"}
        onClick={handleAddToCartClick}
      >
        {isInCart ? "Remove From" : "Add to"} Cart
      </button>
      <button onClick={handlePickMe}>
        Pick Me!
      </button>
    </li>
  );
}

export default Item;
