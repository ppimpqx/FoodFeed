import React, { useEffect, useLayoutEffect, useState } from "react";
import { KeyboardAvoidingView, ScrollView, Text, TextInput, Button, Platform, ImageBackground, View } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import RecipeStorage from "../storage/RecipeStorage";

export default function RecipeForm() {  
  const navigation = useNavigation();
  const route = useRoute();
  // RANDOM ID
  const [key, setKey] = useState( "_" + Math.random().toString(36).substring(2, 9) );
  const [name, setName] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [directions, setDirections] = useState("");
  const [image, setImage] = useState("");
  
  const onLoad = async () => {
    const { id } = route.params;
    if (id) {
      let recipe = await RecipeStorage.readItemDetail(id);   
      setKey(recipe.id);
      setName(recipe.name);
      setIngredients(recipe.ingredients);
      setDirections(recipe.directions);
      setImage(recipe.image);

    }
    navigation.setOptions({ title: (id ? "edit" : "create") });    
  };
  useEffect(() => { onLoad();  }, []);

  const saveRecipe = async () => {
    //A NEW ITEM
    let new_data = { id: key, name: name, ingredients: ingredients, directions: directions, image: image };
    //SAVE TO STORAGE
    await RecipeStorage.writeItem(new_data);
    //REDIRECT TO
    navigation.navigate("Recipe");
  };

//   useLayoutEffect(() => {
//     navigation.setOptions({ title: id ? "edit" : "create" });
//   }, [navigation]);

//   return (
//     <KeyboardAvoidingView style={{ flex: 1, padding: 20 }}>
//       <ScrollView>
//         <Text>ชื่อเมนู</Text>
//         <TextInput placeholder="Enter name ..." value={name} onChangeText={(text) => setName(text)} />
//         <Text>วัตถุดิบ</Text>
//         <TextInput placeholder="Enter ingredients ..." value={ingredients} onChangeText={(text) => setIngredients(text)} />
//         <Text>วิธีทำ</Text>
//         <TextInput placeholder="Enter directions ..." value={directions} onChangeText={(text) => setDirections(text)} />
//         <Text>ลิงค์รูปภาพ</Text>
//         <TextInput placeholder="Enter image URL ..." value={image} onChangeText={(text) => setImage(text)} />
//       </ScrollView>
//       <Button title="SAVE" color="tomato" onPress={saveRecipe} />
//     </KeyboardAvoidingView>
//   );
// }

return (
  <ImageBackground style={{ resizeMode : "cover", flex:1 }} source={{ uri: "https://raw.githubusercontent.com/ppimpqx/FoodFeed/main/assets/bg%E0%B8%A5%E0%B8%B2%E0%B8%A2.png" }}>
  <KeyboardAvoidingView
    style={{ flex: 1, padding: 20}}
    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
  >
    <ScrollView>
      <Text style={{color:'#009688',marginBottom:15,fontSize: 20}}>ชื่อเมนู</Text>
      <View style={{ backgroundColor:'white',marginBottom: 10 , borderRadius:15 }}>   
      <TextInput
        fontSize={15}
        paddingLeft={10}
        placeholder="ป้อนชื่อเมนู ..."
        value={name}
        onChangeText={(text) => setName(text)}
        style={{ marginBottom: 10, borderBottomWidth: 1, borderColor: 'white' }}
      />
      </View>
      <Text style={{color:'#009688',marginBottom:15,fontSize: 20}} >วัตถุดิบ</Text>
      <View style={{ backgroundColor:'white',marginBottom: 10 , borderRadius:15 }}>   
      <TextInput
        fontSize={15}
        paddingLeft={10}
        placeholder="ป้อนวัตถุดิบ ..."
        value={ingredients}
        onChangeText={(text) => setIngredients(text)}
        multiline
        numberOfLines={4}
        style={{ marginBottom: 10, borderBottomWidth: 1, borderColor: 'white' }}
      />
      </View>
      <Text style={{color:'#009688',marginBottom:15,fontSize: 20}}>วิธีทำ</Text>
      <View style={{ backgroundColor:'white',marginBottom: 10 , borderRadius:15 }}>   
      <TextInput
        fontSize={15}
        paddingLeft={10}
        placeholder="ป้อนวิธีทำ ..."
        value={directions}
        onChangeText={(text) => setDirections(text)}
        multiline
        numberOfLines={4}
        style={{ marginBottom: 10, borderBottomWidth: 1, borderColor: 'white' }}
      />
      </View>
      <Text style={{color:'#009688',marginBottom:15,fontSize: 20}}>ลิงค์รูปภาพ</Text>
      <View style={{ backgroundColor:'white',marginBottom: 10 , borderRadius:15 }}>   
      <TextInput
        fontSize={15}
        paddingLeft={10}
        placeholder="ป้อน image URL ..."
        value={image}
        onChangeText={(text) => setImage(text)}
        style={{ marginBottom: 10, borderBottomWidth: 1, borderColor: 'white' }}
      />
      </View>
    </ScrollView>
    <Button title="SAVE" color="#009688" onPress={saveRecipe} />
  </KeyboardAvoidingView></ImageBackground>
);
}