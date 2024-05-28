import React from "react";
import { Image, ScrollView, Text, View } from "react-native";
import FoodFlatList from "./FoodFlatList";

export default function Food(props) {
    return (
        <View style={props.style}>
            <Text style={{ fontSize : 20 }}>Tour</Text>
            <Text style={{ color:"grey" }}>Let find out what most interesting things</Text>
            <ScrollView horizontal={true} style={{ flexDirection : "column" , marginTop : 20}}>
                {/* <TourItem />
                <TourItem />
                <TourItem /> */}
                <View style={{marginRight:10}}>
                    <FoodFlatList/>
                </View>     
                <View style={{marginRight:10}}>
                    <FoodFlatList/>
                </View>     
                <View style={{marginRight:10}}>
                    <FoodFlatList/>
                </View>     
            </ScrollView>
        </View>
    );
}




