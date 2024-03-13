import React from "react";
import {  View,  Text} from "react-native";
import MyIcon from "./MyIcon";

export default function Location() {
  return (
    <View style={{ margin : 30 , paddingLeft : 0, backgroundColor : '#14A14C', borderRadius : 15 , alignItems: 'left'}}>
      <View style={{ flexDirection : "row", marginTop : 15, alignItems:"center", marginRight:30 }}>
        <MyIcon name="location-dot" size={35} color="white" />
        <Text style={{ fontSize: 20, color: "white" , marginBottom: 18 }}>ตำบลคลองหนึ่ง, อำเภอคลองหลวง</Text>
      </View>
    </View>
  );
}
