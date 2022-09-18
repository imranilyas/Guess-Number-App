import {StyleSheet, View, Text} from 'react-native';
import { Octicons } from '@expo/vector-icons'; 

const SpecificItem = ({children, round}) => {
    return(
        <View style={styles.container}>
            <View style = {styles.emptySpace}>
                <Octicons name="dot-fill" size={30} color="white" />
            </View>
            <View style = {styles.textContainer}>
                <Text style={styles.text}>Round: {round}</Text>
                <Text style={styles.text}>Guess: {children}</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginVertical: 10,
        backgroundColor: 'hsl(231, 100%, 19%)',
        borderRadius: 10,
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: 'white',
    },

    emptySpace: {
        backgroundColor: '#00b3bd',
        padding: 10,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        borderRightWidth: 1,
        borderColor: 'white',
    },

    textContainer: {
        padding: 10,
    },

    text: {
        fontSize: 20,
        color: 'white',
    }
});

export default SpecificItem;