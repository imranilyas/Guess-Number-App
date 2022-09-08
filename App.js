import { StatusBar } from 'expo-status-bar';
import { StyleSheet, SafeAreaView, ImageBackground, Text, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import StartScreen from './screens/StartScreen';

export default function App() {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <LinearGradient style={styles.container} colors={['hsl(231, 100%, 19%)', '#00d9e4']}>
      <ImageBackground source={require('./assets/images/glitter.jpg')} style={styles.container} imageStyle = {styles.backgroundImg}>
        <SafeAreaView style={[styles.container, styles.space]}>
          <StatusBar style="light" />
          <StartScreen />
        </SafeAreaView>
      </ImageBackground>
    </LinearGradient>
    </TouchableWithoutFeedback>
  );
}
// 00e4be
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
