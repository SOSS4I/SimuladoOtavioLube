
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Carta3 from './src/pages/Carta3Page';
import Carta1 from './src/pages/Carta1Page';
import Carta2 from './src/pages/Carta2Page';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name='carta1' component={Carta1}/>
        <Stack.Screen name='carta3' component={Carta3}/>
        <Stack.Screen name='carta2' component={Carta2}/>
      </Stack.Navigator>
    </NavigationContainer>
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