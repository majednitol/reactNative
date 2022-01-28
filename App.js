import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Page1 from './pages/page1';
// import FunctionalState from './pages/funState';

// import PropsInClass from './component/propsInClass';
// import TextDrection from './component/view';
import ButtonComponent from './component/button';
import ScrollView from './component/scrollView';
import ImageView from './component/image';
import Flexbox from './component/heigt_width';

;





export default class App extends Component {
  render() {
    return <View>

      {/* <Text style={{ color: 'red', textAlign: 'center' }}>
        one way use css
      </Text>
      <Text style={style.blue}>
        2nd way use css
      </Text> */}
      {/* <Page1 />
      <FunctionalState />
      <PropsInClass name="majed" age="30" city="dilli" />
      <TextDrection /> */}
      {/* <ButtonComponent/>
      <ScrollView/> */}
      {/* <Flexbox/> */}
      <Page1/>
    </View>

  }
}


const style = StyleSheet.create({
  blue: {
    color: 'blue',
    fontSize: 30,
    fontWeight: 'bold',

  }
})
