import AsyncStorage from "@react-native-async-storage/async-storage";

// New interfaces for detailed quiz progress
interface FailedQuestionInfo {
  questionText: string;
  userAnswerId: number;
  correctAnswerId: number;
  choices: Array<{ id: number; text: string }>;
}

interface DetailedQuizProgress {
  quizId: string;
  score: number;
  totalQuestions: number;
  failedQuestions: FailedQuestionInfo[];
  percentage: string;
  timestamp: number;
}

// Question structure for favorites and general use, matches QuestionProps
interface StoredQuestion {
  question: string;
  choices: Array<{ id: number; text: string }>;
  correctChoice: number; // This is the ID of the correct choice
}

const saveQuizResults = async (
  detailedProgress: DetailedQuizProgress,
  quizId: string
) => {
  try {
    await AsyncStorage.setItem(
      `@${quizId}:quizResults`,
      JSON.stringify(detailedProgress)
    );
  } catch (error) {
    console.log("Error saving detailed quiz results:", error);
  }
};

const getDetailedQuizProgress = async (
  quizId: string
): Promise<DetailedQuizProgress | null> => {
  try {
    const results = await AsyncStorage.getItem(`@${quizId}:quizResults`);
    if (results !== null) {
      return JSON.parse(results) as DetailedQuizProgress;
    }
    return null;
  } catch (error) {
    console.log("Error getting detailed quiz results:", error);
    return null;
  }
};

const saveQuizToFavorites = async (
  question: string,
  choices: Array<{ id: number; text: string }>,
  correctChoiceId: number
) => {
  try {
    const existingFavoritesJson = await AsyncStorage.getItem(
      `@favorite:quizzes`
    );
    const favorites: StoredQuestion[] = existingFavoritesJson
      ? JSON.parse(existingFavoritesJson)
      : [];

    // Create new favorite question object
    const newFavorite: StoredQuestion = {
      question,
      choices,
      correctChoice: correctChoiceId,
    };

    // Prevent duplicates by checking question text
    const isDuplicate = favorites.some(
      (fav) => fav.question === newFavorite.question
    );

    if (!isDuplicate) {
      favorites.push(newFavorite);
      await AsyncStorage.setItem(
        `@favorite:quizzes`,
        JSON.stringify(favorites)
      );
    }
  } catch (error) {
    console.log("Error saving quiz to favorites:", error);
  }
};

// This function retrieves the old simple quiz results format
const getQuizResults = async (quizId: string) => {
  try {
    const results = (await AsyncStorage.getItem(
      `@${quizId}:quizResults`
    )) as string;
    // Attempt to parse, might be new format or old.
    // For robust handling, might need versioning or type checking if both formats can coexist.
    // For now, it will likely fail or return unexpected results if it encounters the new DetailedQuizProgress.
    return JSON.parse(results) || [];
  } catch (error) {
    console.log("Error getting quiz results:", error);
    // It's possible this error is due to format change, returning empty array as before.
    return [];
  }
};

const getFavorites = async (): Promise<StoredQuestion[]> => {
  try {
    const resultsJson = await AsyncStorage.getItem(`@favorite:quizzes`);
    if (resultsJson !== null) {
      return JSON.parse(resultsJson) as StoredQuestion[];
    }
    return [];
  } catch (error) {
    console.log("Error getting favorites quizzes:", error);
    return [];
  }
};

export {
  saveQuizResults,
  getQuizResults, // Kept for now, might be deprecated or return old format
  getDetailedQuizProgress,
  saveQuizToFavorites,
  getFavorites,
  DetailedQuizProgress, // Exporting type for use elsewhere
  FailedQuestionInfo, // Exporting type for use elsewhere
  StoredQuestion, // Exporting type for use elsewhere
};

const getFailedQuestionsPool = async (
  quizId?: string
): Promise<StoredQuestion[]> => {
  const allFailedQuestions: StoredQuestion[] = [];
  let keysToFetch: string[] = [];

  try {
    if (quizId) {
      // If a specific quizId is provided, only fetch its results
      const specificKey = `@${quizId}:quizResults`;
      const item = await AsyncStorage.getItem(specificKey);
      if (item) {
        keysToFetch.push(specificKey); // Technically, we already have the item, but for consistency...
                                      // Or directly process 'item' here. Let's process directly for efficiency.
        try {
          const progress = JSON.parse(item) as DetailedQuizProgress;
          if (progress && progress.failedQuestions) {
            progress.failedQuestions.forEach((failedInfo) => {
              allFailedQuestions.push({
                question: failedInfo.questionText,
                choices: failedInfo.choices,
                correctChoice: failedInfo.correctAnswerId,
              });
            });
          }
        } catch (e) {
          console.log(`Error parsing DetailedQuizProgress for key ${specificKey}:`, e);
        }
      }
    } else {
      // If no quizId, fetch all quiz results
      const allKeys = await AsyncStorage.getAllKeys();
      keysToFetch = allKeys.filter(
        (key) => key.startsWith("@") && key.endsWith(":quizResults")
      );

      for (const key of keysToFetch) {
        try {
          const item = await AsyncStorage.getItem(key);
          if (item) {
            const progress = JSON.parse(item) as DetailedQuizProgress;
            if (progress && progress.failedQuestions) {
              progress.failedQuestions.forEach((failedInfo) => {
                allFailedQuestions.push({
                  question: failedInfo.questionText,
                  choices: failedInfo.choices,
                  correctChoice: failedInfo.correctAnswerId,
                });
              });
            }
          }
        } catch (e) {
          console.log(`Error processing key ${key}:`, e);
          // Continue to next key if one fails
        }
      }
    }

    // Ensure uniqueness using a Map based on questionText
    const uniqueQuestionsMap = new Map<string, StoredQuestion>();
    allFailedQuestions.forEach((q) => {
      if (!uniqueQuestionsMap.has(q.question)) {
        uniqueQuestionsMap.set(q.question, q);
      }
    });

    return Array.from(uniqueQuestionsMap.values());
  } catch (error) {
    console.log("Error in getFailedQuestionsPool:", error);
    return []; // Return empty array on major error
  }
};

export {
  saveQuizResults,
  getQuizResults, // Kept for now, might be deprecated or return old format
  getDetailedQuizProgress,
  saveQuizToFavorites,
  getFavorites,
  getFailedQuestionsPool, // Added new function
  DetailedQuizProgress,
  FailedQuestionInfo,
  StoredQuestion,
};
