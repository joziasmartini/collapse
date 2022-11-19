import "./Location.sass";
// import AbandonedConstruction from "../../assets/illustrations/dall-e/abandoned-construction-cropped.png";
import Button from "../Button/Button";

type Props = {};

export default function Location({}: Props) {
  return (
    <section className="right-side">
      <div className="place">
        <p>You are now at Abandoned Construction.</p>
      </div>

      <div className="actions">
        <Button text="Search Location" onClick={() => {}} />
        <Button text="Continue Exploring" onClick={() => {}} />
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
