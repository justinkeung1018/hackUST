import { StyleSheet, Dimensions, View, Text, TouchableOpacity} from "react-native";
import React, { useEffect, useCallback, useImperativeHandle } from 'react';
import { globalStyles } from '../globalStyles';
import { Gesture, GestureDetector } from 'react-native-gesture-handler'
import  Animated, { useAnimatedStyle, useSharedValue, withTiming, withSpring, Extrapolate } from 'react-native-reanimated';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const minTranslateY = -140;
const maxTranslateY = -windowHeight*.8;

type BottomSheetProps = {};

export type BottomSheetRefProps = {
    scrollTo: (destination: number) => void;
};

const BottomSheet = React.forwardRef<BottomSheetRefProps, BottomSheetProps>(
    ({}, ref) => {
    const translateY = useSharedValue(0);

    const scrollTo = useCallback((destination: number) => {
        'worklet';
        translateY.value = withSpring(destination, {damping: 200});
    }, []);

    useImperativeHandle(ref, () => ({ scrollTo }), [scrollTo]);

    const context = useSharedValue({y: 0});

    const gesture = Gesture.Pan()
    .onStart(() => {
        context.value = {y: translateY.value};
    })
    .onUpdate((event) => {
        translateY.value = event.translationY + context.value.y;
        translateY.value = Math.max(translateY.value, -windowHeight+50)
        console.log(translateY.value);
    })
    .onEnd(() => {
        if (translateY.value > minTranslateY) {
            scrollTo(minTranslateY)
        }
        else if (translateY.value < maxTranslateY) {
            scrollTo(maxTranslateY)
        }
        
    });

    useEffect(() => {
        scrollTo(-windowHeight*.8);
    }, []);

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
                    <Text>BottomSheet - Location</Text>
                </View>
            </Animated.View>
        </GestureDetector>
    );
})

export default BottomSheet

const styles = StyleSheet.create({
    bottomSheetContainer: {
        height: windowHeight,
        width: '100%',
        backgroundColor: 'white',
        position: 'absolute',
        top: windowHeight,
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