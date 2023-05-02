import React from "react";
// import { useState } from "react";

type MyButtonProps = {
  count: number;
  onClick: () => void;
};

const MyButton = ({ count, onClick }: MyButtonProps) => {
  return (
    <>
      <button onClick={onClick}>Click me</button>
      <span
        style={{
          marginLeft: "1rem",
        }}
      >
        Clicked {count} times
      </span>
    </>
  );
};

export default MyButton;
