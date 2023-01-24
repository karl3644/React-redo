import React from "react";
import ReactDOM from "react-dom";

const App = () => {
  return <div>fresh App</div>;
};

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
root.render(<App />);
