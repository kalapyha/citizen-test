import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

type ButtonProps = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
  borderColor?: string;
  buttonStylesOverride?: any;
  image?: JSX.Element;
};

function CustomButton({
  title,
  onPress,
  backgroundColor,
  textColor,
  borderColor,
  buttonStylesOverride,
  image,
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        {
          backgroundColor: backgroundColor || "#2572b4",
          borderColor: borderColor || "#2572b4",
          ...buttonStylesOverride,
        },
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, { color: textColor || "#fff" }]}>
        {title}
      </Text>
      <Text style={{ textAlign: "center", marginBottom: -5, marginLeft: 5 }}>
        {image}
      </Text>
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
