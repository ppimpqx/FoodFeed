import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Greeting from './components/Background';
import Home from './screens/Home';
import Shopfood from './screens/Shopfood';

export default function App() {
  return (
    // <Home/>
    <Shopfood/>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
