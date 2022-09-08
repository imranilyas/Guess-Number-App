import {View, StyleSheet, Text, TextInput, Alert} from 'react-native';

import Button from '../components/Button';
import Title from '../components/Title';

const StartScreen = () => {

    const pressing = () => {
        console.log("Button Pressed");
    }

    return (
        <View style = {styles.container}>
            <Title>Welcome Player</Title>
            <View style={styles.cardContainer}>
                {/* Contains the guess number */}
                {/* Input for number */}
                <Text>Enter a Number</Text>
                <View style={styles.textContainer}>
                    <TextInput keyboardType='number-pad' keyboardAppearance='dark' maxLength={2} style={styles.input} selectionColor='white'/>
                </View>
                <View style = {styles.btnContainer}>
                    {/* Contains the buttons in a row */}
                    <Button onPress={pressing}>Reset</Button>
                    <Button onPress={pressing}>Start</Button>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    },

    cardContainer: {},

    textContainer: {
        borderBottomColor: 'white',
        textAlign: 'center',
        borderBottomWidth: 4,
        alignSelf: 'center',
        minWidth: '15%',
        marginBottom: 20,
    },

    input: {
        padding: 10,
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },

    btnContainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
    }
});

export default StartScreen;