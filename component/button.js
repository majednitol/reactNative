import React, { Component } from 'react';
import {View, Text, Button,Alert} from 'react-native';



export default class button extends Component {
    alertMe=()=> {
        Alert.alert("hello")
    }
  render() {
    return <View>
        <Button title ="click " color="red" onPress={this.alertMe}/>
    </View>;
  }
}
