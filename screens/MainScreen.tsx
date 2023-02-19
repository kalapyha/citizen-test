import { View, StyleSheet, Image, SafeAreaView } from "react-native";
import Button from "../components/CustomButton";
import React from "react";
import Book from "../assets/book.svg";
import Clipboard from "../assets/clipboard.svg";

const MainScreen = ({ navigation }: { navigation: any }): JSX.Element => {
  return (
    <SafeAreaView
      style={{
        height: "100%",
        paddingHorizontal: 10,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <View>
        <Button
          title="Theory"
          onPress={() => navigation.navigate("TheoryListScreen")}
          image={<Book width={20} height={20} />}
        />
        <Button
          title="Quizzes"
          onPress={() => navigation.navigate("QuizList")}
          image={<Clipboard width={20} height={20} />}
        />
      </View>
      <View
        style={{
          alignSelf: "flex-end",
          position: "absolute",
          bottom: 0,
          right: 0,
        }}
      >
        <Image
          source={require("../assets/landscape.png")}
          //   resizeMethod="scale"
          //   resizeMode="repeat"
          style={{ height: 115, width: 400 }}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
