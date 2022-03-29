import React from 'react';
import { StyleSheet, View } from 'react-native';
import { globalFonts } from '../globalStyles'

export default function Card(props) {
    return (
        <View style={styles.card}>
            <Text style={globalFonts.text}>
                Hello
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    card: {
        height: 110,
        marginBottom: 20,
        // backgroundColor: globalColors.white
    }
})