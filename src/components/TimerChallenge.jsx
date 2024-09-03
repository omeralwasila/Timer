import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000);
  const timerActiv = timeRemaining > 0 && timeRemaining < targetTime * 1000;

  if (timeRemaining <= 0) {
    clearInterval(timer.current);
    if (dialog.current) {
      dialog.current.open();
    }
  }
  function handelRest() {
    setTimeRemaining(targetTime * 1000);
    if (dialog.current) {
      dialog.current.close();
    }
  }

  function handelStart() {
    timer.current = setInterval(() => {
      setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
    }, 10);
  }

  function handelStop() {
    clearInterval(timer.current);
    if (dialog.current) {
      dialog.current.open();
    }
  }

  return (
    <>
      <ResultModal
        ref={dialog}
        targetTime={targetTime}
        remainingTime={timeRemaining}
        onReset={handelRest}
      />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerActiv ? handelStop : handelStart}>
            {timerActiv ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerActiv ? "active" : undefined}>
          {timerActiv ? "time is runing ..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
