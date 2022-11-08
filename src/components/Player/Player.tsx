import { useState } from "react";
import { randomNumber } from "../Utils/Utils";
import "./Player.sass"

type Props = {}

export default function Player({}: Props) {
  const [experience, setExperience] = useState(randomNumber(3000, 7000));
  const [sleep, setHappiness] = useState(randomNumber(0, 100));
  const [health, setHealth] = useState(randomNumber(0, 100));
  const [hunger, setHunger] = useState(randomNumber(0, 100));
  const [thirst, setThirst] = useState(randomNumber(0, 100));
  const [mood, setMood] = useState(randomNumber(0, 100));

  const [light, setLight] = useState("HIGH");
  const [heat, setHeat] = useState("LOW");
  const [rain, setRain] = useState("AVERAGE");
  const [wind, setWind] = useState("LOW");

  return (
    <nav className="nav">
      <section className="nav-content">
        <div className="player">
          <div className="player-avatar"></div>
          <div className="player-name">Player</div>
          <div className="player-exp">EXPERIENCE {experience}</div>
          <br/>
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
              <span className="info-data">{light}</span>
          </div>
          <div className="health">
              <span className="info-title">Heat</span>
              <span className="info-data">{heat}</span>
          </div>
          <div className="health">
              <span className="info-title">Rain</span>
              <span className="info-data">{rain}</span>
          </div>
          <div className="health">
              <span className="info-title">Wind</span>
              <span className="info-data">{wind}</span>
          </div>
        </section>
      </section>
    </nav>
  )
}