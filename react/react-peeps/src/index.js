import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PostForm from "./postForm/PostForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/posts/form" element={<PostForm />}></Route>
      <Route path="/" element={<App />}></Route>
      <Route path="/posts" element={<App />}></Route>
    </Routes>
    <React.StrictMode>{/* <App /> */}</React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();