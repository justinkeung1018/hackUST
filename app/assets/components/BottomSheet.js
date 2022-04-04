import { ImageBackground, StyleSheet, Dimensions, View, Text, TouchableOpacity} from "react-native";
import React from 'react';
import { globalStyles } from '../globalStyles';
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import  Animated, { useAnimatedStyle, useSharedValue } from 'react-native-reanimated';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const BottomSheet = () => {
    const translateY = useSharedValue(0);

    const gesture = Gesture.Pan().onUpdate((event) => {
        translateY.value = event.translationY;
    });

    const rBottomSheetStyle = useAnimatedStyle(() => {
        return {
            transform: [{translateY: translateY.value}],
        }
    });

    return(
        <GestureDetector gesture={gesture}>
            <Animated.View style={[styles.bottomSheetContainer, rBottomSheetStyle]}>
                <View style={[globalStyles.container, {marginTop: 0}]}>
                    <View style={styles.line}></View>
                    <Text>BottomSheet</Text>
                </View>
            </Animated.View>
        </GestureDetector>
    );
}

export default BottomSheet

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: windowHeight,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: 0.15*windowHeight+50,
        borderRadius: 25,
    },
    line: {
        width: 75,
        height: 4,
        backgroundColor: 'grey',
        alignSelf: 'center',
        marginVertical: 15,
        borderRadius: 2,
    }
});