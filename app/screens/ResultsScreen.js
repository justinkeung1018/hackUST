import React, { useState } from 'react';
import Card from '../assets/components/card';

export default function ResultsScreen({ navigation }) {
    const [ venue, setVenue ] = useState([
        { name: 'Ryze Hong Kong', price: '2', location: 'Quarry Bay', type: 'Trampoline', favorite: false },
        { name: 'Bounce Inc', price: '2', location: 'Kowloon Bay', type: 'Trampoline', favorite: false}
    ]);

    return (
        <Card>
        </Card>
    );
};