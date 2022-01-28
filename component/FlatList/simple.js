import React, { Component } from 'react';
import { View, Text, FlatList } from 'react-native';



export default class simple extends Component {
    myData = [
        { title: 'Bangladesh', subtitle: 'mycountry' },
        { title: 'Bangladesh', subtitle: 'mycountry' },
        { title: 'Bangladesh', subtitle: 'mycountry' },
        { title: 'Bangladesh', subtitle: 'mycountry' },
        { title: 'Bangladesh', subtitle: 'mycountry' },
        { title: 'Bangladesh', subtitle: 'mycountry' },
        { title: 'Bangladesh', subtitle: 'mycountry' },
        { title: 'Bangladesh', subtitle: 'mycountry' },
        { title: 'Bangladesh', subtitle: 'mycountry' },
        { title: 'Bangladesh', subtitle: 'mycountry' },
        { title: 'Bangladesh', subtitle: 'mycountry' },
        { title: 'Bangladesh', subtitle: 'mycountry' },
        { title: 'Bangladesh', subtitle: 'mycountry' }

    ];
    ChildView = ({ ChildTitle, ChildSubTitle }) => {
        return (
            <View style={{ backgroundColor: 'orange', padding: 10, margin: 5 }}>
                <Text style={{ color: 'black', fontSize: 18 }}>{ChildTitle}</Text>
                <Text style={{ color: 'black', fontSize: 12 }}>{ChildSubTitle}</Text>
            </View>
        )
    }


    render() {
        return (
            <FlatList data={this.myData} renderItem={({item})=><this.ChildView ChildTitle={item.title} ChildSubTitle={item.subtitle}/>}/>
        )
    }
}
