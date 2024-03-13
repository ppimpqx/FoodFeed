import React from 'react';
import { ScrollView, View,Image, ImageBackground } from 'react-native';
import Greeting from '../components/Greeting';
import Menu from '../components/Menu';
import Location from '../components/Location';
import Menu2 from '../components/Menu2';

export default function Home() {
    return (
        <ScrollView>
            <View style={{ backgroundColor: "#e8f5e9", height : 1000, justifyContent:"space-around", marginTop :20 }}>
                <View style={{ flex: 1, paddingTop : 10  }}>
                    <Location/>
                    <Menu2/>
                    <Menu/>
                    
                </View>
            </View>
        </ScrollView>
    );
}