import React, { Component } from 'react';
import {View, Text} from 'react-native';
import Compone from '../component/comOne';
import Comptwo from '../component/propsInFun';
import Flex1 from '../component/flex';

import Simple from '../component/FlatList/gridView_keyExtractor';

export default class page1 extends Component {
  render() {
    return <View>
        {/* <Text>hi i am page1</Text>
        <Compone/>
        <Comptwo name="majed" age="20" city="dhaka1"/> */}
        {/* <Flex1/> */}
        <Simple/>
    </View>;
  }
}
