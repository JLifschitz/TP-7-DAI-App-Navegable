import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/Home';
import LoginScreen from './components/Login';
import RegistrarseScreen from './components/Registrarse';
const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <navigator.container>
      <Stack.Navigator 
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Login" component={LoginScreen}/>
        <Stack.Screen name="Registrarse" component={RegistrarseScreen}/>
        <Stack.Screen name="Home" component={HomeScreen}/>
      </Stack.Navigator>
    </navigator.container>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
