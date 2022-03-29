import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, View, Text, TouchableOpacity} from "react-native";


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

function FilterScreen({navigation}) {
    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>Filters</Text>
            <TouchableOpacity 
                style={styles.buttonContainer}>
                   <Text style={styles.buttonTextTitle}>Location</Text>
                   <Text style={styles.buttonTextContent}>Taikoo Shing</Text>
            </TouchableOpacity>
        </View>
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
        top: 0.05*window.height,
        fontSize: 30,
        fontFamily: 'SF-Pro-Display-Bold',
        color: 'black',
        alignSelf: 'center',
        justifyContent: 'center',
    },
    buttonContainer: {   
        padding: 7,
        position: 'absolute',
        top: 0.7*window.height + 60,
        alignSelf: 'center',
        backgroundColor: '#c4c4c4',
        opacity: 1,
        width: "84%",
    },
    buttonTextTitle: {
        fontSize: 18,
        fontFamily: 'SF-Pro-Display-Regular',
        color: 'black',
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },
    buttonTextContent: {
        fontSize: 14,
        fontFamily: 'SF-Pro-Display-Regular',
        color: 'grey',
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },
})

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default FilterScreen;