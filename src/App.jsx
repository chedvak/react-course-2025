import { useState } from "react";
import ColorBoxes from "./ColorBoxes";

export default function App() {
  const [colorToGuess] = useState(getRandomColor());

  return (
    <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
  <div style={{ padding: 20, display: 'flex', flexDirection: 'column', alignItems: 'center', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Guess the Color!</h2>
      <p>Target color: <strong>{colorToGuess}</strong></p>

      <ColorBoxes colorToGuess={colorToGuess} getRandomColor={getRandomColor}/>
    </div>
    </div>
  );
}

function getRandomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16);
}
