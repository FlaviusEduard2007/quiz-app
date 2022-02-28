import Question from "./Question";
import NextButton from "./buttons/NextButton";
import PreviousButton from "./buttons/PreviousButton";
import FinishButton from "./buttons/FinishButton";
import Answer from "./Answer";
import { allQuestions } from "./data";
import { useEffect, useState } from "react";
import "./Global.css";

function App() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [questionsAnswered, setQuestionsAnswered] = useState([
    false,
    false,
    false,
  ]);
  const [selectedAnswers, setSelectedAnswers] = useState([-1, -1, -1]);
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);

  const renderAnswers = () => {
    return ["A", "B", "C", "D"].map((letter, idx) => {
      return (
        <Answer
          key={`answer-${letter}`}
          letter={letter}
          answered={questionsAnswered[currentQuestionIndex]}
          text={allQuestions[currentQuestionIndex].answers[idx].title}
          isCorrect={allQuestions[currentQuestionIndex].answers[idx].isCorrect}
          onClick={() => {
            // 1. Copy the current array
            let copy = [...questionsAnswered];
            // 2. Make the necessary changes [false, false, false] => [true, false, false]
            copy[currentQuestionIndex] = true;
            // 3. Replace the state with the modified array
            setQuestionsAnswered(copy);

            let answersCopy = [...selectedAnswers]; // [-1, -1, -1] => [2, -1, -1]
            answersCopy[currentQuestionIndex] = idx;
            setSelectedAnswers(answersCopy);
          }}
        />
      );
    });
  };
  function quizCompleted() {
    for (let i = 0; i < allQuestions.length; i++) {
      if (!questionsAnswered[i]) {
        return false;
      }
    }

    return true;
  }

  const renderAnswerCheck = () => {
    if (questionsAnswered[currentQuestionIndex]) {
      if (
        allQuestions[currentQuestionIndex].answers[
          selectedAnswers[currentQuestionIndex]
        ].isCorrect
      ) {
        return <div>Your answered correctly</div>;
      } else {
        return <div>You answered incorrectly</div>;
      }
    }
  };
  function renderScore() {
    if (isQuizFinished) {
      return score;
    }
  }

  useEffect(() => {
    // 1. Create a new score starting from 0
    let newScore = 0;
    // 2. Count how many correct answers the user has
    let correctAnswers = 0;

    // Iterate over each question
    for (let i = 0; i < questionsAnswered.length; i++) {
      // Check if the user answered this question
      if (questionsAnswered[i]) {
        if (allQuestions[i].answers[selectedAnswers[i]].isCorrect) {
          correctAnswers++;
        }
      }
    }
    // 3. The new score will be the number of correct answers * 50 points
    newScore = correctAnswers * 50;
    // 4. Set the score state to be the new calculated score
    setScore(newScore);
  }, [selectedAnswers]);

  return (
    <div className="App">
      <div className="container">
        <Question
          text={allQuestions[currentQuestionIndex].title}
          index={currentQuestionIndex + 1}
        />
        {renderAnswers()}
        <PreviousButton
          index={currentQuestionIndex}
          questions={allQuestions}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
        <NextButton
          index={currentQuestionIndex}
          questions={allQuestions}
          setCurrentQuestionIndex={setCurrentQuestionIndex}
        />
        <FinishButton
          quizCompleted={quizCompleted()}
          setQuizIsFinished={setIsQuizFinished}
        />
        {renderAnswerCheck()}

        <div>{renderScore()}</div>
      </div>
    </div>
  );
}

export default App;
