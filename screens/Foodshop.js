import React from "react";
import { ScrollView, View } from "react-native";
import FoodFlatList from "../components/FoodFlatList";
import Locationmini from "../components/Locationmini";

export default function Foodshop() {
    return (
        <ScrollView>
            <View style={{ flex: 1, backgroundColor: '#e8f5e9' ,resizeMode : "cover", width:450,height:1000}}>
                <Locationmini/>
                <FoodFlatList style={{ margin: 20 }}/>
            </View>
        </ScrollView>

    );
}