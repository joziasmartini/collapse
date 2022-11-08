import "./App.sass";
// import CollapseLogo from "../../assets/collapse-bad-grunge-font.png";
import React from "react";
import Player from "../Player/Player";
import Location from "../Location/Location";

function App() {
  return (
    <main className="interface">
      {/* <CollapseLogo /> */}
      <Player />
      <Location />
    </main>
  );
}

export default App;
