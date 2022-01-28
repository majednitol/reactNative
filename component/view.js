import React, { Component } from 'react';
import { View, Text } from 'react-native';





export default class ViewText extends Component {
    render() {
        return <View style={{ flexDirection: 'row',justifyContent: 'flex-end'
        ,height: '100%',width: '100%',backgroundColor: 'red'}}>
            {/* <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text> */}
            <View style={{ flexDirection: 'row',justifyContent: 'flex-end'
        ,height: '80%',width: '32%',backgroundColor: 'blue'}}>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
        </View>
        <View style={{ flexDirection: 'row',justifyContent: 'flex-end'
        ,height: '100%',width: '32%',backgroundColor: 'red'}}>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
        </View>
        <View style={{ flexDirection: 'row',justifyContent: 'flex-end'
        ,height: '100%',width: '32%',backgroundColor: 'yellow'}}>
            <Text>1</Text>
            <Text>2</Text>
            <Text>3</Text>
            <Text>4</Text>
        </View>
        </View>
    }
}

