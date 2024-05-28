import React from 'react';
import { ScrollView, View,Image, ImageBackground } from 'react-native';
import Greeting from '../components/Greeting';
import Location from '../components/LocationIcon';
import HomeMenu from '../components/HomeMenu';
import Promotion from '../components/Promotion';

export default function Home() {
    return (
        <ScrollView>
            <ImageBackground style={{ resizeMode : "cover", width:450,height:1100 }} source={require("../assets/bg2.png")}>
                <View style={{ flex: 1, paddingTop : 50  }}>
                    <Greeting/>
                    <Location/>
                    <HomeMenu/>
                    <Promotion/>
                </View>
            </ImageBackground>
        </ScrollView>
    );
}