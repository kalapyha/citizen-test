import { StyleSheet, View } from "react-native";
import React from "react";
import QuizRunner from "../../components/QuizRunner";
const Quiz2Screen = (): JSX.Element => {
  const quiz2 = [
    {
      question: "What is the name of Canada's national anthem?",
      choices: [
        "Oh, Canada",
        "The Maple Leaf Forever",
        "God Save the Queen",
        "The Star-Spangled Banner",
      ],
      correctChoice: "Oh, Canada",
    },
    {
      question: "Who are the Indigenous peoples of Canada?",
      choices: [
        "French and English settlers",
        "American Indians",
        "Aboriginal peoples",
        "Hispanic peoples",
      ],
      correctChoice: "Aboriginal peoples",
    },
    {
      question: "What is the capital city of Canada?",
      choices: ["Montreal", "Vancouver", "Toronto", "Ottawa"],
      correctChoice: "Ottawa",
    },
    {
      question: "What is the significance of the Canadian flag?",
      choices: [
        "It represents the unity of the provinces and territories",
        "It represents the indigenous people of Canada",
        "It represents the Canadian military",
        "It represents Canada's history",
      ],
      correctChoice: "It represents the unity of the provinces and territories",
    },
    {
      question:
        "Which of the following is NOT a territory or province of Canada?",
      choices: ["Nunavut", "Quebec", "Saskatchewan", "New Brunswick"],
      correctChoice: "New Brunswick",
    },
    {
      question: "What is the highest court in Canada?",
      choices: [
        "Supreme Court of Canada",
        "Federal Court of Appeal",
        "Provincial Court",
        "Court of Queen's Bench",
      ],
      correctChoice: "Supreme Court of Canada",
    },
    {
      question:
        "Which of the following is a right protected by the Canadian Charter of Rights and Freedoms?",
      choices: [
        "The right to own property",
        "The right to free healthcare",
        "The right to a job",
        "The right to freedom of thought, belief, opinion and expression",
      ],
      correctChoice:
        "The right to freedom of thought, belief, opinion and expression",
    },
    {
      question: "What is the official language of Canada?",
      choices: ["English", "French", "Both English and French", "Spanish"],
      correctChoice: "Both English and French",
    },
    {
      question: "What is the role of the Governor General in Canada?",
      choices: [
        "To represent the Queen of England",
        "To make laws and govern the country",
        "To be the Commander-in-Chief of the Canadian military",
        "To enforce the laws and maintain order",
      ],
      correctChoice: "To represent the Queen of England",
    },
    {
      question:
        "Which of the following is NOT a responsibility of Canadian citizens?",
      choices: [
        "Obeying the law",
        "Voting in elections",
        "Serving in the Canadian military",
        "Paying taxes to the government",
      ],
      correctChoice: "Serving in the Canadian military",
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
