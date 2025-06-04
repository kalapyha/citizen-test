import { StyleSheet, View } from "react-native";
import React from "react";
import QuizRunner from "../../components/QuizRunner";
const Quiz4Screen = (): JSX.Element => {
  const quiz4 = [
    {
      question:
        "Which of the following is NOT a territory or province in Canada?",
      choices: [
        { id: 0, text: "Quebec" },
        { id: 1, text: "Nova Scotia" },
        { id: 2, text: "Nunavut" },
        { id: 3, text: "Manitoba" },
      ],
      correctChoice: 1,
    },
    {
      question: "Who is the current Prime Minister of Canada?",
      choices: [
        { id: 0, text: "Stephen Harper" },
        { id: 1, text: "Justin Trudeau" },
        { id: 2, text: "Andrew Scheer" },
        { id: 3, text: "Jagmeet Singh" },
      ],
      correctChoice: 1,
    },
    {
      question:
        "Which of the following is a significant issue in Canadian politics today?",
      choices: [
        { id: 0, text: "Climate change" },
        { id: 1, text: "The space program" },
        { id: 2, text: "Immigration from Europe" },
        { id: 3, text: "The fight against communism" },
      ],
      correctChoice: 0,
    },
    {
      question: "What is the name of Canada's national anthem?",
      choices: [
        { id: 0, text: "O Canada" },
        { id: 1, text: "God Save the Queen" },
        { id: 2, text: "The Maple Leaf Forever" },
        { id: 3, text: "Oh Canada" },
      ],
      correctChoice: 0,
    },
    {
      question: "Which of the following is a major Canadian industry?",
      choices: [
        { id: 0, text: "Oil and gas" },
        { id: 1, text: "Coal mining" },
        { id: 2, text: "Steel production" },
        { id: 3, text: "Automobile manufacturing" },
      ],
      correctChoice: 0,
    },
    {
      question: "Which of the following is a Canadian cultural contribution?",
      choices: [
        { id: 0, text: "The Mona Lisa" },
        { id: 1, text: "The Eiffel Tower" },
        { id: 2, text: "Poutine" },
        { id: 3, text: "Pizza" },
      ],
      correctChoice: 2,
    },
    {
      question:
        "What is the name of the Canadian police force that investigates crimes related to national security?",
      choices: [
        { id: 0, text: "The Royal Canadian Mounted Police" },
        { id: 1, text: "The Canadian Security Intelligence Service" },
        { id: 2, text: "The Canadian Border Services Agency" },
        { id: 3, text: "The Canadian Forces" },
      ],
      correctChoice: 1,
    },
    {
      question:
        "What is the name of the Canadian healthcare system that provides publicly funded healthcare to all residents?",
      choices: [
        { id: 0, text: "Medicaid" },
        { id: 1, text: "Medicare" },
        { id: 2, text: "Medi-Cal" },
        { id: 3, text: "MediShare" },
      ],
      correctChoice: 1,
    },
    {
      question: "Which of the following is a Canadian holiday?",
      choices: [
        { id: 0, text: "Cinco de Mayo" },
        { id: 1, text: "St. Patrick's Day" },
        { id: 2, text: "Victoria Day" },
        { id: 3, text: "Independence Day" },
      ],
      correctChoice: 2,
    },
    {
      question:
        "What is the name of the national park that is home to Banff, the oldest national park in Canada?",
      choices: [
        { id: 0, text: "Yoho National Park" },
        { id: 1, text: "Jasper National Park" },
        { id: 2, text: "Waterton Lakes National Park" },
        { id: 3, text: "Banff National Park" },
      ],
      correctChoice: 3,
    },
  ];
  return (
    <View>
      <QuizRunner questions={quiz4} quizId="quiz4"></QuizRunner>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Quiz4Screen;
