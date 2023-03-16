import React, { useState, useEffect } from "react";
import { Text, View } from "react-native";
import { shuffleArray } from "../utils/helpers";
import QuizCard from "./QuizCard";
import { s } from "../Style";

interface QuestionProps {
  question: string;
  choices: string[];
  correctChoice: string;
}

const QuizRunner = (props: { questions: QuestionProps[] }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const currentQuestion = props.questions[currentQuestionIndex];

  const handleAnswer = (answer: string) => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setProgress((currentQuestionIndex / props.questions.length) * 100);
    if (answer === currentQuestion.correctChoice) setScore(score + 1);
  };

  if (!currentQuestion) {
    return (
      <View>
        <Text style={s.heading}>Quiz complete!</Text>
        <Text style={s.text}>
          Your score is {score} out of {props.questions.length}.
        </Text>
      </View>
    );
  }

  console.log("currentQuestionIndex", currentQuestionIndex);
  console.log("props.questions.length", props.questions.length);
  return (
    <View>
      <QuizCard
        question={currentQuestion.question}
        choices={shuffleArray(currentQuestion.choices)}
        correctChoice={currentQuestion.correctChoice}
        handleAnswer={handleAnswer}
        questionsLength={props.questions.length}
        currentQuestionIndex={currentQuestionIndex}
      />
    </View>
  );
};

export default QuizRunner;
