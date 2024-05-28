import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Foodshop from './screens/Foodshop';
import Home from './screens/Home';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './navigations/BottomTab';
import RootStack from './navigations/RootStack';

export default function App() {
  return (
    // <Home/>
    // <Foodshop/>
    <NavigationContainer>
            {/* <HomeStack /> */}
            {/* <BottomTab /> */}
            <RootStack />
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
