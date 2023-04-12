import AsyncStorage from "@react-native-async-storage/async-storage";

const saveQuizResults = async (quizResults: string, quizId: string) => {
  try {
    // const existingResults = (await AsyncStorage.getItem(
    //   `@${quizId}:quizResults`
    // )) as string;
    // const results = JSON.parse(existingResults) || [];
    // results.push(quizResults);
    await AsyncStorage.setItem(
      `@${quizId}:quizResults`,
      JSON.stringify([String(quizResults)])
    );
  } catch (error) {
    console.log("Error saving quiz results:", error);
  }
};

const getQuizResults = async (quizId: string) => {
  try {
    const results = (await AsyncStorage.getItem(
      `@${quizId}:quizResults`
    )) as string;
    return JSON.parse(results) || [];
  } catch (error) {
    console.log("Error getting quiz results:", error);
  }
};

export { saveQuizResults, getQuizResults };
