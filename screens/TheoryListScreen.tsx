import {
  Text,
  StyleSheet,
  Linking,
  Button,
  SectionList,
  View,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import React from "react";
import Goto from "../assets/goto.svg";
import Colors from "../utils/colors";

const TheoryListScreen = (): JSX.Element => {
  const navigation = useNavigation();
  const handlePress = () => {
    Linking.openURL("https://www.cic.gc.ca/");
  };
  return (
    <View style={styles.container}>
      <SectionList
        sections={[
          {
            title: "Chapter 1",
            data: [
              <Button
                color={Colors.primary500}
                title="Oath"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Who We Are"
                onPress={() => navigation.navigate("WhoWeAreScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Canada's History"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Modern Canada"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
            ],
          },
          {
            title: "Chapter 2",
            data: [
              <Button
                color={Colors.primary500}
                title="How Canadians Govern Themselves"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Federal Elections"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="The Justice System"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Canadian Symbols"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Canada's Economy"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
            ],
          },
          {
            title: "Chapter 3",
            data: [
              <Button
                color={Colors.primary500}
                title="Canada's Regions"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="The Atlantic Provinces"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="Central Canada"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="The Prairie Provinces"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="The West Coast"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
              <Button
                color={Colors.primary500}
                title="The Northern Territories"
                onPress={() => navigation.navigate("OathScreen" as never)}
              />,
            ],
          },
          {
            title: "For More Information",
            data: [
              <TouchableOpacity onPress={handlePress} style={styles.linkItem}>
                <Text style={styles.linkItemText}>
                  {"Download PDF Version on www.cic.gc.ca"}
                </Text>
                <Goto fill={Colors.primary500} />
              </TouchableOpacity>,
              null,
            ],
          },
        ]}
        renderItem={({ item }) => <View style={styles.item}>{item}</View>}
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
    alignItems: "flex-start",
    paddingLeft: 5,
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

export default TheoryListScreen;
