import './App.sass';
import AbandonedConstruction from "../../assets/illustrations/dall-e/abandoned-construction-cropped.png";
import CollapseLogo from "../../assets/collapse-bad-grunge-font.png";
import React from "react";
import Player from '../Player/Player';

function App() {
  const [image, setImage] = React.useState(AbandonedConstruction);

  return (
    <main className="interface">
        {/* <CollapseLogo /> */}
        
        <Player />
    
        <section className="right-side">
            <div className="place">
                <img className="place-image" src={AbandonedConstruction}/>
                <p>You are now at Abandoned Construction.</p>
            </div>

            <div className="actions">
                <a href="#">Search Location</a>
                <a href="#">Continue Exploring</a>
            </div>

            {/* <div className="searched">
                <p>You found:</p>
                <span>(3) Water [<a href="#">TAKE</a>] [<a href="#">USE</a>]</span>
                <span>(1) Honey [<a href="#">TAKE</a>] [<a href="#">USE</a>]</span>
                <span>(2) Bread [<a href="#">TAKE</a>] [<a href="#">USE</a>]</span>
                <span>(2) Tool [<a href="#">TAKE</a>] </span>
            </div> */}
        </section>
    </main>
  );
}

export default App;
