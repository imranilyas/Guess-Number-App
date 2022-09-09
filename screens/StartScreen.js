import { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Alert} from 'react-native';

import Button from '../components/Button';
import Title from '../components/Title';

const StartScreen = () => {

    const [myNumber, setMyNumber] = useState('');

    const enterNumberHandler = (element) => {
        setMyNumber(element);
    }

    const resetNumberHandler = () => {
        setMyNumber('');
    }

    //! Will eventually switch to GameScreen by passing number
    //! Must add alerts
    const startHandler = () => {
        console.log("Start the game");
        if(isNaN(myNumber) || myNumber <= 0 || myNumber > 99) {
            console.log(false);
            Alert.alert(
                'Invalid Number', 'Please enter a number between 1 and 99',
                [{text: 'Dismiss', onPress: resetNumberHandler, style: 'cancel'}]
            );
        }
        let n = Number(myNumber);
    }

    return (
        <View style = {styles.container}>
            <Title>Welcome Player</Title>
            <View style={styles.cardContainer}>
                {/* Contains the guess number */}
                {/* Input for number */}
                <Text>Enter a Number</Text>
                <View style={styles.textContainer}>
                    <TextInput value={myNumber} onChangeText={enterNumberHandler} 
                    keyboardType='number-pad' keyboardAppearance='dark' maxLength={2} 
                    style={styles.input} selectionColor='white'/>
                </View>
                <View style = {styles.btnContainer}>
                    {/* Contains the buttons in a row */}
                    <Button onPress={resetNumberHandler}>Reset</Button>
                    <Button onPress={startHandler}>Start</Button>
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