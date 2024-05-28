import React from "react";
import {  View, Image} from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function LocationIcon() {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection:'column'}}>
      <View style={{ padding : 20 , alignItems: 'center'}}>
        <Image style={{ width: 400, height:180, borderRadius: 15 }} source={{uri:"https://raw.githubusercontent.com/ppimpqx/LineManApp/main/assets/promotion2.jpg"}} />
      </View>
      <View style={{ padding : 20 , alignItems: 'center', paddingTop:10}}>
        <Image style={{ width: 400, height:180, borderRadius: 15 }} source={{uri:"https://raw.githubusercontent.com/ppimpqx/FoodFeed/main/assets/promotion6.png"}} />
      </View>
      <View style={{ padding : 20 , alignItems: 'center', paddingTop:10}}>
        <Image style={{ width: 400, height:180, borderRadius: 15 }} source={{uri:"https://raw.githubusercontent.com/ppimpqx/FoodFeed/main/assets/promotion4.jpg"}} />
      </View>
    </View>
    
  );
}
