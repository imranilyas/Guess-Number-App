import {StyleSheet, View, Text} from 'react-native';

const SpecificItem = ({children, round}) => {
    return(
        <View style={styles.container}>
            <Text>Round: {round}</Text>
            <Text>Guess: {children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
});

export default SpecificItem;