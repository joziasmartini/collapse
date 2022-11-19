import "./Location.sass";
// import AbandonedConstruction from "../../assets/illustrations/dall-e/abandoned-construction-cropped.png";
import Button from "../Button/Button";
import { useState } from "react";

type Props = {};

export default function Location({}: Props) {
  const [items, setItems] = useState([]);

  const searchLocation = () => {};
  const continueExploring = () => {};

  return (
    <section className="right-side">
      <div className="place">
        <p>You are now at Abandoned Construction.</p>
      </div>

      <div className="actions">
        <Button text="Search Location" onClick={() => searchLocation} />
        <Button text="Continue Exploring" onClick={() => continueExploring} />
      </div>

      {/* <div className="searched">
          <p>You found:</p>
          <span>(3) Water [<a href="#">TAKE</a>] [<a href="#">USE</a>]</span>
          <span>(1) Honey [<a href="#">TAKE</a>] [<a href="#">USE</a>]</span>
          <span>(2) Bread [<a href="#">TAKE</a>] [<a href="#">USE</a>]</span>
          <span>(2) Tool [<a href="#">TAKE</a>] </span>
      </div> */}
    </section>
  );
}
