import React, { useCallback, useRef } from 'react';
import { ImageBackground, StyleSheet, Dimensions, View, Text, TouchableOpacity, ScrollView} from "react-native";
import { globalStyles } from '../assets/globalStyles';


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");
const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const buttonContainerHeight = 55;

const maxTranslateY = -windowHeight*.8;

function FilterLocationScreen({navigation}) {
    return (
        <View style={globalStyles.container}>
        <Text style={styles.titleText}>Location</Text>
        <View style={styles.buttonMargin}>
            <ScrollView>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen', {location: 'Any'})}> 
                    <Text style={styles.buttonText}>Any</Text>      
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen', {location: 'Central and Western District'})}> 
                    <Text style={styles.buttonText}>Central and Western District</Text>      
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}> 
                    <Text style={styles.buttonText}>East District</Text>        
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}>
                    <Text style={styles.buttonText}>Islands District</Text>       
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}> 
                    <Text style={styles.buttonText}>Kowloon City District</Text>      
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}> 
                    <Text style={styles.buttonText}>Kwai Tsing District</Text>      
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}>   
                    <Text style={styles.buttonText}>Kwun Tong District</Text>    
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}>  
                    <Text style={styles.buttonText}>North District</Text>     
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}> 
                    <Text style={styles.buttonText}>Sai Kung District</Text>      
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}> 
                    <Text style={styles.buttonText}>Sha Tin District</Text>      
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}> 
                    <Text style={styles.buttonText}>Sham Shui Po District</Text>      
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}> 
                    <Text style={styles.buttonText}>Southern District</Text>      
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}> 
                    <Text style={styles.buttonText}>Tai Po District</Text>      
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}> 
                    <Text style={styles.buttonText}>Tsuen Wan District</Text>      
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}> 
                    <Text style={styles.buttonText}>Tuen Mun District</Text>      
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}> 
                    <Text style={styles.buttonText}>Wan Chai District</Text>      
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}> 
                    <Text style={styles.buttonText}>Wong Tai Sin District</Text>      
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}> 
                    <Text style={styles.buttonText}>Yau Tsim Mong District</Text>      
                </TouchableOpacity>
                <View style={styles.line}></View>
                <TouchableOpacity
                    style={styles.buttonContainer}
                    onPress={() => navigation.navigate('FilterScreen')}> 
                    <Text style={styles.buttonText}>Yuen Long District</Text>      
                </TouchableOpacity>
            </ScrollView>
        </View>

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
    buttonMargin: {
        paddingTop: 0.15*window.height,
    },
    buttonContainer: {   
        alignSelf: 'flex-start',
        justifyContent: 'center',
        backgroundColor: null,
        opacity: 1,
        width: '100%',
        height: buttonContainerHeight, 
    },
    buttonText: {
        fontFamily: 'SF-Pro-Display-Regular',
        fontSize: 18
    },
    line: {
        width: '100%',
        height: 2,
        backgroundColor: '#c4c4c4',
        alignSelf: 'center',

    },
    
})

export default FilterLocationScreen;