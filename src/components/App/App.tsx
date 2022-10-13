import './App.sass';
import React from "react";

function App() {
  return (
    <main className="interface">
        <div className="stats">
            <div className="health">
                <span className="info-title">Health</span>
                <span className="info-data" x-text="player.health"></span>
            </div>
            <div className="sleep">
                <span className="info-title">Sleep</span>
                <span className="info-data" x-text="player.sleep"></span> 
    
            </div>
            <div className="food">
                <span className="info-title">Food</span>
                <span className="info-data" x-text="player.food"></span> 
            </div>
            <div className="water">
                <span className="info-title">Water</span>
                <span className="info-data" x-text="player.water"></span> 
            </div>
        </div>
    
        <div className="place">
            <img className="place-image" src="illustrations/img/abandoned-house-unsplash.png"/>
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
