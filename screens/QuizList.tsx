import { Text, StyleSheet, View } from "react-native";
import React from "react";
import QuizCard from "../components/QuizCard";
import { shuffleArray } from "../utils/helpers";
import QuizRunner from "../components/QuizRunner";
const QuizList = (): JSX.Element => {
  return (
    <View>
      <Text>Quiz-1</Text>
      <Text>Quiz-2</Text>
      <Text>Quiz-3</Text>
      <Text>Quiz-4</Text>
      <QuizRunner></QuizRunner>
      <QuizCard
        question={"In computing, what does MIDI stand for?"}
        choices={shuffleArray([
          "Musical Instrument Digital Interface",
          "Musical Interface of Digital Instruments",
          "Modular Interface of Digital Instruments",
          "Musical Instrument Data Interface",
        ])}
        correctChoice={"Musical Instrument Digital Interface"}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default QuizList;
