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

type OptionProps = {
  currentOption: string;
  option: string;
  isCorrect?: boolean;
  isError?: boolean;
  validateHandler: (option: string) => void;
};
const Option = ({
  currentOption,
  option,
  isCorrect,
  isError,
  validateHandler,
}: OptionProps): JSX.Element => {
  const getBgColor = () => {
    if (currentOption === option && isCorrect) {
      return colors.successMain;
    } else if (currentOption === option && isError) {
      return colors.errorMain;
    }
    return colors.primary200;
  };
  return (
    <TouchableOpacity
      onPress={() => validateHandler(option)}
      //   disabled={isOptionsDisabled}
      key={option}
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
    >
      <Text style={{ fontSize: 16, color: colors.white }}>{option}</Text>
    </TouchableOpacity>
  );
};

interface QuizCardProps {
  question: string;
  choices: string[];
  correctChoice: string;
}

const QuizCard = ({
  question,
  choices,
  correctChoice,
}: QuizCardProps): JSX.Element => {
  const [isCorrect, setIsCorrect] = useState(false);
  const [isError, setIsError] = useState(false);
  const [currentOption, setCurrentOption] = useState("");

  const resetQuestions = () => {
    setIsError(false);
    setIsCorrect(false);
    setCurrentOption("");
  };

  const validateHandler = (answer: string) => {
    if (answer === correctChoice) {
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
    <>
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
              width: 150, // TODO make dynamic
            },
          ]}
        ></Animated.View>
      </View>
      <Text style={{ margin: 20 }}>{correctChoice}</Text>
      <Text style={{ margin: 20 }}>{question}</Text>
      {choices.map((question) => {
        return (
          <Option
            key={question}
            currentOption={currentOption}
            option={question}
            validateHandler={validateHandler}
            isCorrect={isCorrect}
            isError={isError}
          />
        );
      })}
      <View
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
        }}
      >
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
    </>
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
