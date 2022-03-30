import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { globalFonts } from '../assets/globalFonts';
import { globalStyles } from '../assets/globalStyles';
import Card from '../assets/components/card';
import { globalColors } from '../assets/globalColors';

export default function ResultsScreen({ navigation }) {
    const [ venue, setVenue ] = useState([
        { name: 'Ryze Hong Kong', price: '2', location: 'Quarry Bay', type: 'Trampoline', image: require('../assets/images/ryze.jpeg'), rating: '4.5', open: true, favorite: false, key: '1' },
        { name: 'Bounce Inc', price: '2', location: 'Kowloon Bay', type: 'Trampoline', image: require('../assets/images/ryze.jpeg'), rating: '4.2', open: false, favorite: false, key: '2' },
        { name: 'Ryze Hong Kong', price: '2', location: 'Quarry Bay', type: 'Trampoline', image: require('../assets/images/ryze.jpeg'), rating: '4.5', open: true, favorite: false, key: '3' },
        { name: 'Ryze Hong Kong', price: '2', location: 'Quarry Bay', type: 'Trampoline', image: require('../assets/images/ryze.jpeg'), rating: '4.5', open: true, favorite: false, key: '4' },
        { name: 'Ryze Hong Kong', price: '2', location: 'Quarry Bay', type: 'Trampoline', image: require('../assets/images/ryze.jpeg'), rating: '4.5', open: true, favorite: false, key: '5' },
        { name: 'Ryze Hong Kong', price: '2', location: 'Quarry Bay', type: 'Trampoline', image: require('../assets/images/ryze.jpeg'), rating: '4.5', open: true, favorite: false, key: '6' },
        { name: 'Ryze Hong Kong', price: '2', location: 'Quarry Bay', type: 'Trampoline', image: require('../assets/images/ryze.jpeg'), rating: '4.5', open: true, favorite: false, key: '7' },
        { name: 'Ryze Hong Kong', price: '2', location: 'Quarry Bay', type: 'Trampoline', image: require('../assets/images/ryze.jpeg'), rating: '4.5', open: true, favorite: false, key: '8' },
    ]);

    return (
        <View style={globalStyles.container}>
            <View style={styles.titleBar}>
                <TouchableOpacity>
                    <Text style={styles.arrow}>
                        {'<'}
                    </Text>
                </TouchableOpacity>
                <Text style={[globalFonts.heading3Bold, styles.title]}>
                    Results ({Object.keys(venue).length})
                </Text>
            </View>
            <FlatList
                data={venue}
                renderItem={({ item }) => (
                    <Card info={item}/>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    arrow: {
        color: globalColors.gray,
        fontSize: 24,
        marginRight: 12,
    },
    title: {
        marginBottom: 13,
    },
    titleBar: {
        flexDirection: 'row',
    },
})