import { StyleSheet } from "react-native";
import colors from "./utils/colors";

export const s = StyleSheet.create({
  text: {
    fontSize: 16,
    textAlign: "justify",
    padding: 10,
  },
  heading: {
    fontSize: 20,
    fontWeight: "800",
    padding: 10,
  },
  italicCenter: {
    textAlign: "center",
    fontStyle: "italic",
  },
  textHighlighted: {
    backgroundColor: colors.accent,
  },
});
