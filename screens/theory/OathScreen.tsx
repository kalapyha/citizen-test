import { ScrollView, StyleSheet, Text, Button } from "react-native";
import React from "react";
import { s } from "../../Style";

const oathText =
  "I swear (or affirm) That I will be faithful And bear true allegiance To His Majesty King Charles the Third King of Canada His Heirs and Successors And that I will faithfully observe The laws of Canada Including the Constitution Which recognizes and affirms The Aboriginal and treaty rights of First Nations, Inuit and Métis peoples And fulfil my duties as a Canadian citizen.";
const OathScreen = () => {
  return (
    <ScrollView>
      <Text style={s.heading}>Understanding the Oath</Text>
      <Text style={s.text}>
        In Canada, we profess our loyalty to a person who represents all
        Canadians and not to a document such as a constitution, a banner such as
        a flag, or a geopolitical entity such as a country. In our
        <Text style={s.textHighlighted}> constitutional monarchy</Text>, these
        elements are encompassed by the Sovereign (Queen or King). {"\n"}It is a
        remarkably simple yet powerful principle:
        {"\n"}
        <Text style={s.textHighlighted}>
          Canada is personified by the Sovereign
        </Text>{" "}
        just as the Sovereign is personified by Canada.
      </Text>
      <Text style={[s.text, s.italicCenter]}>{oathText}</Text>
    </ScrollView>
  );
};

export default OathScreen;

const styles = StyleSheet.create({});
