import './App.sass';
import AbandonedConstruction from "../../assets/illustrations/dall-e/abandoned-construction-cropped.png";
import CollapseLogo from "../../assets/collapse-bad-grunge-font.png";
import React from "react";

function App() {
  const [image, setImage] = React.useState(AbandonedConstruction);
  const [sleep, setHappiness] = React.useState(22);
  const [health, setHealth] = React.useState(33);
  const [hunger, setHunger] = React.useState(77);
  const [thirst, setThirst] = React.useState(55);
  const [mood, setMood] = React.useState(99);

  return (
    <main className="interface">
        {/* <CollapseLogo /> */}
        <nav className="nav">
          <section className="nav-content">
            <div className="player">
              <div className="player-avatar"></div>
              <div className="player-name">Vincent</div>
              <div className="player-exp">EXPERIENCE 3780</div>
              <br/>
              {/* <div className="player-condition">(bruised)</div> */}
            </div>

            <section className="stats">
              <div className="health">
                  <span className="info-title">Health</span>
                  <span className="info-data">{health}</span>
              </div>
              <div className="sleep">
                  <span className="info-title">Sleep</span>
                  <span className="info-data">{sleep}</span> 
              </div>
              <div className="food">
                  <span className="info-title">Food</span>
                  <span className="info-data">{hunger}</span> 
              </div>
              <div className="water">
                  <span className="info-title">Water</span>
                  <span className="info-data">{thirst}</span> 
              </div>
              <div className="water">
                  <span className="info-title">Mood</span>
                  <span className="info-data">{mood}</span> 
              </div>
            </section>

            <br/>
            <section className="environment">
              <div className="health">
                  <span className="info-title">Light</span>
                  <span className="info-data">High</span>
              </div>
              <div className="health">
                  <span className="info-title">Heat</span>
                  <span className="info-data">Low</span>
              </div>
              <div className="health">
                  <span className="info-title">Rain</span>
                  <span className="info-data">Average</span>
              </div>
              <div className="health">
                  <span className="info-title">Wind</span>
                  <span className="info-data">Low</span>
              </div>
            </section>
          </section>
        </nav>
    
        <section className="right-side">
            <div className="place">
                <img className="place-image" src={AbandonedConstruction}/>
                You are now at Abandoned Construction.
            </div>

            <p>You found:</p>
            <span>(3) Water [<a href="#">TAKE</a>] [<a href="#">USE</a>]</span>
            <span>(1) Honey [<a href="#">TAKE</a>] [<a href="#">USE</a>]</span>
            <span>(2) Bread [<a href="#">TAKE</a>] [<a href="#">USE</a>]</span>
            <span>(2) Tool [<a href="#">TAKE</a>] </span>

            {/* <div className="inventory">
                <span className="info-title">Inventory</span> 
                <div className="inventory-items">
                    <div className="inventory-item">
                        <span className="item-data"></span>
                    </div>
                    <div className="inventory-item">
                        <span className="item-data"></span>
                    </div>
                    <div className="inventory-item">
                        <span className="item-data"></span>
                    </div>
                    <div className="inventory-item">
                        <span className="item-data"></span>
                    </div>
                    <div className="inventory-item">
                        <span className="item-data"></span>
                    </div>
                </div>
            </div>
        
            <div className="craft">
                <i className="ph-magnifying-glass button"></i>
                <i className="ph-wrench button"></i>
                <i className="ph-bed button"></i>
                <i className="ph-backpack button"></i>
            </div> */}
        </section>
    </main>
  );
}

export default App;
