import { StyleSheet } from 'react-native';
import { globalColors } from './globalColors';

export const globalFonts = StyleSheet.create({
    text: {
        fontFamily: 'SF-Pro-Text-Regular',
        fontSize: 13,
        color: globalColors.black
    },
    heading2: {
        fontFamily: 'SF-Pro-Display-Bold',
        fontSize: 30,
        color: globalColors.black, 
    },
    heading3: {
        fontFamily: 'SF-Pro-Display-Regular',
        fontSize: 24,
        color: globalColors.black,
    },
    heading3Bold: {
        fontFamily: 'SF-Pro-Display-Bold',
        fontSize: 24,
        color: globalColors.black
    },
})
