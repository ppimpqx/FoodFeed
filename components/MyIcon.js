import React from "react";
import { FontAwesome } from "@expo/vector-icons";
import { FontAwesome6 } from "@expo/vector-icons";
import { TouchableOpacity, View , Text} from "react-native";

export default function MyIcon(props) {
  return (
    <View style={{ flex: 1, alignItems: "center" }}>
      <TouchableOpacity style={{ alignItems : "center" }} onPress={ props.onPress } >
        {/* <FontAwesome name={props.name} size={props.size} color={props.color} /> */}
        <FontAwesome6 name={props.name} size={props.size} color={props.color} />
        <Text>{props.title}</Text>
      </TouchableOpacity>
    </View>
  );
}
