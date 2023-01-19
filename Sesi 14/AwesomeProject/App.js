import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        style={styles.img}
        source={{
          uri:'https://www.shareicon.net/data/256x256/2016/07/08/117367_logo_512x512.png'
        }}/>
        <Text style={styles.txt}>
        Mari Kita belajar React Native
      </Text>
      <Text style={styles.txt}>
        Bersama Wahyu Alif Dharmawan
      </Text>
      <Button
        title='Tekan saya'
        color="blue"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF0F5',
    alignItems: 'center',
    justifyContent: 'center',

  },
  txt: {
    fontSize: 15,
    color: 'blue'
  }, img: {
    color:'black',
    height: 100,
    width: 100
  }
  
});
