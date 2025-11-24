import { useState } from "react";

export default function ColorBox({ color, isCorrect }) {
  const [clicked, setClicked] = useState(false);
  const [borderColor, setBorderColor] = useState("black");

  function handleClick() {
    if (clicked) return;
    setClicked(true);
    setBorderColor(isCorrect ? "green" : "red");
  }

  return (
    <div
      onClick={handleClick}
      style={{
        width: 100,
        height: 100,
        backgroundColor: color,
        border: `4px solid ${borderColor}`,
        cursor: "pointer"
      }}
    ></div>
  );
}
