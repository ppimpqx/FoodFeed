import React from 'react';
import { View , Image , Text} from 'react-native';

export default function Greeting() {
    return (
        <View style={{ padding : 10  }}>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row" }}>
                <View style={{ paddingLeft: 10}}>
                    {/* <Text style={{ fontSize: 30 , color: "white" }}>Hi</Text>
                    <Text style={{ fontSize: 20, color: "white" }}>Nice to meet you! </Text> */}
                      <Image style={{ width: 200, height:75, borderRadius: 15 }} source={{uri:"https://raw.githubusercontent.com/ppimpqx/FoodFeed/main/assets/hi.png"}} />
                </View>
            </View>
        </View>    
    );
}
