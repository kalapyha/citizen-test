import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TheoryListScreen from "./screens/TheoryListScreen";
import QuizList from "./screens/QuizList";
import MainScreen from "./screens/MainScreen";
import OathScreen from "./screens/theory/OathScreen";
import WhoWeAreScreen from "./screens/theory/WhoWeAreScreen";
import Quiz1Screen from "./screens/quizzes/Quiz1Screen";
import Quiz2Screen from "./screens/quizzes/Quiz2Screen";
import FavoritesScreen from "./screens/quizzes/FavoritesScreen";

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
            }}
          />
          <Stack.Screen
            name="OathScreen"
            component={OathScreen}
            options={{ title: "Oath" }}
          />
          <Stack.Screen
            name="WhoWeAreScreen"
            component={WhoWeAreScreen}
            options={{ title: "Who we are" }}
          />
          <Stack.Screen
            name="Quiz1Screen"
            component={Quiz1Screen}
            options={{ title: "Quiz 1" }}
          />
          <Stack.Screen
            name="Quiz2Screen"
            component={Quiz2Screen}
            options={{ title: "Quiz 2" }}
          />
          <Stack.Screen
            name="FavoritesScreen"
            component={FavoritesScreen}
            options={{ title: "Favorite questions" }}
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
