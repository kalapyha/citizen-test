import { Text, StyleSheet, Button, SectionList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import Colors from "../utils/colors";
import { getQuizResults } from "../utils/storage";

const QuizList = (): JSX.Element => {
  const [quizResults, setQuizResults] = useState({
    quiz1: "",
    quiz2: "",
    quiz3: "",
    quiz4: "",
    quiz5: "",
    quiz6: "",
    quiz7: "",
    quiz8: "",
    quiz9: "",
    quiz10: "",
    quiz11: "",
    quiz12: "",
    quiz13: "",
    quiz14: "",
    quiz15: "",
  });

  const navigation = useNavigation();

  useEffect(() => {
    const fetchQuizResults = async () => {
      const quiz1 = await getQuizResults("quiz1");
      const quiz2 = await getQuizResults("quiz2");
      const quiz3 = await getQuizResults("quiz3");
      const quiz4 = await getQuizResults("quiz4");
      const quiz5 = await getQuizResults("quiz5");
      const quiz6 = await getQuizResults("quiz6");
      const quiz7 = await getQuizResults("quiz7");
      const quiz8 = await getQuizResults("quiz8");
      const quiz9 = await getQuizResults("quiz9");
      const quiz10 = await getQuizResults("quiz10");
      const quiz11 = await getQuizResults("quiz11");
      const quiz12 = await getQuizResults("quiz12");
      const quiz13 = await getQuizResults("quiz13");
      const quiz14 = await getQuizResults("quiz14");
      const quiz15 = await getQuizResults("quiz15");
      setQuizResults({
        ...quizResults,
        quiz1: quiz1[0] || "",
        quiz2: quiz2[0] || "",
        quiz3: quiz3[0] || "",
        quiz4: quiz4[0] || "",
        quiz5: quiz5[0] || "",
        quiz6: quiz6[0] || "",
        quiz7: quiz7[0] || "",
        quiz8: quiz8[0] || "",
        quiz9: quiz9[0] || "",
        quiz10: quiz10[0] || "",
        quiz11: quiz11[0] || "",
        quiz12: quiz12[0] || "",
        quiz13: quiz13[0] || "",
        quiz14: quiz14[0] || "",
        quiz15: quiz15[0] || "",
      });
    };
    fetchQuizResults();
  }, []);
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: "Chapter 1",
            data: [
              <Button
                testID="quiz1"
                color={Colors.primary500}
                title="Quiz 1 | Oath"
                onPress={() => navigation.navigate("Quiz1Screen" as never)}
              />,
              <Button
                testID="quiz2"
                color={Colors.primary500}
                title="Quiz 2 | Who We Are"
                onPress={() => navigation.navigate("Quiz2Screen" as never)}
              />,
              <Button
                testID="quiz3"
                color={Colors.primary500}
                title="Quiz 3 | Canada's History"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                testID="quiz4"
                color={Colors.primary500}
                title="Quiz 4 | Modern Canada"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
            ],
          },
          {
            title: "Chapter 2",
            data: [
              <Button
                color={Colors.primary500}
                title="Quiz 5 | How Canadians Govern "
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 6 | Federal Elections"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 7 | The Justice System"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 8 | Canadian Symbols"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 9 | Canada's Economy"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
            ],
          },
          {
            title: "Chapter 3",
            data: [
              <Button
                color={Colors.primary500}
                title="Quiz 10 | Canada's Regions"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 11 | The Atlantic Provinces"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 12 | Central Canada"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 13 | The Prairie Provinces"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 14 | The West Coast"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 15 | The Northern Territories"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
            ],
          },
          {
            title: "Favorites",
            data: [
              <Button
                color={Colors.primary500}
                title="Your favorite questions"
                onPress={() => navigation.navigate("FavoritesScreen" as never)}
              />,
            ],
          },
        ]}
        renderItem={({ item }) => {
          return (
            <View style={styles.item}>
              {item}
              {/* @ts-ignore */}
              <Text>{quizResults[item.props.testID] || ""}</Text>
            </View>
          );
        }}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) =>
          item?.props?.title
            ? `basicListEntry-${item.props.title}`
            : `basicListEntry-${Math.floor(Math.random() * 1000)}`
        }
        style={{ marginBottom: 20 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.white,
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: "bold",
    backgroundColor: Colors.divider,
  },
  item: {
    borderColor: Colors.divider,
    borderBottomWidth: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 5,
    paddingRight: 15,
    fontSize: 18,
    height: 44,
  },
  linkItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    paddingLeft: 5,
    height: 44,
  },
  linkItemText: {
    fontSize: 18,
    padding: 5,
    color: Colors.primary500,
  },
});

export default QuizList;
