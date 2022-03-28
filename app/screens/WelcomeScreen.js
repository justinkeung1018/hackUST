import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, View } from "react-native";

function WelcomeScreen(props) {
    return (
        <ImageBackground 
            style={styles.background}
            source={require('../assets/images/background.png')}
        > 
            <View style={styles.container}></View>
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
        paddingLeft: 30,
        paddingRight: 30,
    }
})

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default WelcomeScreen;