import { Text, StyleSheet, ScrollView, Button } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";

const TheoryListScreen = (): JSX.Element => {
  const navigation = useNavigation();
  return (
    <ScrollView>
      <Button
        title="Oath"
        onPress={() => navigation.navigate("OathScreen" as never)}
      />
    </ScrollView>
  );
};

const styles = StyleSheet.create({});

export default TheoryListScreen;
