import React, { Component } from 'react';
import { View, Text } from 'react-native';
;


export default class heigt_width extends Component {
    render() {
        return <View style={{ backgroundColor: 'white' }}>
            <View style={{ height: 30, width: 50, backgroundColor: 'red' }}>
                <Text>hello</Text>
            </View>
            <View style={{ height: 30, width: 100, backgroundColor: 'green' }}></View>
            <View style={{ height: 30, width: 200, backgroundColor: 'yellow' }}></View>
        </View>;
    }
}
