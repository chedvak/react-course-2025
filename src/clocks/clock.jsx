import { useEffect, useState } from "react";

export default function Clock({ city, timezone, interval, onReset, onDouble }) {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => {
      setTime(new Date());
    }, interval * 1000);

    return () => clearInterval(id); 
  }, [interval]);

  function updateNow() {
    setTime(new Date());
  }

  return (
    <div style={{ border: "1px solid black", padding: 16, width: 200 }}>
      <h3>{city}</h3>
      <p>
        {time.toLocaleTimeString("en-US", { timeZone: timezone })}
      </p>

      <p>Interval: {interval}</p>

      <button onClick={onReset}>Reset My Interval</button>
      <button onClick={onDouble}>Double My Interval</button>
      <button onClick={updateNow}>Update Me Now</button>
    </div>
  );
}
