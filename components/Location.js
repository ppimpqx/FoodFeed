import React from "react";
import {  View,  Text} from "react-native";
import MyIcon from "./MyIcon";

export default function Location() {
  return (
    <View style={{ margin : 30 , paddingLeft : 0, backgroundColor : '#e8f5e9', borderRadius : 15 , alignItems: 'left'}}>
      <View style={{ flexDirection : "row", marginTop : 15, alignItems:"center", marginRight:30 }}>
        <MyIcon name="location-dot" size={35} color="#009688" />
        <Text style={{ fontSize: 20, color: "#009688" , marginBottom: 18 }}>ตำบลคลองหนึ่ง, อำเภอคลองหลวง</Text>
      </View>
    </View>
  );
}
