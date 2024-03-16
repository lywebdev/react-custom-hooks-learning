import React from "react";
import NegativeCounter from "./components/NegativeCounter";
import PositiveCounter from "./components/PositiveCounter";

function App() {
  return (
    <React.Fragment>
      <PositiveCounter />
      <NegativeCounter />
    </React.Fragment>
  );
}

export default App;
