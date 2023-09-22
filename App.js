import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useEffect, useState } from 'react';
import MoviedbComponenet from './components/MoviedbComponenet';


export default function App() {
  
  return (
    <View style={styles.container}>

      <MoviedbComponenet/>

    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
     alignItems: 'center',
    justifyContent: 'center',
  },
});
