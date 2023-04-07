import React, { useState } from "react";
import { Text, View, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Sound from 'react-native-sound';

const soundList = [
  require('./assets/one.wav'),
  require('./assets/two.wav'),
  require('./assets/three.wav'),
  require('./assets/four.wav'),
  require('./assets/five.wav'),
  require('./assets/six.wav'),
  require('./assets/seven.wav'),
  require('./assets/eight.wav'),
  require('./assets/nine.wav'),
  require('./assets/ten.wav'),
];

const App = () => {
  const playSound = (sound) => {
    const soundVar = new Sound(sound, Sound.MAIN_BUNDLE, (err) => {
      if (err) {
        console.log("Sound File Missing")
      }
    });

    setTimeout(()=>{
      soundVar.play();
    },100);

    soundVar.release();
  }
  return (
    <ScrollView style={styles.container}>
      <Image style={styles.logo} source={require('./assets/logo.png')} />
      <View style={styles.gridContainer}>
        {soundList.map((sound) => (
          <TouchableOpacity
            key={sound}
            onPress={()=>{
              playSound(sound)
            }}
            style={styles.box}
          >
            <Text style={styles.text}>{sound}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#03203C',
  },
  logo: {
    alignSelf: 'center',
    marginTop: 15,
  },
  text: {
    fontSize: 50,
    // color: 'ff4301',
  },
  box: {
    height: 110,
    alignItems: "center",
    justifyContent: "center",
    width: '46%',
    marginVertical: 6,
    backgroundColor: '#E83A59',
    borderRadius: 5,
    shadowColor: "#B4161B",
    elevation: 5,

  },
  gridContainer: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    alignItems: "flex-start",
    justifyContent: "space-around",
  },

})
