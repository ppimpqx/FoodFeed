import React from 'react';
import { View , Image , Text} from 'react-native';

export default function Card() {
    return (
        <View style={{ borderBottomWidth: 0.5 ,padding : 20  }}>
            <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Room Type</Text>
            </View>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 10 }}>
                <Image style={{ width: 90, height: 110, borderRadius: 10}} source={require("../../assets/week3/room-8.jpg")} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 }}>Standard Twin Room</Text>
                    <Text  style={{ fontSize : 15 , color : 'red'}} ></Text>
                    <Text  style={{ fontSize : 15 , color : 'red'}} >$399.99</Text>
                    <Text style={{ color: "lightblue" }}>Hurry Up! This is your last room!</Text>
                </View>
            </View>
            
        </View>    
    );
}
