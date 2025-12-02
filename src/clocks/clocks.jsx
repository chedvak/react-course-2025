import { useState } from "react";
import Clock from "./clock";

const CLOCK_CONFIG = [
  { key: "JLM", label: "Jerusalem", timezone: "Asia/Jerusalem" },
  { key: "LON", label: "London", timezone: "Europe/London" },
  { key: "NYC", label: "New York", timezone: "America/New_York" },
];

export default function App() {
  const [intervals, setIntervals] = useState({
    JLM: 1,
    LON: 1,
    NYC: 1,
  });

  function resetAll() {
    setIntervals({ JLM: 1, LON: 1, NYC: 1 });
  }

  function doubleAll() {
    setIntervals((prev) => ({
      JLM: prev.JLM * 2,
      LON: prev.LON * 2,
      NYC: prev.NYC * 2,
    }));
  }

  function randomizeAll() {
    setIntervals({
      JLM: Math.floor(Math.random() * 5) + 1,
      LON: Math.floor(Math.random() * 5) + 1,
      NYC: Math.floor(Math.random() * 5) + 1,
    });
  }

  //   const [intervals, setIntervals] = useState(() =>
  //     CLOCK_CONFIG.reduce((acc, clock) => {
  //       acc[clock.key] = 1; // ערך התחלתי לכל שעון
  //       return acc;
  //     }, {})
  //   );
  //   // שעון בודד
  //   function doubleInterval(key) {
  //     setIntervals((prev) => ({
  //       ...prev,
  //       [key]: prev[key] * 2,
  //     }));
  //   }

  //   function resetInterval(key) {
  //     setIntervals((prev) => ({
  //       ...prev,
  //       [key]: 1,
  //     }));
  //   }

  //   // פעולות על כולם
  //   function doubleAll() {
  //     setIntervals((prev) =>
  //       Object.fromEntries(
  //         Object.entries(prev).map(([key, val]) => [key, val * 2])
  //       )
  //     );
  //   }

  //   function resetAll() {
  //     setIntervals((prev) =>
  //       Object.fromEntries(Object.entries(prev).map(([key]) => [key, 1]))
  //     );
  //   }

  //   function randomizeAll() {
  //     setIntervals((prev) =>
  //       Object.fromEntries(
  //         Object.entries(prev).map(([key]) => [
  //           key,
  //           Math.floor(Math.random() * 5) + 1,
  //         ])
  //       )
  //     );
  //   }


  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 20,
        marginTop: 20,
      }}
    >
      <h1>Clocks</h1>
      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
        <button onClick={resetAll}>Reset All Intervals</button>
        <button onClick={doubleAll}>Double All Intervals</button>
        <button onClick={randomizeAll}>Randomize All Intervals</button>
      </div>

      <div style={{ display: "flex", gap: 20, marginTop: 20 }}>
   
        <Clock
          city="Jerusalem"
          timezone="Asia/Jerusalem"
          interval={intervals.JLM}
          onReset={() => setIntervals((prev) => ({ ...prev, JLM: 1 }))}
          onDouble={() =>
            setIntervals((prev) => ({ ...prev, JLM: prev.JLM * 2 }))
          }
        />

        <Clock
          city="London"
          timezone="Europe/London"
          interval={intervals.LON}
          onReset={() => setIntervals((prev) => ({ ...prev, LON: 1 }))}
          onDouble={() =>
            setIntervals((prev) => ({ ...prev, LON: prev.LON * 2 }))
          }
        />

        <Clock
          city="New York"
          timezone="America/New_York"
          interval={intervals.NYC}
          onReset={() => setIntervals((prev) => ({ ...prev, NYC: 1 }))}
          onDouble={() =>
            setIntervals((prev) => ({ ...prev, NYC: prev.NYC * 2 }))
          }
        />


             {/* {CLOCK_CONFIG.map((clock) => (
          <Clock
            key={clock.key}
            label={clock.label}
            timezone={clock.timezone}
            interval={intervals[clock.key]}
            onDouble={() => doubleInterval(clock.key)}
            onReset={() => resetInterval(clock.key)}
          />
        ))} */}
      </div>
    </div>
  );
}
