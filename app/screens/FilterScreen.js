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
            <TouchableOpacity 
                style={[styles.buttonContainer, {top: 0.15*window.height+62}]}>
                   <Text style={styles.buttonTextTitle}>Type of activity</Text>
                   <Text style={styles.buttonTextContent}>Badminton</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.buttonContainer, {top: 0.15*window.height+124}]}>
                   <Text style={styles.buttonTextTitle}>Price</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={[styles.buttonContainer, {top: 0.15*window.height+186}]}>
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
        position: 'absolute',
        top: 0.15*window.height,
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: null,
        opacity: 1,
        width: "84%",
        height: 62,
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

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default FilterScreen;