import React, { useState } from 'react';
import Card from '../components/card';

function ResultsScreen(props) {
    return (
        <Card>
        </Card>
    );
}

export default function ResultsScreen({ navigation }) {
    const [ venue, setVenue ] = useState([
        { name: 'Ryze Hong Kong', price: '2', location: 'Quarry Bay', type: 'Trampoline', favorite: false },
        { name: 'Bounce Inc', price: '2', location: 'Kowloon Bay', type: 'Trampoline', favorite: false}
    ]);

    return ResultsScreen;
};