import React, { useState } from "react";

function Item({ name, category }) {

  const [inCert, setInCert] = useState(false)
  function handleClick(){
    setInCert((inCert) => !inCert)
  }
  return (
    <li className={inCert ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCert ? "remove": "add"} onClick={handleClick}>
        {inCert ? "Remove From" : "Add To"}
      </button>
    </li>
  );
}

export default Item;
