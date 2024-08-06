import React, { useState } from "react";
import QuestionList from "./QuestionList";

function Quiz() {
  const questions = [
    {
      question: "why color of sky is blue?",
      options: [
        "Reflection",
        "Refraction",
        "Total internal reflection",
        "Scattering",
      ],
      answer: "Scattering",
    },
    {
      question:
        "The change in the direction of a wave passing from one medium to another is termed as —————. ?",
      options: ["Interference", "Mirage", "Diffraction", "Refraction"],
      answer: "Refraction",
    },
    {
      question: "Twinkling of stars is due to which optical phenomenon?",
      options: ["Divergence", "Mirage", "Reflection", "Refraction"],
      answer: "Refraction",
    },
    {
      question: "Speed of light is___m/s?",
      options: ["3*10^8", "3*10^5", "2.4*10^5", "3.4*10^9"],
      answer: "3*10^8",
    },
  ];
  const [currentQueIndex, setCurrentQueIndex] = useState(0);
  const [currentAns, setCurrentAns] = useState(null);
  const [score, setScore] = useState(0);

  const handleClick = (option) => {
    setCurrentAns(option);
    if (option === questions[currentQueIndex].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQue = () => {
    setCurrentQueIndex(currentQueIndex + 1);
    setCurrentAns(null);
  };
  return (
    <div>
      {currentQueIndex < questions.length ? (
        <div>
          <QuestionList
            question={questions[currentQueIndex].question}
            options={questions[currentQueIndex].options}
            handleClick={handleClick}
            currentAns={currentAns}
          />
          <button
            disabled={currentAns === null}
            className={currentAns === null ? "button-disable" : "button"}
            onClick={handleNextQue}
          >
            Next Question
          </button>
        </div>
      ) : (
        <div>
          <h2>Your Score is :{score}</h2>
        </div>
      )}
    </div>
  );
}

export default Quiz;
