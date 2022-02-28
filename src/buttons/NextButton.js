import "./Buttons.css";
import clsx from "clsx";
function NextButton(props) {
  const isNextButtonDisabled = () => {
    if (props.index === props.questions.length - 1) {
      return true;
    } else {
      return false;
    }
  };

  return (
    <button
    className={clsx("baseButton", {
      disabledButton: isNextButtonDisabled(),
    })}
      onClick={() => {
        if (props.index < props.questions.length - 1) {
          props.setCurrentQuestionIndex(props.index + 1);
        }
      }}
      disabled={isNextButtonDisabled()}
    >
      Next question
    </button>
  );
}

export default NextButton;
