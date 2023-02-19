import { ScrollView, StyleSheet, Text, Button } from "react-native";
import React from "react";

const oathText =
  "I swear (or affirm) That I will be faithful And bear true allegiance To His Majesty King Charles the Third King of Canada His Heirs and Successors And that I will faithfully observe The laws of Canada Including the Constitution Which recognizes and affirms The Aboriginal and treaty rights of First Nations, Inuit and Métis peoples And fulfil my duties as a Canadian citizen.";
const OathScreen = () => {
  return (
    <ScrollView>
      <Text style={{ fontSize: 20, fontWeight: "800" }}>
        Understanding the Oath
      </Text>
      <Text>
        In Canada, we profess our loyalty to a person who represents all
        Canadians and not to a document such as a constitution, a banner such as
        a flag, or a geopolitical entity such as a country. In our
        constitutional monarchy, these elements are encompassed by the Sovereign
        (Queen or King). It is a remarkably simple yet powerful principle:
        Canada is personified by the Sovereign just as the Sovereign is
        personified by Canada.
      </Text>
      <Text style={{ textAlign: "center", fontStyle: "italic" }}>
        {oathText}
      </Text>
    </ScrollView>
  );
};

export default OathScreen;

const styles = StyleSheet.create({});
