import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import DateTime from './components/DateTime';
import WeatherScroll from './components/WeatherScroll'

const img = require('./assets/blueSky.jpg')

export default function App() {
  return (
    
    <View style={styles.container}>
      <ImageBackground source={img} style={styles.backGroundImage}>
        <DateTime />
        <WeatherScroll />
      </ImageBackground>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  backGroundImage: {
    flex: 1,
    resizeMode:'cover'
  }
});
