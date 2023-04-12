import { StyleSheet, View } from "react-native";
import React from "react";
import QuizRunner from "../../components/QuizRunner";
const Quiz4Screen = (): JSX.Element => {
  const quiz4 = [
    {
      question:
        "Which of the following is NOT a territory or province in Canada?",
      choices: ["Quebec", "Nova Scotia", "Nunavut", "Manitoba"],
      correctChoice: "Nova Scotia",
    },
    {
      question: "Who is the current Prime Minister of Canada?",
      choices: [
        "Stephen Harper",
        "Justin Trudeau",
        "Andrew Scheer",
        "Jagmeet Singh",
      ],
      correctChoice: "Justin Trudeau",
    },
    {
      question:
        "Which of the following is a significant issue in Canadian politics today?",
      choices: [
        "Climate change",
        "The space program",
        "Immigration from Europe",
        "The fight against communism",
      ],
      correctChoice: "Climate change",
    },
    {
      question: "What is the name of Canada's national anthem?",
      choices: [
        "O Canada",
        "God Save the Queen",
        "The Maple Leaf Forever",
        "Oh Canada",
      ],
      correctChoice: "O Canada",
    },
    {
      question: "Which of the following is a major Canadian industry?",
      choices: [
        "Oil and gas",
        "Coal mining",
        "Steel production",
        "Automobile manufacturing",
      ],
      correctChoice: "Oil and gas",
    },
    {
      question: "Which of the following is a Canadian cultural contribution?",
      choices: ["The Mona Lisa", "The Eiffel Tower", "Poutine", "Pizza"],
      correctChoice: "Poutine",
    },
    {
      question:
        "What is the name of the Canadian police force that investigates crimes related to national security?",
      choices: [
        "The Royal Canadian Mounted Police",
        "The Canadian Security Intelligence Service",
        "The Canadian Border Services Agency",
        "The Canadian Forces",
      ],
      correctChoice: "The Canadian Security Intelligence Service",
    },
    {
      question:
        "What is the name of the Canadian healthcare system that provides publicly funded healthcare to all residents?",
      choices: ["Medicaid", "Medicare", "Medi-Cal", "MediShare"],
      correctChoice: "Medicare",
    },
    {
      question: "Which of the following is a Canadian holiday?",
      choices: [
        "Cinco de Mayo",
        "St. Patrick's Day",
        "Victoria Day",
        "Independence Day",
      ],
      correctChoice: "Victoria Day",
    },
    {
      question:
        "What is the name of the national park that is home to Banff, the oldest national park in Canada?",
      choices: [
        "Yoho National Park",
        "Jasper National Park",
        "Waterton Lakes National Park",
        "Banff National Park",
      ],
      correctChoice: "Banff National Park",
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
