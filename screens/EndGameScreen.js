import { StyleSheet, View, Text, Image } from "react-native";
import Button from "../components/Button";
import Title from "../components/Title";

const EndGameScreen = ({myNumber, guessHandlerProp}) => {
    return (
        <View style={styles.container}>
            <Title>Game Over</Title>
            <View style={styles.imgContainer}>
                {/* Contains the congratulations image */}
                <Image style={styles.img} source={require('../assets/images/summit.jpg')}/>
            </View>

            <Text style={styles.text}>Your number is <Text style={styles.keyText}>{myNumber}</Text>. It took <Text style={styles.keyText}>{"__"}</Text> rounds to guess your number.</Text>

            <View style={styles.btnContainer}>
                <Button onPress={guessHandlerProp} style={styles.btnStyle}>Play Again</Button>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    imgContainer: {
        marginVertical: 25,
    },

    img: {
        height: 200,
        width: 200,
        alignSelf: 'center',
        borderRadius: 200,
        borderWidth: 2,
        borderColor: 'hsl(231, 100%, 19%)'
    },
    
    text: {
        textAlign: 'center',
        fontSize: 24,
        color: 'white',
        padding: 10,
    },

    keyText: {
        color: '#2a1963'
    },

    btnContainer: {
        flexDirection: 'row',
        marginVertical: 10,
        width: 250,
        alignSelf: 'center',
        position: 'absolute',
        bottom: 0,
    },

    btnStyle: {
        backgroundColor: 'hsl(231, 100%, 19%)'
    }
});

export default EndGameScreen;