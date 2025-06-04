import React, { useState, useEffect } from "react";
import { View, Text, ActivityIndicator, StyleSheet } from "react-native";
import QuizRunner from "../../components/QuizRunner";
import {
  getFailedQuestionsPool,
  StoredQuestion,
} from "../../utils/storage";
import { s } from "../../Style"; // Assuming 's' is your global styles

const FailedQuestionsQuizScreen = (): JSX.Element => {
  const [questions, setQuestions] = useState<StoredQuestion[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchFailedQuestions = async () => {
      try {
        setIsLoading(true);
        const failedQuestionsPool = await getFailedQuestionsPool();
        // Optional: Shuffle the failed questions pool if desired
        // failedQuestionsPool = shuffleArray(failedQuestionsPool);
        setQuestions(failedQuestionsPool);
        setError(null);
      } catch (err) {
        console.error("Error fetching failed questions:", err);
        setError("Failed to load failed questions. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    fetchFailedQuestions();
  }, []);

  if (isLoading) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <ActivityIndicator size="large" />
        <Text style={s.text}>Loading failed questions...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={s.errorText}>{error}</Text>
      </View>
    );
  }

  if (questions.length === 0) {
    return (
      <View style={[styles.container, styles.centerContent]}>
        <Text style={s.heading}>No Failed Questions!</Text>
        <Text style={s.text}>
          You haven't failed any questions yet, or we couldn't find any.
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <QuizRunner
        questions={questions}
        quizId="failedQuestionsQuiz"
        // isFavorites={false} // Default or explicitly false
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  centerContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  // Assuming s.errorText and s.text, s.heading are defined in global styles
  // If not, define them here:
  // errorText: {
  //   color: 'red',
  //   fontSize: 16,
  //   textAlign: 'center',
  // },
});

export default FailedQuestionsQuizScreen;
