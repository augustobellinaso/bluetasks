import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import Counter from "./hooktests/Counter";
import CounterComposed from "./hooktests/CounterComposed";
import MouseMove from "./hooktests/MouseMove";
import Title from "./hooktests/Title";

/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

*/

ReactDOM.render(
  <React.StrictMode>
    <CounterComposed />
  </React.StrictMode>,
  document.getElementById("root")
);
