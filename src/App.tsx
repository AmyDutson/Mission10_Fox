import React from "react";
import "./App.css";
import Header from "./Header";
import BowlerList from "./Bowlers/BowlerList";

function App() {
  return (
    <div className="App">
      <Header title="THE BOWLING LEAGUE" />
      <br></br>
      <BowlerList />
    </div>
  );
}

export default App;
