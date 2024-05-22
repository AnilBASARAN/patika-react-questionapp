import React from "react";
import { useContext } from "react";
import { appContext } from "../context/AppContext";
import "./Result.css";
import questions from "../questions.js";

function Result() {
  const { correctCounter, chosenAnswers, answeredCount } =
    useContext(appContext);

  return (
    <div className="result-container">
      <div className="score-container">
        <div className="score">
          <p className="total">Puan: {correctCounter}</p>
        </div>
      </div>
      <div>
        <h2 className="header">Answers</h2>
        <ul className="result-list">
          {chosenAnswers.map((answer) => {
            return (
              <li key={answer.id}>
                Soru {answer.id}: {answer.chosenAnswer} / Doğru Cevap : {questions.find((item) => item.id == answer.id).answer}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default Result;