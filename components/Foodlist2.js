import React from 'react';
import { View , Image , Text} from 'react-native';

export default function Card() {
    return (
        <View style={{ borderBottomWidth: 0.5 ,padding : 20}}>
            <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 ,color:"black"}}>Enjoy your meal!</Text>
            </View>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 20 }}>
                <Image style={{ width: 90, height: 110, borderRadius: 10, backgroundColor:"black"}} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 ,color:"#009688"}}>KFC</Text>
                    <Text  style={{ fontSize : 15 , color : 'black'}} >fast food</Text>
                    <Text  style={{ fontSize : 15 , color : 'gray'}} >$99</Text>
                    <Text style={{ color: "gray" }}>finger lickin' good</Text>
                </View>
            </View>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 20 }}>
                <Image style={{ width: 90, height: 110, borderRadius: 10, backgroundColor:"black"}} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 ,color:"#009688"}}>KFC</Text>
                    <Text  style={{ fontSize : 15 , color : 'black'}} >fast food</Text>
                    <Text  style={{ fontSize : 15 , color : 'gray'}} >$99</Text>
                    <Text style={{ color: "gray" }}>finger lickin' good</Text>
                </View>
            </View>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 20 }}>
                <Image style={{ width: 90, height: 110, borderRadius: 10, backgroundColor:"black"}} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 ,color:"#009688"}}>KFC</Text>
                    <Text  style={{ fontSize : 15 , color : 'black'}} >fast food</Text>
                    <Text  style={{ fontSize : 15 , color : 'gray'}} >$99</Text>
                    <Text style={{ color: "gray" }}>finger lickin' good</Text>
                </View>
            </View>
            {/* View ก้อนที่ 1  */}
            <View style={{ flexDirection: "row", padding: 20 }}>
                <Image style={{ width: 90, height: 110, borderRadius: 10, backgroundColor:"black"}} />
                <View style={{ paddingLeft: 10 }}>
                    <Text style={{ fontSize: 20 ,color:"#009688"}}>KFC</Text>
                    <Text  style={{ fontSize : 15 , color : 'black'}} >fast food</Text>
                    <Text  style={{ fontSize : 15 , color : 'gray'}} >$99</Text>
                    <Text style={{ color: "gray" }}>finger lickin' good</Text>
                </View>
            </View>
            
        </View>    
    );
}
