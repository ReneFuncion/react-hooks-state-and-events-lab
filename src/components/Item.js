import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCart() {
    setIsInCart(!isInCart);
  }

  const className = isInCart ? "in-cart" : "";
  const buttonText = isInCart ? "Remove from Cart" : "Add to Cart";

  return (
    <li className={className}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleAddToCart}>
        {buttonText}
      </button>
    </li>
  );
}

export default Item;
