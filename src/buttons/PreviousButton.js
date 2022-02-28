import "./Buttons.css";
import clsx from "clsx";

function PreviousButton(props) {
  const isPreviousButtonDisabled = () => {
    if (props.index === 0) {
      return true;
    }
    return false;
  };
  return (
    <button
      className={clsx("baseButton", {
        disabledButton: isPreviousButtonDisabled(),
      })}
      onClick={() => {
        if (props.index > 0) {
          props.setCurrentQuestionIndex(props.index - 1);
        }
      }}
      disabled={isPreviousButtonDisabled()}
    >
      Previous question
    </button>
  );
}
export default PreviousButton;
