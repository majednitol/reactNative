import React, { Component } from 'react';
import {View,Text} from 'react-native';
;


export default class flex extends Component {
  render() {
    return <View style={{flex: 100, backgroundColor:'white'}}>
        <View style={{flex: 30,backgroundColor: 'red'}}>
            <Text>hello</Text>
        </View>
        <View style={{flex: 33,backgroundColor: 'green'}}></View>
        <View style={{flex: 36,backgroundColor: 'yellow'}}></View>
    </View>;
  }
}
