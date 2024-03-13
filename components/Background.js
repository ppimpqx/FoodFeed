import React from 'react';
import { View,Text } from 'react-native';

export default function Background() {
  return (    
      <View style={{ flex : 1 , flexDirection : 'column'}}>
        <View style={{ backgroundColor: '#0fc161' }}>
        </View>
        <View style={{ backgroundColor: '#ffffff' }}></View>
    </View>
  );
}
