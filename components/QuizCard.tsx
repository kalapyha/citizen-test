import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Animated,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import colors from "../utils/colors";
import CustomButton from "./CustomButton";
import Ionicons from "@expo/vector-icons/Ionicons";
import { s } from "../Style";
import { saveQuizToFavorites } from "../utils/storage";

interface Choice {
  id: number;
  text: string;
}

type OptionProps = {
  currentOption: Choice | null;
  option: Choice;
  isCorrect?: boolean;
  isError?: boolean;
  disabled?: boolean;
  validateHandler: (option: Choice) => void;
};
const Option = ({
  currentOption,
  option,
  isCorrect,
  isError,
  validateHandler,
  disabled,
}: OptionProps): JSX.Element => {
  const getBgColor = () => {
    if (currentOption?.id === option.id && isCorrect) {
      return colors.successMain;
    } else if (currentOption?.id === option.id && isError) {
      return colors.errorMain;
    }
    return colors.primary200;
  };
  return (
    <TouchableOpacity
      onPress={() => validateHandler(option)}
      key={option.id}
      style={[
        {
          backgroundColor: getBgColor(),
          minHeight: 50,
          borderRadius: 8,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 15,
          marginVertical: 10,
          marginHorizontal: 10,
        },
        styles.shadowProp,
      ]}
      disabled={disabled}
    >
      <Text style={{ fontSize: 16, color: colors.white }}>{option.text}</Text>
    </TouchableOpacity>
  );
};

interface QuizCardProps {
  question: string;
  choices: Array<{ id: number; text: string }>;
  correctChoice: number;
  handleAnswer: (answerId: number) => void;
  questionsLength: number;
  currentQuestionIndex: number;
  isFavorites: boolean;
}

const QuizCard = ({
  question,
  choices,
  correctChoice,
  handleAnswer,
  questionsLength,
  currentQuestionIndex,
  isFavorites,
}: QuizCardProps): JSX.Element => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentOption, setCurrentOption] = useState<Choice | null>(null);
  const [isFavorite, setIsFavorite] = useState(false);

  const resetQuestions = () => {
    setIsError(false);
    setIsCorrect(false);
    setIsFavorite(false);
    if (currentOption) {
      handleAnswer(currentOption.id);
    }
    setCurrentOption(null);
  };

  const validateHandler = (answer: Choice) => {
    if (answer.id === correctChoice) {
      setIsCorrect(true);
      setIsError(false);
      setCurrentOption(answer);
    } else {
      setIsCorrect(false);
      setIsError(true);
      setCurrentOption(answer);
    }
  };

  return (
    <View style={{ marginTop: 20, marginLeft: 10, marginRight: 10 }}>
      <StatusBar barStyle="light-content" backgroundColor={colors.primary500} />
      <View
        style={{
          width: "100%",
          height: 20,
          borderRadius: 20,
          backgroundColor: colors.disabled,
        }}
      >
        <Animated.View
          style={[
            {
              height: 20,
              borderRadius: 20,
              backgroundColor: colors.primary500,
            },
            {
              width: `${(currentQuestionIndex / questionsLength) * 100}%`,
            },
          ]}
        ></Animated.View>
      </View>
      <Text style={s.text}>{question}</Text>
      {choices.map((choice) => {
        return (
          <Option
            key={choice.id}
            currentOption={currentOption}
            option={choice}
            validateHandler={validateHandler}
            isCorrect={isCorrect}
            isError={isError}
            disabled={!!currentOption}
          />
        );
      })}
      <View
        style={{
          marginTop: 20,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: "row",
        }}
      >
        {!isFavorites && (
          <CustomButton
            disabled={isFavorite}
            title=""
            onPress={() => {
              setIsFavorite(true);
              saveQuizToFavorites(question, choices, correctChoice);
            }}
            isIconButton
            image={
              <Ionicons
                name={isFavorite ? "star-sharp" : "star-outline"}
                size={20}
              />
            }
          />
        )}
        <CustomButton
          disabled={!Boolean(currentOption)}
          title="Next"
          onPress={resetQuestions}
          buttonStylesOverride={{ width: "40%" }}
          image={
            <Ionicons name="ios-chevron-forward" size={20} color="white" />
          }
        />
      </View>
    </View>
  );
};

export default QuizCard;

const styles = StyleSheet.create({
  shadowProp: {
    shadowColor: colors.shadow,
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },
});
