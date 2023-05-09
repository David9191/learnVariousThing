import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import { App, ShoppingList } from "./App";
import Board from "./TicTacToe";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    {/* <App />
    <ShoppingList /> */}
    <Board />
  </React.StrictMode>
);

reportWebVitals();