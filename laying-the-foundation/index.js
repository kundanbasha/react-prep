import React from "react";
import ReactDOM from "react-dom/client";

const footerReactElement = React.createElement(
  "h1",
  {},
  "Footer react element"
);
const bodyJSX = <h1>Body using JSX</h1>;

// React functional component using jsx
const HeadingComponent = () => {
  return <h1>Namaste react with functional component</h1>;
};

//React functional component using react element
const FooterComponent = () => footerReactElement;

//React functional component using jsx
const BodyComponent = () => bodyJSX;

//Component inside component or component composition
const LayoutComponent = () => {
  return (
    <div>
      <HeadingComponent />
      {BodyComponent()}
      <BodyComponent />
      <FooterComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<LayoutComponent />);
