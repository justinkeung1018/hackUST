import React from 'react';
import { StyleSheet } from 'react-native';

export const globalFonts = StyleSheet.create({
    text: {
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 13,
        color: globalColors.black
    }
})

export const globalColors = StyleSheet.create({
    white: "ffffff", 
    black: "000000",
    darkBlue: "4a7abc",
    gray:  "c4c4c4",
    darkGray: "767676"
})