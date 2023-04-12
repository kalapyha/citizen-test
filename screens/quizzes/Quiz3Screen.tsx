import { StyleSheet, View } from "react-native";
import React from "react";
import QuizRunner from "../../components/QuizRunner";
const Quiz2Screen = (): JSX.Element => {
  const quiz3 = [
    {
      question:
        "Which European country first established colonies in what is now Canada?",
      choices: ["France", "Spain", "England", "Portugal"],
      correctChoice: "France",
    },
    {
      question: "Who was the first European explorer to land in Canada?",
      choices: [
        "Christopher Columbus",
        "John Cabot",
        "Jacques Cartier",
        "Samuel de Champlain",
      ],
      correctChoice: "Jacques Cartier",
    },
    {
      question:
        "Which battle is considered a turning point in the French and Indian War?",
      choices: [
        "Battle of Quebec",
        "Battle of Bunker Hill",
        "Battle of Trenton",
        "Battle of Saratoga",
      ],
      correctChoice: "Battle of Quebec",
    },
    {
      question: "When did Canada become a country?",
      choices: ["July 1, 1867", "July 1, 1877", "July 1, 1887", "July 1, 1897"],
      correctChoice: "July 1, 1867",
    },
    {
      question:
        "What event led to the forced relocation of thousands of Indigenous people in Canada?",
      choices: [
        "The Great Depression",
        "The First World War",
        "The Second World War",
        "The Indian Act",
      ],
      correctChoice: "The Indian Act",
    },
    {
      question:
        "Which Canadian soldier is known for his bravery during the Second World War?",
      choices: ["Billy Bishop", "Arthur Currie", "Terry Fox", "Tommy Prince"],
      correctChoice: "Tommy Prince",
    },
    {
      question:
        "Which of the following was a major issue during the Quiet Revolution in Quebec?",
      choices: [
        "Secession from Canada",
        "The fight for women's rights",
        "The fight for LGBTQ+ rights",
        "The role of the Catholic Church in society",
      ],
      correctChoice: "The role of the Catholic Church in society",
    },
    {
      question:
        "Which of the following is NOT a significant event in Canadian history?",
      choices: [
        "The discovery of insulin",
        "The building of the Canadian Pacific Railway",
        "The invention of the telephone",
        "The signing of NAFTA",
      ],
      correctChoice: "The signing of NAFTA",
    },
    {
      question: "Who was Canada's first female Prime Minister?",
      choices: [
        "Kim Campbell",
        "Pauline Marois",
        "Rona Ambrose",
        "Christy Clark",
      ],
      correctChoice: "Kim Campbell",
    },
    {
      question:
        "Which Canadian athlete is known for winning four gold medals at the 1936 Olympics?",
      choices: [
        "Donovan Bailey",
        "Clara Hughes",
        "Hayley Wickenheiser",
        "Jesse Owens",
      ],
      correctChoice: "Jesse Owens",
    },
  ];
  return (
    <View>
      <QuizRunner questions={quiz3} quizId="quiz3"></QuizRunner>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Quiz2Screen;
