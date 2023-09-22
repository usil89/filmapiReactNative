import { View, Image, Text, StyleSheet } from "react-native";

import React from "react";

const MovieItem = (props) => {

    const { movie } = props

  return (
    <View style={styles.viewContainer}>
      <Image style={styles.image} src={"https://image.tmdb.org/t/p/w500/"+movie.poster_path}></Image>
      <Text style={styles.movieTitle}>{movie.title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 260,
    width : 200,
    resizeMode: "contain",
    borderRadius : 10,
  },

  viewContainer : {
    flexDirection : "column",
    alignItems : "center",
    marginBottom : 15,
    borderWidth : 1,
    borderRadius : 10,
    padding : 5,
    backgroundColor : "#457b9d",
    width : 200
  },

  movieTitle : {
    fontSize : 20,
    color : "#caf0f8",
  }

});

export default MovieItem;
