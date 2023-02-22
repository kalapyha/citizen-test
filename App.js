import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TheoryListScreen from "./screens/TheoryListScreen";
import QuizList from "./screens/QuizList";
import MainScreen from "./screens/MainScreen";
import OathScreen from "./screens/theory/OathScreen";

export default function App() {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
          }}
        >
          <Stack.Screen
            name="Home"
            component={MainScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="TheoryListScreen"
            component={TheoryListScreen}
            options={{ title: "Theory Preparation Guide" }}
          />
          <Stack.Screen
            name="QuizList"
            component={QuizList}
            options={{
              title: "List of Quizzes",
              headerRight: () => <Text>+</Text>,
            }}
          />
          <Stack.Screen
            name="OathScreen"
            component={OathScreen}
            options={{ title: "Oath" }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
