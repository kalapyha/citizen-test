import { StyleSheet, View } from "react-native";
import React from "react";
import QuizRunner from "../../components/QuizRunner";
const Quiz2Screen = (): JSX.Element => {
  const quiz3 = [
    {
      question:
        "Which European country first established colonies in what is now Canada?",
      choices: [
        { id: 0, text: "France" },
        { id: 1, text: "Spain" },
        { id: 2, text: "England" },
        { id: 3, text: "Portugal" },
      ],
      correctChoice: 0,
    },
    {
      question: "Who was the first European explorer to land in Canada?",
      choices: [
        { id: 0, text: "Christopher Columbus" },
        { id: 1, text: "John Cabot" },
        { id: 2, text: "Jacques Cartier" },
        { id: 3, text: "Samuel de Champlain" },
      ],
      correctChoice: 2,
    },
    {
      question:
        "Which battle is considered a turning point in the French and Indian War?",
      choices: [
        { id: 0, text: "Battle of Quebec" },
        { id: 1, text: "Battle of Bunker Hill" },
        { id: 2, text: "Battle of Trenton" },
        { id: 3, text: "Battle of Saratoga" },
      ],
      correctChoice: 0,
    },
    {
      question: "When did Canada become a country?",
      choices: [
        { id: 0, text: "July 1, 1867" },
        { id: 1, text: "July 1, 1877" },
        { id: 2, text: "July 1, 1887" },
        { id: 3, text: "July 1, 1897" },
      ],
      correctChoice: 0,
    },
    {
      question:
        "What event led to the forced relocation of thousands of Indigenous people in Canada?",
      choices: [
        { id: 0, text: "The Great Depression" },
        { id: 1, text: "The First World War" },
        { id: 2, text: "The Second World War" },
        { id: 3, text: "The Indian Act" },
      ],
      correctChoice: 3,
    },
    {
      question:
        "Which Canadian soldier is known for his bravery during the Second World War?",
      choices: [
        { id: 0, text: "Billy Bishop" },
        { id: 1, text: "Arthur Currie" },
        { id: 2, text: "Terry Fox" },
        { id: 3, text: "Tommy Prince" },
      ],
      correctChoice: 3,
    },
    {
      question:
        "Which of the following was a major issue during the Quiet Revolution in Quebec?",
      choices: [
        { id: 0, text: "Secession from Canada" },
        { id: 1, text: "The fight for women's rights" },
        { id: 2, text: "The fight for LGBTQ+ rights" },
        { id: 3, text: "The role of the Catholic Church in society" },
      ],
      correctChoice: 3,
    },
    {
      question:
        "Which of the following is NOT a significant event in Canadian history?",
      choices: [
        { id: 0, text: "The discovery of insulin" },
        { id: 1, text: "The building of the Canadian Pacific Railway" },
        { id: 2, text: "The invention of the telephone" },
        { id: 3, text: "The signing of NAFTA" },
      ],
      correctChoice: 3,
    },
    {
      question: "Who was Canada's first female Prime Minister?",
      choices: [
        { id: 0, text: "Kim Campbell" },
        { id: 1, text: "Pauline Marois" },
        { id: 2, text: "Rona Ambrose" },
        { id: 3, text: "Christy Clark" },
      ],
      correctChoice: 0,
    },
    {
      question:
        "Which Canadian athlete is known for winning four gold medals at the 1936 Olympics?",
      choices: [
        { id: 0, text: "Donovan Bailey" },
        { id: 1, text: "Clara Hughes" },
        { id: 2, text: "Hayley Wickenheiser" },
        { id: 3, text: "Jesse Owens" },
      ],
      correctChoice: 3,
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
