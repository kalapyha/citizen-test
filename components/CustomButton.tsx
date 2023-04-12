import React from "react";
import { TouchableOpacity, Text, StyleSheet, View } from "react-native";
import colors from "../utils/colors";

type ButtonProps = {
  title: string;
  onPress: () => void;
  isIconButton?: boolean;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  buttonStylesOverride?: any;
  buttonTextOverride?: any;
  iconStyleOverride?: any;
  image?: JSX.Element;
  disabled?: boolean;
};

function CustomButton({
  title,
  onPress,
  backgroundColor,
  textColor,
  borderColor,
  buttonStylesOverride,
  buttonTextOverride,
  iconStyleOverride,
  image,
  disabled,
  isIconButton = false,
}: ButtonProps) {
  if (isIconButton) {
    return (
      <TouchableOpacity onPress={onPress} disabled={disabled || false}>
        <View style={[{ marginLeft: 20 }, { ...iconStyleOverride }]}>
          {image}
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: disabled
            ? colors.disabled
            : backgroundColor || colors.primary500,
          borderColor: disabled
            ? colors.transparent
            : borderColor || colors.primary500,
          ...buttonStylesOverride,
        },
      ]}
      onPress={onPress}
      disabled={disabled || false}
    >
      <Text
        style={[
          styles.buttonText,
          { color: textColor || colors.white },
          { ...buttonTextOverride },
        ]}
      >
        {title}
      </Text>
      <View style={[{ marginLeft: 5 }, { ...iconStyleOverride }]}>{image}</View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 5,
    borderWidth: 2,
    paddingVertical: 10,
    paddingHorizontal: 20,
    margin: 10,
  },
  buttonText: {
    fontSize: 18,
    paddingHorizontal: 5,
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default CustomButton;
