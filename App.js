import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Shopfood from './screens/Shopfood';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigations/BottomTab';

export default function App() {
  return (
    // <Home/>
    // <Shopfood/>
    <NavigationContainer>
            {/* <HomeStack /> */}
            <BottomTab />
            {/* <RootStack /> */}
    </NavigationContainer>

  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
