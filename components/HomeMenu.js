import React from "react";
import {  View,  Text} from "react-native";
import { FontAwesome6 } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";
export default function HomeMenu() {
    const navigation = useNavigation();
  return (
    // <View style={{ margin : 30 , paddingLeft : 20, backgroundColor : '#e8f5e9', borderRadius : 15 , alignItems: 'left'}}>
    //   <View style={{ flexDirection : "row", marginTop : 15, alignItems:"center", marginRight:30 }}>
    //     <Text style={{ fontSize: 20, color: "#009688" , marginBottom: 18 }}>Food</Text>
    //   </View>
    // </View>


    // <View style={{flexDirection : "row", marginVertical:20, margin : 30 }}>
    //   <View style={{backgroundColor : "#e8f5e9", flex:1, borderRadius : 10, height:80, alignContent: "center", alignItems: "left", justifyContent: "center" }}>
    //     <View style={{marginLeft:10}}>
    //       <Text style={{ fontSize: 20, color: "#009688" ,marginTop:25}}>Food</Text>
    //     </View>
    //     <View style={{marginLeft:20}}>
    //       <MyIcon style={{}} name="bowl-food" size={35} color="#009688"/>
    //     </View>
    //   </View>
    //   <View style={{backgroundColor : "#e8f5e9", flex:1, borderRadius : 10, height:80, marginLeft: 10 }}> 
    //     {/* <Text style={{ fontSize: 20, color: "#009688",marginTop:25}}>Ride</Text> */}
    //     <MyIcon name="car" size={35} color="#009688" />
    //   </View>
    // </View>
          <View>
            <View style={{flexDirection : "row", marginVertical:20, paddingTop:15, paddingLeft:15, paddingRight:15}}>
                <View style={{flexDirection : "row",backgroundColor : "#e8f5e9", flex:1, borderRadius : 30, height:100, justifyContent : "center" , alignItems:"center" ,marginLeft:0}}>
                    <FontAwesome6 name="bowl-food" size={30} color="#009688" onPress={()=>{ navigation.navigate("Foodshop"); }} />
                    <Text style={{ fontSize: 20, color: "#009688", paddingLeft:20}} onPress={()=>{ navigation.navigate("Foodshop"); }} >Food</Text>
                </View>
                <View style={{flexDirection : "row",backgroundColor : "#e8f5e9", flex:1, borderRadius : 30, height:100, justifyContent : "center" , alignItems:"center" ,marginLeft:10 }}> 
                    <FontAwesome6 name="book-open" size={30} color="#009688" onPress={()=>{ navigation.navigate("Recipe"); }} />
                    <Text style={{ fontSize: 20, color: "#009688", paddingLeft:20}} onPress={()=>{ navigation.navigate("Recipe"); }} >Recipe</Text>
                </View>
            </View>
            <View style={{flexDirection : "row", paddingLeft:15, paddingRight:15, paddingTop:-20}}>
                <View style={{flexDirection : "row",backgroundColor : "#e8f5e9", flex:1, borderRadius : 30, height:100, justifyContent : "center" , alignItems:"center" ,marginLeft:0}}>
                    <FontAwesome6 name="user-group" size={30} color="#009688" onPress={()=>{ navigation.navigate("Foodshop"); }} />
                    <Text style={{ fontSize: 20, color: "#009688", paddingLeft:20}} onPress={()=>{ navigation.navigate("Foodshop"); }} >Community</Text>
                </View>
                <View style={{flexDirection : "row",backgroundColor : "#e8f5e9", flex:1, borderRadius : 30, height:100, justifyContent : "center" , alignItems:"center" ,marginLeft:10 }}> 
                <FontAwesome6 name="heart" size={30} color="#009688" onPress={()=>{ navigation.navigate("WantToEat"); }} />
                <Text style={{ fontSize: 20, color: "#009688", paddingLeft:20}} onPress={()=>{ navigation.navigate("WantToEat"); }} >Want to Eat!</Text>
                </View>
            </View>
          </View>  
    
    
  );
}