import React from "react";
import {  View,  TextInput } from "react-native";
import MyIcon from "./MyIcon";

export default function Menu() {
  return (
    <View style={{ margin : 20 , padding : 10, borderColor : 'gray', borderRadius : 20 }}>
      <View style={{ flexDirection : "row", marginTop : 10 ,}}>
        <MyIcon title="Home" name="house" size={30} color='#009688' />
        <MyIcon title="Order" name="rotate-left" size={30} color="gray" />
        <MyIcon title="Inbox" name="inbox" size={30} color="gray" />
        <MyIcon title="More" name="bars" size={30} color="gray" />
      </View>
    </View>
  );
}
