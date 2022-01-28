import React, { Component } from 'react';
import  {View, Text} from 'react-native';
;




export default function compoTwo(props) {
  return <View>
    <Text>{props.name} </Text>
    <Text>{props.age} </Text>
    <Text>{props.city} </Text>
  </View>;
}

