import React, { Component } from 'react';
import {View, Text} from 'react-native';
;


export default class propsInClass extends Component {
  render() {
    return <View>
        <Text>{this.props.name} </Text>
        <Text>{this.props.age} </Text>
        <Text> {this.props.city} </Text>
    </View>;
  }
}
