import React from 'react';
import { View, TextInput, TouchableOpacity } from 'react-native';
// import { Ionicons } from '@expo/vector-icons';
import { FontAwesome6 } from '@expo/vector-icons';

export default function TodoItem(props) {    
    return (     
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                // paddingHorizontal : 50,
                // paddingVertical : 20,
                backgroundColor: 'white',
                borderRadius:20,
                padding:20
            }}>
            <TouchableOpacity style={{  flex : 2}} onPress={()=>props.onCheck(props.item.id) }>
                <FontAwesome6 name={ props.item.completed ? "check-square" : "square" } size={23} color="#009688"/>                               
            </TouchableOpacity>
            <View style={{ flex: 12 }}>                                  
                <TextInput value={props.item.title} placeholder="What I want to eat..." onChangeText={(new_title) => props.onUpdate(new_title, props.item.id) } style={{ color: '#009688' }} />                                  
            </View>
            <TouchableOpacity  style={{  flex : 1 }} onPress={()=>props.onDelete(props.item.id) } >
                <FontAwesome6 name="trash" color="#009688" size={23} />
            </TouchableOpacity>
        </View>             
    );
}