// import React, { useEffect, useState } from "react";
// import { Alert, Image, Text, TouchableOpacity, View } from "react-native";
// import { FontAwesome } from "@expo/vector-icons";
// import { useNavigation, useRoute } from "@react-navigation/native";

// export default function RecipeDetail() {
//     const navigation = useNavigation();
//     const route = useRoute();   
//     // const [recipe, setRecipe] = useState({
//     //     "id":"xxxx",
//     //     "name":"Example Recipe",
//     //     "price":"100",
//     //     "image":"https://picsum.photos/300",
//     // });     

//     //DELETE POPUP    
//     const deleteRecipe = async () => {  
//         const { id } = route.params;
//         //REMOVE RECIPE
//         await RecipeStorage.removeItem(id);
//         //REDIRECT TO
//         navigation.navigate("Recipe");
//       };

//     const confirmDelete = () => {    
//         return Alert.alert(
//             "ยืนยันการลบ?",
//             "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?",
//             [
//                 { text: "ยกเลิก", },
//                 { text: "ยืนยัน", onPress: () => { deleteRecipe(); }, },
//             ]
//         );
//     };

//     // TOP RIGHT MENU
//     const TopRightMenu = ()=>(
//         <View style={{ flexDirection: "row", width: 100, justifyContent: "space-around" }}>
//             <TouchableOpacity 
//                 onPress={() => { navigation.navigate("RecipeForm", { "id": recipe.id }); }}
//                 >
//                 <FontAwesome name="edit" size={30} />
//             </TouchableOpacity>
//             <TouchableOpacity 
//                 onPress={() => { confirmDelete(); }}
//                 >
//                 <FontAwesome name="trash" size={30} />
//             </TouchableOpacity>
//         </View>
//     );
//     const onLoad = async () => {      
//         navigation.setOptions({ headerRight: () => ( <TopRightMenu /> ) });               
//     };
//     useEffect(() => { onLoad(); }, []);
//     // CONDITIONAL RENDERING
//     if(Object.keys(recipe).length == 0){ return <View></View> }

//     return (
//         <View style={{ backgroundColor: "white", flex: 1 }}>
//             <TouchableOpacity onPress={() => { setModalVisible(true); }} >
//                 <View style={{ flexDirection: "row" }}>
//                     <Image style={{ flex: 1, resizeMode: "contain", aspectRatio: 1 / 1 }} source={{ uri: recipe.image }} />
//                 </View>
//             </TouchableOpacity>
//             <View style={{ padding: 10 }}>
//                 <Text style={{ fontSize: 20, marginVertical: 10 }}> {recipe.name} </Text>
//                 <View style={{ flexDirection: "row" }}>
//                     <Text style={{ color: "green", fontSize: 20 }}>{recipe.price}</Text>
//                     <Text style={{ paddingTop: 6 }}> บาท</Text>
//                 </View>
//             </View>            
//         </View>
//     );
// }


import React, { useEffect, useState } from "react";
import { Alert, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import RecipeStorage from "../storage/RecipeStorage";
import Recipe from "./Recipe";
import { ScrollView } from "react-native-gesture-handler";

export default function RecipeDetail() {
    const navigation = useNavigation();
    const route = useRoute();   
    const [recipe, setRecipe] = useState({
        // "id": "xxxx",
        // "name": "Example Recipe",
        // "price": "100",
        // "image": "https://picsum.photos/300",
    });
    console.log("recipe 4", recipe)


    //DELETE POPUP    
    const deleteRecipe = async () => {
        const { id } = route.params;
        //REMOVE Recipe
        await RecipeStorage.removeItem(id);
        //REDIRECT TO
        navigation.navigate("Recipe");
    };

    const confirmDelete = () => {
        return Alert.alert("ยืนยันการลบ?", "คุณแน่ใจหรือไม่ว่าจะลบรายการนี้?",
            [{ text: "ยกเลิก", }, { text: "ยืนยัน", onPress: () => { deleteRecipe(); }, }]);
    };


    // TOP RIGHT MENU
    const TopRightMenu = ({b}) => (
        <View style={{ flexDirection: "row", width: 100, justifyContent: "space-around" }}>
            <TouchableOpacity
                onPress={() => { navigation.navigate("RecipeForm", { "id": b.id }); }}
            >
                <FontAwesome name="edit" color='#009688' size={30} />
            </TouchableOpacity>
            <TouchableOpacity
                onPress={() => { confirmDelete(); }}
            >
                <FontAwesome name="trash" color='#009688' size={30} />
            </TouchableOpacity>
        </View>
    );
    const onLoad = async () => {
        const { id } = route.params;
        let b = await RecipeStorage.readItemDetail(id);
        navigation.setOptions({ headerRight: () => (<TopRightMenu b={b} />) });

        setRecipe(b);

    };

    useEffect(() => { onLoad(); }, []);

    // CONDITIONAL RENDERING
    if (Object.keys(recipe).length == 0) { return <View></View> }

    return (
        <ImageBackground style={{ resizeMode : "cover", flex:1 }} source={{ uri: "https://raw.githubusercontent.com/ppimpqx/FoodFeed/main/assets/bg%E0%B8%A5%E0%B8%B2%E0%B8%A2.png" }}>
        <ScrollView style={{ flex: 1}}>
            <View style={{ padding: 40}}>    
                <Image style={{ flex: 1, aspectRatio: 3 / 2,borderRadius:20}} source={{ uri: recipe.image }} />
            </View>
            <Text style={{ color:"#009688",fontSize: 20, marginVertical: 10, paddingLeft:40}}>ชื่อเมนู </Text>
            <View style={{ backgroundColor:'white',marginBottom: 15 , borderRadius:20, marginLeft:40,marginRight:40 }}>   
                <Text style={{ fontSize: 18, marginVertical: 10, paddingLeft:40 }}>{recipe.name} </Text>
            </View>  
            <Text style={{ color:"#009688",fontSize: 20, marginVertical: 10, paddingLeft:40}}>วัตถุดิบ </Text>
            <View style={{ backgroundColor:'white',marginBottom: 15 , borderRadius:20, marginLeft:40,marginRight:40 }}>   
                <Text style={{ fontSize: 18 , marginVertical: 10, paddingLeft:40}}>{recipe.ingredients}</Text>
            </View>   
            <Text style={{ color:"#009688",fontSize: 20, marginVertical: 10, paddingLeft:40}}>วิธีทำ </Text>
            <View style={{ backgroundColor:'white',marginBottom: 15 , borderRadius:20, marginLeft:40,marginRight:40 }}>   
                <Text style={{ fontSize: 18, marginVertical: 10 , paddingLeft:40, paddingRight:30}}>{recipe.directions}</Text>
            </View>
        </ScrollView></ImageBackground>
    );
}