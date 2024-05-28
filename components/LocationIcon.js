import React from "react";
import {  View,  Text} from "react-native";
import MyIcon from "./MyIcon";
import { useNavigation } from "@react-navigation/native";

export default function LocationIcon() {
  const navigation = useNavigation();
  return (
    <View style={{ margin : 20 , paddingLeft : 0, backgroundColor : '#e8f5e9', borderRadius : 50 , alignItems: 'left'}}>
      <View style={{ flexDirection : "row", marginTop : 15, alignItems:"center", marginRight:30 }}>
        <MyIcon name="location-dot" size={35} color="#009688" onPress={ ()=>{ navigation.navigate("Location") }}  />
        <Text style={{ fontSize: 20, color: "#009688" , marginBottom: 18 }}>ตำบลคลองหนึ่ง, อำเภอคลองหลวง</Text>
      </View>
    </View>
  );
}
