import React from 'react';
import { Text, StyleSheet, View, Image, TouchableOpacity } from 'react-native';
import { globalFonts } from '../globalFonts'
import { globalColors } from '../globalColors'

export default function Card(props) {
    return (
        <TouchableOpacity> 
            <View style={styles.card}>
                <View style={styles.flexbox}>
                    <Image 
                        style={styles.image}
                        source={props.info.image}
                    />
                    <View style={styles.cardContent}>
                        <Text style={styles.name}>
                            {props.info.name}
                        </Text>
                        <Text style={[styles.info, globalFonts.text]}>
                            {'$'.repeat(props.info.price)} · {props.info.location} · {props.info.type}
                        </Text>
                        <Text style={globalFonts.text}>
                            ★ {props.info.rating}
                        </Text>
                        <Text style={{color: props.info.open ? 'green' : 'red' }}>
                            {props.info.open ? 'Open' : 'Closed'}
                        </Text>
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    );
}
 
const styles = StyleSheet.create({
    card: {
        height: 110,
        marginBottom: 20,
        backgroundColor: globalColors.white,
        borderRadius: 10,
    },
    flexbox: {
        flex: 1,
        flexDirection: 'row',
    },
    image: {
        height: 110,
        width: 110,
        backgroundColor: globalColors.black,
        borderRadius: 10,
    },
    cardContent: {
        padding: 15,
    },
    name: {
        fontFamily: 'SF-Pro-Text-Bold',
        fontSize: 18,
        marginBottom: 3,
    },
    info: {
        color: globalColors.gray,
    },
    rating: {
        marginBottom: 2,
    },
    open: {

    },
})