import React, { useState } from "react";
import { Text, View } from "react-native";
import { shuffleArray } from "../utils/helpers";
import QuizCard from "./QuizCard";
import { s } from "../Style";
import {
  saveQuizResults,
  DetailedQuizProgress,
  FailedQuestionInfo,
} from "../utils/storage";

interface QuestionProps {
  question: string;
  choices: Array<{ id: number; text: string }>;
  correctChoice: number; // This is the ID of the correct choice
}

const QuizRunner = (props: {
  questions: QuestionProps[];
  quizId: string;
  isFavorites?: boolean;
}) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [progress, setProgress] = useState(0);
  const [failedQuestions, setFailedQuestions] = useState<FailedQuestionInfo[]>(
    []
  );
  const currentQuestion = props.questions[currentQuestionIndex];

  const handleAnswer = (answerId: number) => {
    if (answerId !== currentQuestion.correctChoice) {
      const failedInfo: FailedQuestionInfo = {
        questionText: currentQuestion.question,
        userAnswerId: answerId,
        correctAnswerId: currentQuestion.correctChoice,
        choices: currentQuestion.choices,
      };
      setFailedQuestions((prev) => [...prev, failedInfo]);
    } else {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
    setProgress((currentQuestionIndex / props.questions.length) * 100);
  };

  if (!currentQuestion) {
    const detailedProgress: DetailedQuizProgress = {
      quizId: props.quizId,
      score: score,
      totalQuestions: props.questions.length,
      failedQuestions: failedQuestions,
      percentage: `${Math.floor(
        (score / props.questions.length) * 100
      )}%`,
      timestamp: Date.now(),
    };
    saveQuizResults(detailedProgress, props.quizId);
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
