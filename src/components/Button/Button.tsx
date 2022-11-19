import "./Button.sass";

type Props = {
  text: string; // text to display on the button
  onClick: () => void; // function to call when the button is clicked
};

export default function Button({ text, onClick }: Props) {
  return (
    <div>
      <button className="button-component" onClick={onClick}>
        {text}
      </button>
    </div>
  );
}
