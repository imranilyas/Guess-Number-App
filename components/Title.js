import { StyleSheet, View, Text } from "react-native";

const Title = ({children, style}) => {
    return (
        <View style={styles.container}>
            <Text style={[styles.textStyle, style]}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        padding: 15,
        borderWidth: 2,
        borderColor: 'white'
    },

    textStyle: {
        color:'white',
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold'
    }

})

export default Title;