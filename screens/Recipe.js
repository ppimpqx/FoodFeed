import React, { useEffect, useState } from "react";
import { FlatList, Image, ImageBackground, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import RecipeStorage from "../storage/RecipeStorage";

export default function Recipe() {    
    const navigation = useNavigation(); 
    const [recipes, setRecipes] = useState([
        { id: 1, name: "พัฒนา Application ด้วย React และ React Native", price: 330, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-1.jpg", },
        { id: 2, name: "พัฒนาเว็บแอพพลิเคชันด้วย Firebase ร่วมกับ React", price: 229, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-2.jpg", },
        { id: 3, name: "พัฒนา Web Apps ด้วย React Bootstrap + Redux", price: 349, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-3.jpg", },
        { id: 4, name: "พัฒนาเว็บแอพพลิเคชันด้วย React Redux+Bootstrap", price: 229, image: "https://raw.githubusercontent.com/arc6828/myreactnative/master/assets/week9/book-4.jpg", },
    ]);    

    const loadRecipes = async () => {
        let recipes = await RecipeStorage.readItems();
        setRecipes(recipes);
    };


    useEffect(() => { 
        // WHEN MOUNT AND UPDATE
        const unsubscribe = navigation.addListener("focus", () => {
            loadRecipes();
        });
        // WHEN UNMOUNT
        return unsubscribe;
    }, [navigation]);


    const RecipeItem = ({ item, index })=>(
        <TouchableOpacity 
            onPress={() => { navigation.navigate("RecipeDetail", { "id": item.id }); }} 
            style={{ backgroundColor: "white",borderRadius:20, margin: 7, flex: 1/2, elevation: 5, }} 
            >
            <View style={{ flexDirection: "row" }}>
                <Image style={{ flex: 1, resizeMode: "cover", aspectRatio: 1 / 1 ,borderTopLeftRadius:20,borderTopRightRadius:20}} source={{ uri: item.image }} />
            </View>
            <View style={{ padding : 10 }}>
                <Text style={{ fontSize: 20, color:'#009688', textAlign: 'center'}}> {item.name} </Text>
            </View>  
        </TouchableOpacity>
    );

    const [refresh, setRefresh] = useState(false);

    return (
        <ImageBackground style={{ resizeMode : "cover", flex:1 }} source={{ uri: "https://raw.githubusercontent.com/ppimpqx/FoodFeed/main/assets/bg%E0%B8%A5%E0%B8%B2%E0%B8%A2.png" }}>
        <View style={{ flex: 1 }}>
            <FlatList
                data={recipes}
                refreshing={refresh}
                onRefresh={() => { loadRecipes(); }}
                numColumns={2}
                keyExtractor={item => item.id.toString()}
                renderItem={({ item, index }) => ( <RecipeItem item={item} /> ) }
            />
            <TouchableOpacity 
                onPress={() => { navigation.navigate("RecipeForm", { id: null }); }} 
                style={{backgroundColor: "#009688",flex: 1,alignItems: "center",justifyContent: "center",width: 80,height: 80,borderRadius: 40,position: "absolute",right: 30,bottom: 30,elevation: 5,}}
                >
                <FontAwesome name="plus" color='white' size={40} />
            </TouchableOpacity>
        </View>
        </ImageBackground>
    );
}