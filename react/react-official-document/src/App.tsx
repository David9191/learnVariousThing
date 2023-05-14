import React, { useState } from "react";
import "./App.css";
import TestProps from "./JSX/TestProps";

const App = () => {
  return <TestProps person={{ name: "Ji", age: 24 }} size={185} />;
};

const products = [
  { title: "Cabbage", isFruit: false, id: 1 },
  { title: "Garlic", isFruit: false, id: 2 },
  { title: "Apple", isFruit: true, id: 3 },
];

const ShoppingList = () => {
  const listItems = products.map(product => (
    <li
      key={product.id}
      style={{
        color: product.isFruit ? "magenta" : "darkgreen",
      }}
    >
      {product.title}
    </li>
  ));

  return <ul>{listItems}</ul>;
};

export { App, ShoppingList };
