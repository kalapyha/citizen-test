import { StyleSheet, View } from "react-native";
import React, { useEffect, useState } from "react";
import QuizRunner from "../../components/QuizRunner";
import { getFavorites } from "../../utils/storage";
const FavoritesScreen = (): JSX.Element => {
  const [favoriteQuizzes, setFavoriteQuizzes] = useState([]);

  useEffect(() => {
    const fetchFavorites = async () => {
      const favorites = await getFavorites();

      setFavoriteQuizzes(favorites);
    };
    fetchFavorites();
  });

  return (
    <View>
      <QuizRunner
        questions={favoriteQuizzes}
        quizId="favorites"
        isFavorites
      ></QuizRunner>
    </View>
  );
};

const styles = StyleSheet.create({});

export default FavoritesScreen;
