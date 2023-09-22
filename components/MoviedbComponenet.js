import React, { useEffect, useState } from "react";
import { FlatList, View, StyleSheet, Text, Button } from "react-native";
import MovieItem from "./MovieItem";

const MoviedbComponenet = () => {
  const [showMoviedbComponent, setShowMoviedbComponent] = useState(true);
  const [page, setPage] = useState(1)

  const [movieDB, setMovieDb] = useState([]);

 const  setNextPage = ()=> {
    setPage(pageValue => pageValue + 1);
  }

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/movie/popular?api_key=2d736b2712a1889b09a7959c2d18559f&language=fr-FR&page=" + page
    )
      .then((res) => res.json())
      .then((data) => {
        setMovieDb(data.results);
      });
  }, [page]);

  return (
    <View style={styles.container}>
        <Text>Hello</Text>
      <FlatList
        data={movieDB}
        renderItem={({ item }) => <MovieItem movie={item}></MovieItem>}
        keyExtractor={(item) => item.id}
      ></FlatList>
      <View style={styles.buttonContainer}>
          <Button
            onPress={setNextPage}
            title="Next Page"
            color="#841584"
          />
        </View>
    
    </View>
    
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MoviedbComponenet;
