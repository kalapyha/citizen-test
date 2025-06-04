import { StyleSheet, View } from "react-native";
import React from "react";
import QuizRunner from "../../components/QuizRunner";
const Quiz1Screen = (): JSX.Element => {
  const quiz1 = [
    {
      question:
        "In order to become a Canadian citizen, you have to provide proof that you speak and wirte in:",
      choices: [
        { id: 0, text: "Either Spanish or English" },
        { id: 1, text: "Either Spanish or French" },
        { id: 2, text: "Both French and English" },
        { id: 3, text: "Either French or English" },
      ],
      correctChoice: 3,
    },
    {
      question: "How many questions are on the Canadian Citizenship test?",
      choices: [
        { id: 0, text: "30" },
        { id: 1, text: "15" },
        { id: 2, text: "20" },
        { id: 3, text: "25" },
      ],
      correctChoice: 2,
    },
    {
      question:
        "What are other words that can be used instead of the words king or queen?",
      choices: [
        { id: 0, text: "MP or PM" },
        { id: 1, text: "Prince or Princess" },
        { id: 2, text: "Monarch or Sovereign" },
        { id: 3, text: "Mr or Ms" },
      ],
      correctChoice: 2,
    },
    {
      question: "To whom do Canadians make the oath (promise) of citizenship?",
      choices: [
        { id: 0, text: "PM" },
        { id: 1, text: "Governor General" },
        { id: 2, text: "Judge" },
        { id: 3, text: "Monarch or Sovereign" },
      ],
      correctChoice: 3,
    },
    {
      question:
        "How many questions do you need to answer correctly to pass Canadian Citizenship test?",
      choices: [
        { id: 0, text: "30" },
        { id: 1, text: "15" },
        { id: 2, text: "20" },
        { id: 3, text: "25" },
      ],
      correctChoice: 1,
    },
    {
      question:
        "What are the questions formats in the Canadian Citizenship test?",
      choices: [
        { id: 0, text: "multiple-choice only" },
        { id: 1, text: "true or false questions" },
        { id: 2, text: "multiple choices and short wrinig" },
        { id: 3, text: "multiple-choice and true or false questions" },
      ],
      correctChoice: 3,
    },
    {
      question: "Who is the person who we make our oath to?",
      choices: [
        { id: 0, text: "King Charles III" },
        { id: 1, text: "Justin Trudeau" },
        { id: 2, text: "Quenn Elizabeth II" },
        { id: 3, text: "Governer General" },
      ],
      correctChoice: 0,
    },
    {
      question:
        "Which of the following is NOT another word used to refer to the King?",
      choices: [
        { id: 0, text: "Governer General" },
        { id: 1, text: "Monarch" },
        { id: 2, text: "Head of State" },
        { id: 3, text: "Sovereign" },
      ],
      correctChoice: 0,
    },
  ];

  return (
    <View>
      <QuizRunner questions={quiz1} quizId="quiz1"></QuizRunner>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Quiz1Screen;
