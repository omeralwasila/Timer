import { forwardRef } from "react";

const ResultModal = forwardRef(function ResultModal(
  { result, targetTime },
  ref
) {
  return (
    <dialog ref={ref} className="result-modal" open>
      <h2>you {result}</h2>
      <p>
        The target time was <strong>{targetTime} seconds.</strong>
      </p>
      <p>
        You stopped the timer with <strong>X seconds left. </strong>
      </p>
      <form method="dialog">
        <button>Colse</button>
      </form>
    </dialog>
  );
});
export default ResultModal;
