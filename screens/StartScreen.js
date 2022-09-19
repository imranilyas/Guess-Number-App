import { useState } from 'react';
import {View, StyleSheet, Text, TextInput, Alert, ScrollView, TouchableWithoutFeedback, Keyboard} from 'react-native';

import Button from '../components/Button';
import Title from '../components/Title';
import Card from '../components/Card';

const StartScreen = (props) => {

    const [myNumber, setMyNumber] = useState('');

    const enterNumberHandler = (element) => {
        setMyNumber(element);
    }

    const resetNumberHandler = () => {
        setMyNumber('');
    }

    const startHandler = () => {
        console.log("Start the game");
        if(isNaN(myNumber) || myNumber <= 0 || myNumber > 99) {
            console.log(false);
            Alert.alert(
                'Invalid Number', 'Please enter a number between 1 and 99',
                [{text: 'Dismiss', onPress: resetNumberHandler, style: 'cancel'}]
            );
            return;
        }
        let n = Number(myNumber);
        props.setNumberHandler(n);
    }

    return (
        <View style = {styles.container}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <View>
                    <Title>Welcome Player</Title>
                    <Card>
                        {/* Contains the guess number */}
                        {/* Input for number */}
                        <Text style={styles.enterNumberText}>Enter a Number</Text>
                        <View style={styles.textContainer}>
                            <TextInput value={myNumber} onChangeText={enterNumberHandler} 
                            keyboardType='number-pad' keyboardAppearance='dark' maxLength={2} 
                            style={styles.input} selectionColor='#cccccc'/>
                        </View>
                        <View style = {styles.btnContainer}>
                            {/* Contains the buttons in a row */}
                            <Button onPress={resetNumberHandler}>Reset</Button>
                            <Button onPress={startHandler}>Start</Button>
                        </View>
                    </Card>
                </View>
            </TouchableWithoutFeedback>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    enterNumberText: {
        textAlign: 'center',
        fontSize: 28,
        color: 'white',
        padding: 20,
    },

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
        marginVertical: 10
    },
});

export default StartScreen;