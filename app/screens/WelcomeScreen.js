import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, View, Text, TouchableOpacity} from "react-native";


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

function WelcomeScreen({navigation}) {

    const pressHandler = () => {
        navigation.navigate('HomeScreen');
    }

    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/images/background.png')}
        > 
            <View style={styles.container}>
                <Text style={styles.titleText}>OpenFitness</Text>
                <TouchableOpacity 
                    style={styles.buttonContainer} onPress={pressHandler}>
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
        paddingLeft: 0,
        paddingRight: 0,
        marginBottom: 30,
    },
    titleText: {
        position: 'absolute',
        top: 0.7*window.height,
        fontSize: 34,
        fontFamily: 'SF-Pro-Display-Bold',
        color: 'white',
        textShadowOffset: {width: 0, height: 1},
        textShadowRadius: 10,
        textShadowColor: 'grey',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {   
        position: 'absolute',
        top: 0.7*window.height + 60,
        alignSelf: 'center',
        borderRadius: 100,
        backgroundColor: '#c4c4c4',
        opacity: .5,
        width: "76.4%",
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