import { ImageBackground, StyleSheet, Dimensions, View, Text, TouchableOpacity} from "react-native";
import React from 'react';
import { globalStyles } from '../globalStyles';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const BottomSheet = () => {
    return(
        <View style={styles.bottomSheetContainer}>
            <Text>BottomSheet</Text>
        </View>
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
    }
});