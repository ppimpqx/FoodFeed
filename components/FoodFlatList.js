import React, { useEffect, useState } from "react";
import { FlatList, Image, ScrollView, Text, View } from "react-native";

export default function Foodlist(props) {

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
        loadOnlineFood();
    }, []);


    return (
        <View style={props.style}>
            <Text style={{ fontSize: 20 , paddingLeft:20}}>Enjoy your Meal!</Text>
            {/* <Text style={{ color: "grey", marginVertical: 10 }}>What's the worst That Could Happend</Text> */}
            <FlatList
                horizontal={true}
                data={onlineFood}
                renderItem={
                    ({ item, index }) => {
                        console.log(item, index, item.photograph);
                        return (
                            // <View style={{ marginRight: 10 }}>
                            //     <Image style={{ width: 260, height: 150, borderTopLeftRadius: 10,borderTopRightRadius: 10 }} source={{ uri: item.uri }} />
                            //     <View style={{flexDirection : "row", marginTop: -30, height: 70, width: 260, paddingHorizontal: 10, borderBottomLeftRadius: 10, borderBottomRightRadius: 10,borderColor:"gray" ,borderWidth:1}}>
                            //         <View style={{ padding:8 }}>
                            //             <Text style={{ fontSize: 16, color: "red" }}>{item.cuisine_type}</Text>
                            //             <Text style={{ textAlign:'center',fontSize: 12, color: "gray" }}>{item.address}</Text>
                            //         </View>
                            //         <View style={{ padding:8 }}>
                            //             <Text style={{ fontSize: 160, color: "black" }}>{item.name}</Text>
                            //             <Text style={{ fontSize: 16, color: "black" }}>{item.restaurants[index].name}</Text>
                            //             <Text style={{ fontSize: 10, color: "gray" }}>{item.restaurants[index].cuisine_type}</Text>
                            //             <Text style={{ fontSize: 10, color: "gray" }}>{item.restaurants[index].address}</Text>
                            //         </View>
                            //     </View>
                            // </View>
                            <View style={{ flexDirection: "row", padding: 10 }}>
                                {/* รูปยังไม่ขึ้นแต่ข้อมูลขึ้นแล้ว */}
                                <Image style={{ width: 90, height: 110, borderRadius: 10}}source={{ photograph : item.restaurants[index].photograph}}/> 
                                <View style={{ paddingLeft: 10 }}>
                                <Text style={{ fontSize: 160, color: "black" }}>{item.name}</Text>
                                        <Text style={{ fontSize: 20, color: "#009688" }}>{item.restaurants[index].name}</Text>
                                        <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[index].cuisine_type}</Text>
                                        <Text style={{ fontSize: 15, color: "gray" }}>{item.restaurants[index].address}</Text>
                                        {/* <Text style={{ color: "gray" }}>finger lickin' good</Text> */}
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