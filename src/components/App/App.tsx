import "./App.sass";
import CollapseLogo from "../../assets/collapse-bad-grunge-font.png";
import React from "react";
import Player from "../Player/Player";
import Location from "../Location/Location";

function App() {
  return (
    <div className="app-container">
      <img className="logo" src={CollapseLogo} alt="" />
      <main className="interface">
        <Player />
        <Location />
      </main>
    </div>
  );
}

export default App;
