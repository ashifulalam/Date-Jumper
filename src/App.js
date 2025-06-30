import { useState } from "react";
import "./styles.css";

// Main App wrapper
export default function App() {
  return (
    <div className="App">
      <div className="content-container">
        <Counter />
      </div>
    </div>
  );
}

// Counter with step control and date calculator
function Counter() {
  // Step = how much to add/subtract each click
  const [step, setStep] = useState(0);
  // Count = days from June 16 2025
  const [count, setCount] = useState(0);

  function handleReset() {
      setStep(0);
      setCount(0);
  }

  // Calculate date by adding count days to base date
  const date = new Date("June 16 2025");
  date.setDate(date.getDate() + count);

  return (
    <div>
      {/* Step controls - set increment size */}
      <div className="counter-control step-control">
        <input
          type="range"
          min="0"
          max="10"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />{" "}
        <span> {step} </span>
        {/* <button onClick={() => setStep((s) => s - 1)}>-</button>
        <span>Step : {step}</span>
        <button onClick={() => setStep((s) => s + 1)}>+</button> */}
      </div>

      {/* Main counter - changes by step amount */}
      <div className="counter-control count-control">
        <button onClick={() => setCount((c) => c - step)}>-</button>
          <input type="text" name="" id="" value={count} onChange={(e) => setCount(Number(e.target.value))}/>
        <button onClick={() => setCount((c) => c + step)}>+</button>
      </div>

      {/* Show calculated date with smart text */}
      <p>
        {count === 0
          ? "Today is "
          : count > 0
          ? `${count} days from today is `
          : `${Math.abs(count)} days ago was `}
        <strong>{date.toDateString()}</strong>
      </p>

        {(count !==0 || step !==0) ?
      <div>
          <button onClick={handleReset}>Reset</button>
      </div> : null
        }
    </div>
  );
}
