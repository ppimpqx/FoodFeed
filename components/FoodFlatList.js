import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function FoodFlatList(props) {

    const [onlineFood, setOnlineFood] = useState([]);
    const loadOnlineFood = async () => {
        try {
            let promise = await fetch('https://raw.githubusercontent.com/ppimpqx/LineManApp/main/data.json');
            let data = await promise.json();
            console.log("Load Data 111 : ", data);
            //SET STATE
            setOnlineFood(data);
        } catch (error) {
            console.log("ERROR : ", error);
        }
    }

    useEffect(() => {
        console.log("OF", onlineFood)
        loadOnlineFood();
    }, []);


    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 , paddingLeft:10, paddingBottom:10}}>Enjoy your Meal!</Text>
            {/* <Text style={{ color: "grey", marginVertical: 10 }}>What's the worst That Could Happend</Text> */}
            <FlatList
                horizontal={true}
                data={onlineFood}
                renderItem={
                    ({ item, index }) => {
                            return (
                                <View style={{flexDirection:'column'}}>
                                <View style={{backgroundColor: 'white', borderRadius: 10, padding:20, flexDirection:'row', marginVertical:10}}>
                                    <Image style={{ width: 90, height: 110, borderRadius: 10}} source={{ uri: item.restaurants[0].photograph}}/> 
                                    <View style={{ paddingLeft: 20, paddingTop:20}}>
                                            <Text style={{ fontSize: 20, color: "#009688" }}>{item.restaurants[0].name}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[0].cuisine_type}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[0].address}</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: 'white', borderRadius: 10, padding:20, flexDirection:'row', marginVertical:10}}>
                                    <Image style={{ width: 90, height: 110, borderRadius: 10}} source={{ uri: item.restaurants[1].photograph}}/> 
                                    <View style={{ paddingLeft: 20, paddingTop:20}}>
                                            <Text style={{ fontSize: 20, color: "#009688" }}>{item.restaurants[1].name}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[1].cuisine_type}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[1].address}</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: 'white', borderRadius: 10, padding:20, flexDirection:'row', marginVertical:10}}>
                                    <Image style={{ width: 90, height: 110, borderRadius: 10}} source={{ uri: item.restaurants[2].photograph}}/> 
                                    <View style={{ paddingLeft: 20, paddingTop:20}}>
                                            <Text style={{ fontSize: 20, color: "#009688" }}>{item.restaurants[2].name}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[2].cuisine_type}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[2].address}</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: 'white', borderRadius: 10, padding:20, flexDirection:'row', marginVertical:10}}>
                                    <Image style={{ width: 90, height: 110, borderRadius: 10}} source={{ uri: item.restaurants[3].photograph}}/> 
                                    <View style={{ paddingLeft: 20, paddingTop:20}}>
                                            <Text style={{ fontSize: 20, color: "#009688" }}>{item.restaurants[3].name}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[3].cuisine_type}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[3].address}</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: 'white', borderRadius: 10, padding:20, flexDirection:'row', marginVertical:10}}>
                                    <Image style={{ width: 90, height: 110, borderRadius: 10}} source={{ uri: item.restaurants[4].photograph}}/> 
                                    <View style={{ paddingLeft: 20, paddingTop:20}}>
                                            <Text style={{ fontSize: 20, color: "#009688" }}>{item.restaurants[4].name}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[4].cuisine_type}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[4].address}</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: 'white', borderRadius: 10, padding:20, flexDirection:'row', marginVertical:10}}>
                                    <Image style={{ width: 90, height: 110, borderRadius: 10}} source={{ uri: item.restaurants[5].photograph}}/> 
                                    <View style={{ paddingLeft: 20, paddingTop:20}}>
                                            <Text style={{ fontSize: 20, color: "#009688" }}>{item.restaurants[5].name}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[5].cuisine_type}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[5].address}</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: 'white', borderRadius: 10, padding:20, flexDirection:'row', marginVertical:10}}>
                                    <Image style={{ width: 90, height: 110, borderRadius: 10}} source={{ uri: item.restaurants[6].photograph}}/> 
                                    <View style={{ paddingLeft: 20, paddingTop:20}}>
                                            <Text style={{ fontSize: 20, color: "#009688" }}>{item.restaurants[6].name}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[6].cuisine_type}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[6].address}</Text>
                                    </View>
                                </View>
                                <View style={{backgroundColor: 'white', borderRadius: 10, padding:20, flexDirection:'row', marginVertical:10}}>
                                    <Image style={{ width: 90, height: 110, borderRadius: 10}} source={{ uri: item.restaurants[7].photograph}}/> 
                                    <View style={{ paddingLeft: 20, paddingTop:20}}>
                                            <Text style={{ fontSize: 20, color: "#009688" }}>{item.restaurants[7].name}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[7].cuisine_type}</Text>
                                            <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[7].address}</Text>
                                    </View>
                                </View>
                                </View>
                            );
                    }
                }
                keyExtractor={item => item.id}
            />
        </View>

    );
}