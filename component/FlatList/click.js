import React, { Component } from 'react';
import { View, Text, FlatList, Image, Alert } from 'react-native';



export default class simple extends Component {
    myData = [
        { title: 'Bangladesh is awesome', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        { title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        { title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        { title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        { title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        { title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        { title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        { title: 'Bangladesh', subtitle: 'mycountry', img: "https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg" },
        { title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        { title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        { title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        { title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_960_720.jpg' },
        { title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_960_720.jpg' }

    ];
    onclick = (alertTitle) => {
        Alert.alert(alertTitle)
    }
    ChildView = ({ ChildTitle, ChildSubTitle, img }) => {
        return (
            <View style={{ backgroundColor: 'teal', margin: 5, flex: 100, flexDirection: 'row' }}>
                <View style={{ flex: 30 }}>
                    <Image style={{ height: 70, width: '100%' }} source={{ uri: img }} />
                </View>
                <View style={{ flex: 70, padding: 10 }}>
                    <Text onPress={this.onclick.bind(this, ChildTitle)} style={{ color: 'black', fontSize: 18 }}>{ChildTitle}</Text>
                    <Text style={{ color: 'black', fontSize: 12 }}>{ChildSubTitle}</Text>
                </View>
            </View>


        )
    }

    render() {
        return (
            <FlatList data={this.myData} renderItem={({ item }) => <this.ChildView ChildTitle={item.title} ChildSubTitle={item.subtitle} img={item.img} />} />
        )
    }
}
