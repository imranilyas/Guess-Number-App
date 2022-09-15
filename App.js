import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ImageBackground, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartScreen from './screens/StartScreen';
import GameScreen from './screens/GameScreen';
import EndGameScreen from './screens/EndGameScreen';
import { useState } from 'react';


export default function App() {

  const [guessed, setGuessed] = useState(false);
  const [myNumber, setMyNumber] = useState(0);

  const setNumberHandler = (element) => {
    setMyNumber(element);
  }

  const setGuessedHandler = () => {
    if(!guessed) {
      setGuessed(true);
    } else {
      setMyNumber(0);
      setGuessed(false);
    }
  }

  let currentScreen = <StartScreen setNumberHandler = {setNumberHandler} />

  if(myNumber) {
    if(guessed) {
      currentScreen = <EndGameScreen myNumber={myNumber} guessHandlerProp={setGuessedHandler}/>
    } else {
      currentScreen = <GameScreen initialNumber={myNumber} guessHandlerProp = {setGuessedHandler} />
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <LinearGradient style={styles.container} colors={['hsl(231, 100%, 19%)', '#00d9e4']}>
      <ImageBackground source={require('./assets/images/glitter.jpg')} style={styles.container} imageStyle = {styles.backgroundImg}>
        <SafeAreaView style={[styles.container, styles.space]}>
          <StatusBar style="light" />
          {currentScreen}
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  backgroundImg: {
    opacity: 0.2,
    height: '100%',
    width: '100%',
  },

  space: {
    margin: 20,
  },

});
