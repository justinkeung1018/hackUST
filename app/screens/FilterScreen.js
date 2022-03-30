import React from 'react';
import { ImageBackground, StyleSheet, Dimensions, View, Text, TouchableOpacity} from "react-native";
import { globalStyles } from '../assets/globalStyles';


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const buttonContainerHeight = 62;

function FilterScreen({navigation}) {
    return (
        <View style={globalStyles.container}>
            <Text style={styles.titleText}>Filters</Text>
            <TouchableOpacity 
                style={styles.buttonContainer}>
                   <Text style={styles.buttonTextTitle}>Location</Text>
                   <Text style={styles.buttonTextContent}>Taikoo Shing</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.buttonContainer, {top: 0.15*window.height+buttonContainerHeight}]}>
                   <Text style={styles.buttonTextTitle}>Type of activity</Text>
                   <Text style={styles.buttonTextContent}>Badminton</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.buttonContainer, {top: 0.15*window.height+buttonContainerHeight*2}]}>
                   <Text style={styles.buttonTextTitle}>Price</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.buttonContainer, {top: 0.15*window.height+buttonContainerHeight*3}]}>
                   <Text style={styles.buttonTextTitle}>Time</Text>
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
        position: 'absolute',
        top: 0.15*window.height,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: null,
        opacity: 1,
        width: '100%',
        height: buttonContainerHeight,
        borderColor: '#c4c4c4',
        borderBottomWidth: 2,
    },
    buttonTextTitle: {
        padding: 3,
        fontSize: 18,
        fontFamily: 'SF-Pro-Display-Regular',
        color: 'black',
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },
    buttonTextContent: {
        padding: 3,
        fontSize: 14,
        fontFamily: 'SF-Pro-Display-Regular',
        color: 'grey',
        alignSelf: 'flex-start',
        justifyContent: 'center',
    },
})

export default FilterScreen;