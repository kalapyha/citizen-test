import { Text, StyleSheet, View } from "react-native";
import React from "react";
import QuizCard from "../components/QuizCard";
import QuizRunner from "../components/QuizRunner";
const QuizList = (): JSX.Element => {
  const quiz1 = [
    {
      question:
        "In order to become a Canadian citizen, you have to provide proof that you speak and wirte in:",
      choices: [
        "Either Spanish or English",
        "Either Spanish or French",
        "Both French and English",
        "Either French or English",
      ],
      correctChoice: "Either French or English",
    },
    {
      question: "How many questions are on the Canadian Citizenship test?",
      choices: ["30", "15", "20", "25"],
      correctChoice: "20",
    },
    {
      question:
        "What are other words that can be used instead of the words king or queen?",
      choices: [
        "MP or PM",
        "Prince or Princess",
        "Monarch or Sovereign",
        "Mr or Ms",
      ],
      correctChoice: "Monarch or Sovereign",
    },
    {
      question: "To whom do Canadians make the oath (promise) of citizenship?",
      choices: ["PM", "Governor General", "Judge", "Monarch or Sovereign"],
      correctChoice: "Monarch or Sovereign",
    },
    {
      question:
        "How many questions do you need to answer correctly to pass Canadian Citizenship test?",
      choices: ["30", "15", "20", "25"],
      correctChoice: "15",
    },
    {
      question:
        "What are the questions formats in the Canadian Citizenship test?",
      choices: [
        "multiple-choice only",
        "true or false questions",
        "multiple choices and short wrinig",
        "multiple-choice and true or false questions",
      ],
      correctChoice: "multiple-choice and true or false questions",
    },
    {
      question: "Who is the person who we make our oath to?",
      choices: [
        "King Charles III",
        "Justin Trudeau",
        "Quenn Elizabeth II",
        "Governer General",
      ],
      correctChoice: "King Charles III",
    },
    {
      question:
        "Which of the following is NOT another word used to refer to the King?",
      choices: ["Governer General", "Monarch", "Head of State", "Sovereign"],
      correctChoice: "Governer General",
    },
  ];

  return (
    <View>
      <Text>Quiz-1</Text>
      <Text>Quiz-2</Text>
      <Text>Quiz-3</Text>
      <Text>Quiz-4</Text>
      <QuizRunner questions={quiz1}></QuizRunner>
    </View>
  );
};

const styles = StyleSheet.create({});

export default QuizList;
