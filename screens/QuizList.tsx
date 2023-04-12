import { Text, StyleSheet, Button, SectionList, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import React, { useState, useEffect } from "react";
import Colors from "../utils/colors";
import { getQuizResults } from "../utils/storage";

const QuizList = (): JSX.Element => {
  const [quizResults, setQuizResults] = useState([]);

  const navigation = useNavigation();

  useEffect(() => {
    const fetchQuizResults = async () => {
      const results = await getQuizResults("quiz1");
      setQuizResults(results);
    };
    fetchQuizResults();
  });
  console.log(quizResults);
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: "Chapter 1",
            data: [
              <Button
                color={Colors.primary500}
                title="Quiz 1 | Oath"
                onPress={() => navigation.navigate("Quiz1Screen" as never)}
              />,
              // <Text>{quizResults}</Text>
              <Button
                color={Colors.primary500}
                title="Quiz 2 | Who We Are"
                onPress={() => navigation.navigate("WhoWeAreScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 3 | Canada's History"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
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
                title="Quiz 1 | How Canadians Govern "
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 2 | Federal Elections"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 3 | The Justice System"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 4 | Canadian Symbols"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 5 | Canada's Economy"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
            ],
          },
          {
            title: "Chapter 3",
            data: [
              <Button
                color={Colors.primary500}
                title="Quiz 1 | Canada's Regions"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 2 | The Atlantic Provinces"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 3 | Central Canada"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 4 | The Prairie Provinces"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 5 | The West Coast"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Quiz 6 | The Northern Territories"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
            ],
          },
        ]}
        renderItem={({ item }) => (
          <View style={styles.item}>
            {item}
            <Text>43</Text>
          </View>
        )}
        renderSectionHeader={({ section }) => (
          <Text style={styles.sectionHeader}>{section.title}</Text>
        )}
        keyExtractor={(item) =>
          item?.props?.title
            ? `basicListEntry-${item.props.title}`
            : `basicListEntry-${Math.floor(Math.random() * 1000)}`
        }
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
