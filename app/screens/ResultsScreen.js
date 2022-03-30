import React, { useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import { globalFonts } from '../assets/globalFonts';
import { globalStyles } from '../assets/globalStyles';
import Card from '../assets/components/card';

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
            <FlatList
                data={venue}
                renderItem={({ item }) => (
                    <Card info={item}>
                    </Card>
                )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    // card: {
    //     height: 110,
    //     marginBottom: 20,
    //     backgroundColor: globalColors.white
    // }
})