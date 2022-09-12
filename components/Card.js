import { StyleSheet, View } from "react-native";

const Card = ({children}) => {
    return (
        <View style = {styles.cardContainer}>
            {children}
        </View>
    );
}

export default Card;

const styles = StyleSheet.create({
    cardContainer: {
        backgroundColor: 'hsl(231, 100%, 19%)',
        borderRadius: 10,
        borderColor: 'white',
        paddingVertical: 10,
        marginTop: 20,
        shadowColor: 'black',
        shadowRadius: 3,
        shadowOpacity: 0.5,
        shadowOffset: {height: 1, width: 0}
    },
})