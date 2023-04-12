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

const saveQuizToFavorites = async (
  question: string,
  choices: string[],
  correctChoice: string
) => {
  try {
    const existingFavorites = (await AsyncStorage.getItem(
      `@favorite:quizzes`
    )) as string;
    const results = JSON.parse(existingFavorites) || [];
    results.push({ question, choices, correctChoice });

    const uniqueArrayOfQuestions = Array.from(
      new Set(results.map((obj: { question: string }) => obj.question))
    ).map((question) =>
      results.find((obj: { question: unknown }) => obj.question === question)
    );

    await AsyncStorage.setItem(
      `@favorite:quizzes`,
      JSON.stringify(uniqueArrayOfQuestions)
    );
  } catch (error) {
    console.log("Error saving quiz to favorites:", error);
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

const getFavorites = async () => {
  try {
    const results = (await AsyncStorage.getItem(`@favorite:quizzes`)) as string;
    return JSON.parse(results) || [];
  } catch (error) {
    console.log("Error getting favorites quizzes:", error);
  }
};

export { saveQuizResults, getQuizResults, saveQuizToFavorites, getFavorites };
