import "./Buttons.css";
import clsx from "clsx";
function FinishButton(props) {
  const isFinishButtonDisabled = () => {
    if (props.quizCompleted) {
      return false;
    }
    return true;
  };
  return (
    <button
    className={clsx("baseButton", {
      disabledButton: isFinishButtonDisabled(),
    })}
      onClick={() => props.setQuizIsFinished(true)}
      disabled={isFinishButtonDisabled()}
    >
      Finish
    </button>
  );
}
export default FinishButton;
