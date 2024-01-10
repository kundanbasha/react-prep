/*
<div id="parent">
  <div id="child">
    <h1>Im an h1 tag</h1>
    <h2>Im an h2 tag</h2>
  </div>
  <div id="child2">
    <h1>Im an h1 tag</h1>
    <h2>Im an h2 tag</h2>
  </div>
</div>
*/

const headingElement = React.createElement(
  "div",
  { id: "parent", xyz: "abc" }, //attributes
  [
    React.createElement("div", { id: "child" }, [
      React.createElement("h1", {}, "Im an h1 tag"),
      React.createElement("h2", {}, "Im an h2 tag"),
    ]),
    React.createElement("div", { id: "child2" }, [
      React.createElement("h1", {}, "Im an h1 tag"),
      React.createElement("h2", {}, "Im an h2 tag"),
    ]),
  ]
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(headingElement);
