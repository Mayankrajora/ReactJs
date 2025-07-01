import React from "react";
import ReactDOM from "react-dom/client";

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h2",
      {},
      "Nested parents and child div in react using React.createElement()"
    ),
    React.createElement(
      "h3",
      {},
      "Nested p and child with 2nd tag sibling div in react using React.createEle()"
    )
  )
);

console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
