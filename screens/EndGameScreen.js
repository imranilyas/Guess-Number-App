import { StyleSheet, View, Text } from "react-native";

const EndGameScreen = () => {
    return (
        <View>
            <Text>Title: EndGameScreen</Text>
            <View>
                {/* Contains the congratulations image */}
            </View>
            <Text>Your number is {}. It took {} rounds to guess your number.</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {

    }
});

export default EndGameScreen;