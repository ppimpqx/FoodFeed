import React from 'react';
import { ScrollView, View,Image, ImageBackground } from 'react-native';
import Greeting from '../components/Greeting';
import Menu from '../components/Menu';
import Location from '../components/Location';
import Menu2 from '../components/Menu2';

export default function Home() {
    return (
        <ScrollView>
            <ImageBackground style={{ resizeMode : "cover", width:450,height:650 }} source={require("../assets/bg.png")}>
                <View style={{ flex: 1, paddingTop : 50  }}>
                    <Greeting/>
                    <Location/>
                    <Menu2/>
                    <Menu/>
                    
                </View>
            </ImageBackground>
        </ScrollView>
    );
}