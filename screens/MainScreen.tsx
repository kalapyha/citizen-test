import {
  View,
  StyleSheet,
  Image,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import Button from "../components/CustomButton";
import React from "react";
import Book from "../assets/book.svg";
import Clipboard from "../assets/clipboard.svg";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "../utils/colors";

const MainScreen = ({ navigation }: { navigation: any }): JSX.Element => {
  return (
    <LinearGradient colors={Colors.bgGradient}>
      <ImageBackground
        source={require("../assets/pattern_new.png")}
        imageStyle={{ opacity: 0.05 }}
        resizeMode={"cover"}
      >
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
          <Image
            source={require("../assets/landscape.png")}
            style={{
              height: 115,
              width: 400,
              alignSelf: "flex-end",
              position: "absolute",
              bottom: 0,
              right: 0,
              opacity: 0.4,
            }}
          />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({});

export default MainScreen;
