import './App.sass';
import AbandonedConstruction from "../../assets/illustrations/dall-e/abandoned-construction.png";
import React from "react";

function App() {
  const [image, setImage] = React.useState(AbandonedConstruction);
  const [sleep, setHappiness] = React.useState(22);
  const [health, setHealth] = React.useState(33);
  const [hunger, setHunger] = React.useState(77);
  const [thirst, setThirst] = React.useState(55);

  return (
    <main className="interface">
        <nav className="nav">
          <section className="nav-content">
            <div className="player">
              <div className="player-avatar"></div>
              <div className="player-name">Player Name</div>
              <div className="player-exp">4870 EXP</div>
              <div className="player-condition">(bruised)</div>
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
            </section>
          </section>
        </nav>
    
        <div className="place">
            <img className="place-image" src={AbandonedConstruction}/>
            You are now at Abandoned House.
        </div>

        <br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
    
        <div className="inventory">
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
        </div>
    </main>
  );
}

export default App;
