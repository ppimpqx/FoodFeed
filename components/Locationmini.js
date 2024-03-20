import React from "react";
import {  View,  Text} from "react-native";
import MyIcon from "./MyIcon";

export default function Location() {
  return (
    <View style={{ margin : 50 , paddingLeft : 0, backgroundColor : '#009688', borderRadius : 15 , alignItems: 'left'}}>
      <View style={{ flexDirection : "row", marginTop : 15, alignItems:"center", marginRight:30 }}>
        <MyIcon name="location-dot" size={25} color="white" />
        <Text style={{ fontSize: 18, color: "white" , marginBottom: 18 }}>ตำบลคลองหนึ่ง, อำเภอคลองหลวง</Text>
      </View>
    </View>
  );
}
