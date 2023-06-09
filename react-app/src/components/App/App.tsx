import "./App.sass";
import Player from "../Player/Player";
import Location from "../Location/Location";
import Logo from "../Logo/Logo";
import Interface from "../Interface/Interface";

function App() {
  return (
    <>
      <Logo />
      <Interface>
        <Player />
        <Location />
      </Interface>
    </>
  );
}

export default App;
