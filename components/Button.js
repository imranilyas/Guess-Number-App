import { StyleSheet, View, Text, Pressable } from "react-native";

const Button = ({children, onPress}) => {
    return (
        <View style = {styles.btnContainer}>
            <Pressable style = {({pressed}) => pressed && styles.btnPressed} onPress={onPress}>
                <Text style = {styles.btnText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: 'hsl(231, 100%, 19%)',
        alignSelf: 'center',
        borderRadius: 10000,
        flex: 1,
        marginHorizontal: 20
    },

    btnPressed: {
        backgroundColor: 'hsl(230, 100%, 26%)',
        borderRadius: 10000
    },

    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 16,
        padding: 14,
    }
});

export default Button;