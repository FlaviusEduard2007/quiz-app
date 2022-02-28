import clsx from "clsx";

function Answer(props) {
  return (
    <div
      className={clsx("baseAnswer", {
        correctAnswer: props.isCorrect && props.answered,
        wrongAnswer: !props.isCorrect && props.answered,
      })}
      onClick={props.onClick}
    >
      <span>
        {props.letter}. {props.text}
      </span>
      {props.isCorrect && props.answered && (
        <i class="material-icons greenIcon">check_circle</i>
      )}
      {!props.isCorrect && props.answered && (
        <i class="material-icons redIcon">cancel</i>
      )}
    </div>
  );
}
export default Answer;
