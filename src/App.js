import Game from "./Game";
import EndScreen from "./EndScreen";
import { useState } from "react";
import "./Global.css";

function App() {
  const [score, setScore] = useState(0);
  const [isQuizFinished, setIsQuizFinished] = useState(false);
  function renderContent() {
    if (isQuizFinished) {
      return <EndScreen 
      score={score}
      />;
    }
    return (
      <Game
        setScore={setScore}
        setIsQuizFinished={setIsQuizFinished}
        score={score}
        isQuizFinished={isQuizFinished}
      />
    );
  }
  return (
    <div className="App">
      <div className="container">{renderContent()}</div>
    </div>
  );
}

export default App;
