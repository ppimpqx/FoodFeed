import React from "react";
import {  View,  Text} from "react-native";
import MyIcon from "./MyIcon";


export default function HomeMenu() {
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
                <View style={{backgroundColor : "#e8f5e9", flex:1, borderRadius : 30, height:100, justifyContent : "center" , alignItems:"center" ,marginLeft:0}}>
                    <Text style={{ fontSize: 20, color: "#009688"}}>Food</Text>
                </View>
                <View style={{backgroundColor : "#e8f5e9", flex:1, borderRadius : 30, height:100, justifyContent : "center" , alignItems:"center" ,marginLeft:10 }}> 
                    <Text style={{ fontSize: 20, color: "#009688"}}>Car</Text>
                </View>
            </View>
            <View style={{flexDirection : "row", paddingLeft:15, paddingRight:15, paddingTop:-20}}>
                <View style={{backgroundColor : "#e8f5e9", flex:1, borderRadius : 30, height:100, justifyContent : "center" , alignItems:"center" ,marginLeft:0}}>
                    <Text style={{ fontSize: 20, color: "#009688"}}>Mart</Text>
                </View>
                <View style={{backgroundColor : "#e8f5e9", flex:1, borderRadius : 30, height:100, justifyContent : "center" , alignItems:"center" ,marginLeft:10 }}> 
                    <Text style={{ fontSize: 20, color: "#009688"}}>Packages</Text>
                </View>
            </View>
          </View>  
    
    
  );
}