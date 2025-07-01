// const heading = React.createElement("h2", {className: "headingH1", xyz: "abc"}, "Hello from React"); // takes 3 arguments, element(name), attributes, value
// const para = React.createElement("p", {id: "paraP1"}, "Paragraph, hello from paragraph------");
// const container = React.createElement("div", {}, heading, para);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// // console.log(root) // return object
// root.render(container);

/*
<div id="parent">
    <div id="child">
        <h3>Nested parents and child div in react using React.createElement()</h3>
        <h2></h2>
    </div>
</div>
*/
// THERE ARE TWO WAYS FOR THIS _-_-_-_-_-_-_

// const h3 = React.createElement(
//   "h3",
//   {},
//   "Nested parents and child div in react using React.createElement()"
// );

// const newDiv = React.createElement("div", { id: "child" }, h3);
// const parent = React.createElement("div", { id: "parent" }, newDiv);

// console.log(parent);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

const parent = React.createElement(
  "div",
  { id: "parent" },
  React.createElement(
    "div",
    { id: "child" },
    React.createElement(
      "h3",
      {},
      "Nested parents and child div in react using React.createElement()"
    ),React.createElement(
      "h3",
      {},
      "Nested p and child with 2nd tag sibling div in react using React.createEle()"
    )
  )
);

console.log(parent)

const root = ReactDOM.createRoot(document.getElementById("root"));
// console.log(root) // return object
root.render(parent);

