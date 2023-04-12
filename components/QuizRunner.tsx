import React, { useState } from "react";
import { Text, View } from "react-native";
import { shuffleArray } from "../utils/helpers";
import QuizCard from "./QuizCard";
import { s } from "../Style";
import { saveQuizResults } from "../utils/storage";

interface QuestionProps {
  question: string;
  choices: string[];
  correctChoice: string;
}

const QuizRunner = (props: {
  questions: QuestionProps[];
  quizId: string;
  isFavorites?: boolean;
}) => {
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
    saveQuizResults(
      `${Math.floor((score / props.questions.length) * 100)}%`,
      props.quizId
    );
    return (
      <View>
        <Text style={s.heading}>Quiz complete!</Text>
        <Text style={s.text}>
          Your score is {score} out of {props.questions.length}.
        </Text>
      </View>
    );
  }

  return (
    <View>
      <QuizCard
        isFavorites={props.isFavorites || false}
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
