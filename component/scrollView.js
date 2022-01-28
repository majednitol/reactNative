import React, { Component } from 'react';
import { View, Text,ScrollView } from 'react-native';
;


export default class scrollView extends Component {
    render() {
        return <ScrollView horizontal={true}>
            <Text style={{ backgroundColor: "green", height: 100, width: 360 }}></Text>
            <Text style={{ backgroundColor: "red", height: 100, width: 360 }}></Text>
            <Text style={{ backgroundColor: "blue", height: 100, width: 360 }}></Text>
            <Text style={{ backgroundColor: "red", height: 100, width: 360 }}></Text>
            <Text style={{ backgroundColor: "orange", height: 100, width: 360 }}></Text>
            <Text style={{ backgroundColor: "red", height: 100, width: 360 }}></Text>
            <Text style={{ backgroundColor: "teal", height: 100, width: 360 }}></Text>
            <Text style={{ backgroundColor: "red", height: 100, width: 360 }}></Text><Text style={{ backgroundColor: "green", height: 100, width: 360 }}></Text>
        </ScrollView>;
    }
}
