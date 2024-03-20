import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import FoodItem from "./FoodItem";

export default function Food(props) {
    return (
        <View style={props.style}>
            <Text style={{ fontSize : 20 }}>Tour</Text>
            <Text style={{ color:"grey" }}>Let find out what most interesting things</Text>
            <ScrollView horizontal={true} style={{ flexDirection : "row" , marginTop : 20}}>
                {/* <TourItem />
                <TourItem />
                <TourItem /> */}
                <View style={{marginRight:10}}>
                    <FoodItem/>
                </View>     
                <View style={{marginRight:10}}>
                    <FoodItem />
                </View>     
                <View style={{marginRight:10}}>
                    <FoodItem />
                </View>     
            </ScrollView>
        </View>
    );
}




