import {Text, View, StyleSheet, Alert, FlatList} from 'react-native';
import { Feather } from '@expo/vector-icons'; 

import Button from '../components/Button';
import Card from '../components/Card';
import Title from '../components/Title';
import SpecificItem from '../components/SpecificItem';

import { useEffect, useState } from 'react';

let min = 1;
let max = 99;
let current = 0;
let rounds = 0;

const firstNumber = (first) => {
    do {
        current = Math.floor(Math.random() * 99 + 1);
    } while (current === first);
    return current;
} 

const GameScreen = ({initialNumber, guessHandlerProp, roundHandler}) => {

    const [curr, setCurr] = useState(0);
    const [prevGuesses, setPrevGuesses] = useState([]);

    const guessListHandler = (guess) => {
        setPrevGuesses(prev => [
            {guess: guess, round: rounds}, ...prev
        ]);
    }

    const guessHandler = (str) => {
        if((str === 'higher' && current > initialNumber) || (str === 'lower' && current < initialNumber)) {
            Alert.alert(
                'Incorrect Button',
                `Your number is not ${str} than the current guess.`,
                [{text: 'Be Honest', style: 'cancel'}]
            );
            return; 
        }
        if(str === 'higher')  {
            min = current + 1;
            // recalculate current
        } else if(str === 'lower') {
            max = current - 1;
        }
        guessListHandler(curr);
        current = min + Math.floor(Math.random() * (max-min));
        setCurr(current);
    }

    useEffect(() => {
        setCurr(firstNumber(initialNumber));
    }, [initialNumber])

    useEffect(() => {
        rounds++;
        console.log(rounds);
        if(curr === initialNumber) {
            roundHandler(rounds);
            rounds = 0;
            min = 1;
            max = 99;
            guessHandlerProp()
        }
    }, [min, max])

    return (
        <View style = {styles.container}>
            <Title>Game Screen</Title>
            <Card>
                <Text style = {styles.cardTitle}>Higher or Lower</Text>

                <View style={styles.guessNum}>
                    {/* Contains the guess number view */}
                    <Text style={styles.text}>{curr}</Text>
                </View>

                <View style = {styles.btnContainer}>
                    {/* Contains buttons in a row for higher or lower guess */}
                    <Button onPress={guessHandler.bind(this, 'lower')}><Feather name = 'minus' color='white' size = {20}/></Button>
                    <Button onPress={guessHandler.bind(this, 'higher')}><Feather name = 'plus' color='white' size = {20}/></Button>
                </View>
            </Card>
                {/* FlatList */}
            <View style={styles.flatlistContainer}>
                <FlatList 
                    data={prevGuesses}
                    renderItem={(element) => {
                        return(
                            <SpecificItem round={element.item.round}>{element.item.guess}</SpecificItem>
                        )
                    }}
                    keyExtractor={(item) => {return item.round}}
                    alwaysBounceVertical={false}
                    style={styles.list}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    cardTitle: {
        textAlign: 'center',
        fontSize: 28,
        color: 'white',
        padding: 20,
    },

    guessNum: {
        borderBottomColor: 'white',
        borderBottomWidth: 4,
        alignSelf: 'center',
        minWidth: '15%',
        marginBottom: 20,
    },

    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
        padding: 10,
    },

    btnContainer: {
        justifyContent: 'space-evenly',
        flexDirection: 'row',
        marginVertical: 10
    },

    flatlistContainer: {
        marginTop: 10,
        flex: 1,
        marginBottom: -35
    },

});

export default GameScreen;