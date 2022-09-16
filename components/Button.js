import { StyleSheet, View, Text, Pressable } from "react-native";

const Button = ({children, onPress, style}) => {
    return (
        <View style = {[styles.btnContainer, style]}>
            <Pressable style = {({pressed}) => pressed && styles.btnPressed} onPress={onPress}>
                <Text style = {styles.btnText}>{children}</Text>
            </Pressable>
        </View>
    );
}

const styles = StyleSheet.create({
    btnContainer: {
        backgroundColor: '#00b3bd',
        alignSelf: 'center',
        borderRadius: 10000,
        flex: 1,
        marginHorizontal: 20
    },

    btnPressed: {
        backgroundColor: '#008c93',
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