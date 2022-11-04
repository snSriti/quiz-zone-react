import React from "react";
import { useLoaderData } from "react-router-dom";
import QuizTemplate from "./QuizTemplate";

const Quiz = () => {
  const quizData = useLoaderData();
  const quiz = quizData.data;
  const { name, questions } = quiz;
  return (
    <div>
      <h1 className="text-4xl font-bold leading-none text-green-800 mt-8">
        Quiz of {name}
      </h1>
      {questions.map((allQuestion, index) => (
        <QuizTemplate
          index={index}
          key={allQuestion.id}
          allQuestion={allQuestion}
        ></QuizTemplate>
      ))}
    </div>
  );
};

export default Quiz;
