import ColorBox from "./ColorBox";

export default function ColorBoxes({ colorToGuess, getRandomColor }) {
  const colors = generateColors(colorToGuess, getRandomColor);

  return (
    <div style={{ display: "flex", gap: 20 }}>
      {colors.map((c, i) => (
        <ColorBox key={i} color={c} isCorrect={c === colorToGuess} />
      ))}
    </div>
  );
}

function generateColors(correct, getRandomColor) {
  const random1 = getRandomColor();
  const random2 = getRandomColor();

  const arr = [correct, random1, random2];

  // ערבוב – שלא תמיד יהיה ראשון
  return arr.sort(() => Math.random() - 0.5);
}

