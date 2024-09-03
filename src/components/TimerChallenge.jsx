import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpeired, setTimerExpeired] = useState(false);

  function handelStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpeired(true);
      dialog.current.showModal();
    }, targetTime * 1000);
  }

  function handelStop() {
    clearTimeout(timer.current);
  }

  return (
    <>
      <ResultModal ref={dialog} targetTime={targetTime} result="lost" />

      <section className="challenge">
        <h2>{title}</h2>

        <p className="challenge-time">
          {targetTime} second{targetTime > 1 ? "s" : ""}
        </p>
        <p>
          <button onClick={timerStarted ? handelStop : handelStart}>
            {timerStarted ? "Stop" : "Start"} challenge
          </button>
        </p>
        <p className={timerStarted ? "active" : undefined}>
          {timerStarted ? "time is runing ..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
}
