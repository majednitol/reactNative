import React,{ useState } from 'react';
import { View, Text, Button } from 'react-native';

;


const funState = () => {
    const [state, setState] = useState({
        name: 'majed',
        age: '22',
        city: 'dhaka'
    });
    const onClick = () => {
        setState({
            name: 'ratul',
            age: '20',
            city: 'chandpur'
        })
    }

    return <View>
        <Text>{state.name}</Text>
        <Text>{state.age}</Text>
        <Text>{state.city}</Text>
        <Button title="click here" onPress={onClick} />

    </View>;
}


export default funState;
