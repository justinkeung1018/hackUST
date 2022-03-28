import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, View, Text, TouchableOpacity} from "react-native";

const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/images/background.png')}
        > 
            <View style={styles.container}>
                <TouchableOpacity style={styles.buttonContainer}>
                    <Text style={styles.buttonText}>Get Started</Text>
                </TouchableOpacity>
            </View>

        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        height: windowHeight,
        width: windowWidth,
    },
    container: {
        marginTop: 50,
        paddingLeft: 30,
        paddingRight: 30,
        marginBottom: 30,
    },
    buttonContainer: {   
        position: 'absolute',
        top: 0,
        left: 46,
        borderRadius: 100,
        backgroundColor: '#c4c4c4',
        opacity: .5,
        width: 298,
    },
    buttonText: {
        padding: 19,
        fontSize: 24,
        fontFamily: 'SF-Pro-Display-Bold',
        color: 'white',
        alignSelf: 'center',
        justifyContent: 'center',
        opacity: 1,
    },
})

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default WelcomeScreen;