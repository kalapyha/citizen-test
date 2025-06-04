import { StyleSheet, View } from "react-native";
import React from "react";
import QuizRunner from "../../components/QuizRunner";
const Quiz2Screen = (): JSX.Element => {
  const quiz2 = [
    {
      question: "What is the name of Canada's national anthem?",
      choices: [
        { id: 0, text: "Oh, Canada" },
        { id: 1, text: "The Maple Leaf Forever" },
        { id: 2, text: "God Save the Queen" },
        { id: 3, text: "The Star-Spangled Banner" },
      ],
      correctChoice: 0,
    },
    {
      question: "Who are the Indigenous peoples of Canada?",
      choices: [
        { id: 0, text: "French and English settlers" },
        { id: 1, text: "American Indians" },
        { id: 2, text: "Aboriginal peoples" },
        { id: 3, text: "Hispanic peoples" },
      ],
      correctChoice: 2,
    },
    {
      question: "What is the capital city of Canada?",
      choices: [
        { id: 0, text: "Montreal" },
        { id: 1, text: "Vancouver" },
        { id: 2, text: "Toronto" },
        { id: 3, text: "Ottawa" },
      ],
      correctChoice: 3,
    },
    {
      question: "What is the significance of the Canadian flag?",
      choices: [
        { id: 0, text: "It represents the unity of the provinces and territories" },
        { id: 1, text: "It represents the indigenous people of Canada" },
        { id: 2, text: "It represents the Canadian military" },
        { id: 3, text: "It represents Canada's history" },
      ],
      correctChoice: 0,
    },
    {
      question:
        "Which of the following is NOT a territory or province of Canada?",
      choices: [
        { id: 0, text: "Nunavut" },
        { id: 1, text: "Quebec" },
        { id: 2, text: "Saskatchewan" },
        { id: 3, text: "New Brunswick" },
      ],
      correctChoice: 3,
    },
    {
      question: "What is the highest court in Canada?",
      choices: [
        { id: 0, text: "Supreme Court of Canada" },
        { id: 1, text: "Federal Court of Appeal" },
        { id: 2, text: "Provincial Court" },
        { id: 3, text: "Court of Queen's Bench" },
      ],
      correctChoice: 0,
    },
    {
      question:
        "Which of the following is a right protected by the Canadian Charter of Rights and Freedoms?",
      choices: [
        { id: 0, text: "The right to own property" },
        { id: 1, text: "The right to free healthcare" },
        { id: 2, text: "The right to a job" },
        { id: 3, text: "The right to freedom of thought, belief, opinion and expression" },
      ],
      correctChoice: 3,
    },
    {
      question: "What is the official language of Canada?",
      choices: [
        { id: 0, text: "English" },
        { id: 1, text: "French" },
        { id: 2, text: "Both English and French" },
        { id: 3, text: "Spanish" },
      ],
      correctChoice: 2,
    },
    {
      question: "What is the role of the Governor General in Canada?",
      choices: [
        { id: 0, text: "To represent the Queen of England" },
        { id: 1, text: "To make laws and govern the country" },
        { id: 2, text: "To be the Commander-in-Chief of the Canadian military" },
        { id: 3, text: "To enforce the laws and maintain order" },
      ],
      correctChoice: 0,
    },
    {
      question:
        "Which of the following is NOT a responsibility of Canadian citizens?",
      choices: [
        { id: 0, text: "Obeying the law" },
        { id: 1, text: "Voting in elections" },
        { id: 2, text: "Serving in the Canadian military" },
        { id: 3, text: "Paying taxes to the government" },
      ],
      correctChoice: 2,
    },
  ];

  return (
    <View>
      <QuizRunner questions={quiz2} quizId="quiz2"></QuizRunner>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Quiz2Screen;
