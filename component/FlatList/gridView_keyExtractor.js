import React, { Component } from 'react';
import { View, Text, FlatList, Image, Alert } from 'react-native';



export default class simple extends Component {
    myData = [
        {id:1,title: 'Bangladesh is awesome', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        {id:2, title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        {id:3, title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        {id:4, title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        {id:5, title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        {id:6, title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        {id:7, title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        {id:8, title: 'Bangladesh', subtitle: 'mycountry', img: "https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg" },
        {id:9, title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        {id:10, title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        {id:10, title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2021/11/06/16/11/greece-6773683_960_720.jpg' },
        {id:11, title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_960_720.jpg' },
        {id:12, title: 'Bangladesh', subtitle: 'mycountry', img: 'https://cdn.pixabay.com/photo/2014/08/12/00/01/santorini-416136_960_720.jpg' }

    ];
    onclick = (alertTitle) => {
        Alert.alert(alertTitle)
    }
    ChildView = ({ ChildTitle, ChildSubTitle, img }) => {
        return (
            <View  style={{ backgroundColor: 'white', margin: 5,  flexDirection: 'column', width:194 ,height:300}}>
                <View >
                    <Image style={{ height: 150, width: '100%' }} source={{ uri: img }} />
                </View>
                <View style={{  padding: 10 }}>
                    <Text onPress={this.onclick.bind(this, ChildTitle)} style={{ color: 'black', fontSize: 18 }}>{ChildTitle}</Text>
                    <Text style={{ color: 'black', fontSize: 12 }}>{ChildSubTitle}</Text>
                </View>
            </View>


        )
    }

    render() {
        return (
            <FlatList keyExtractor={item=>item.id} numColumns={2} data={this.myData} renderItem={({ item }) => <this.ChildView ChildTitle={item.title} ChildSubTitle={item.subtitle} img={item.img} />} />
        )
    }
}