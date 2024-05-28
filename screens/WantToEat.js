import React, { useEffect, useState } from 'react';
import { View, FlatList , TouchableOpacity ,Image, ImageBackground } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import TodoStorage from '../storage/TodoStorage';
import TodoItem from '../components/TodoItem';
// import { useNavigation } from '@react-navigation/native';

export default function WantToEat() {
    // const navigation = useNavigation();
    const [todos, setTodos] = useState(
        [
            // { id: '1', completed: false, title: "exercise @ 7.00" },
            // { id: '2', completed: false, title: "meeting @ 9.00" },
            // { id: '3', completed: false, title: "go to cinema @ 19.00" },
        ]
    );

    console.log("TODOS:", todos);

    const onLoad = async () => {
        // READ ITEMS FROM STORAGE
        let data = await TodoStorage.readItems();
        // console.log("data:", data);
        setTodos(data)
        // SET STATE - WRITE CODE HERE
    };

    useEffect(()=>{ onLoad(); },[]);

    const onCreate = () => {
        let new_data = {
            id : '_' + Math.random().toString(36).substr(2, 9), //RANDOM NUMBER
            title : "", //Empty String
            completed : false,
        };
        //CLONE ARRAY + APPEND NEW DATA INTO ARRAY
        let t = [...todos, new_data];
        //UPDATE STATE
        setTodos(t);               

        // WRITE ITEM TO STORAGE - WRITE CODE HERE
        TodoStorage.writeItems(t);
    };     
    const onUpdate = (new_title, id) => {   
        //CLONE ARRAY FIRST
        let t = [...todos];
        //Find index of specific object using findIndex method.   
        let index = t.findIndex((item => item.id == id));
        //Update object's name property.
        console.log("t:", t[index],id);
        t[index].title = new_title;
        //UPDATE STATE
        setTodos(t);
        
        // WRITE ITEM TO STORAGE - WRITE CODE HERE
        TodoStorage.writeItems(t);
    }; 
    const onCheck = (id) => {
        let t = [...todos];
        let index = t.findIndex((item => item.id == id));
        //SET INVERSE VALUE BOOLEAN
        t[index].completed = ! t[index].completed;
        setTodos(t);        
        
        // WRITE ITEM TO STORAGE - WRITE CODE HERE        
        TodoStorage.writeItems(t);
    };   
    const onDelete = (id) => {   
        //CLONE ARRAY FIRST
        let t = [...todos];
        let index = t.findIndex((item => item.id == id));
        [removed_t] = t.splice(index, 1);
        console.log(removed_t);
        setTodos(t);                
        
        // REMOVE AN ITEM FROM STORAGE - WRITE CODE HERE
        TodoStorage.writeItems(t);
    };  


    return (
        <ImageBackground style={{ resizeMode : "cover", flex:1 }} source={{ uri: "https://raw.githubusercontent.com/ppimpqx/FoodFeed/main/assets/bgwanttoeat.png" }}>
        <View style={{ flex: 1}}>
            <FlatList 
                style={{ marginTop: 15, color:"white"}}
                data={todos}
                keyExtractor={item => item.id}
                renderItem={({ item }) => (
                    // <Text>{item.title}</Text>
                    <View style={{ marginBottom: 15 ,paddingLeft:20,paddingRight:20}}>
                    <TodoItem item={item} onUpdate={onUpdate} onCheck={onCheck} onDelete={onDelete} />
                    </View>
                )}
            />
            <TouchableOpacity
                style={{
                    backgroundColor: "#009688",
                    padding: 12,
                    width: 50,
                    height: 50,
                    alignItems: "center",
                    alignContent: "center",
                    borderRadius: 25,
                    position: 'absolute',
                    right: 200,
                    bottom: 100,
                    zIndex: 1,
                }}
                onPress={onCreate}
            >
                <FontAwesome name='plus' size={26} color="white" />
            </TouchableOpacity>
            {/* <Image style={{ flex:1}} source={{uri:"https://raw.githubusercontent.com/ppimpqx/FoodFeed/main/assets/want.png"}} /> */}

        </View>
        </ImageBackground>
    );
}