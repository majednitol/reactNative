import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';




export default class comOne extends Component {
  state = {
    name: 'majed',
    age: '22',
    city: 'dhaka'
  }
  onClick = () => {
    this.setState({ name: 'rafin', age: '20', city: 'khulna' });
  }
  render() {
    return <View>
      <Text>{this.state.name}</Text>
      <Text>{this.state.age}</Text>
      <Text>{this.state.city}</Text>
      <Button onPress={this.onClick} title="click here" />
    </View>;
  }
}
