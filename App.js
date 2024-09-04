import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './components/Home';
import LoginScreen from './components/Login';
import RegistrarseScreen from './components/Registrarse';

const Stack = createNativeStackNavigator();

const App = () => {
  const urlApi = `${DBDomain}/api/actPreferida/1`;
  let [token, setToken] = useState();
  
  const fetchToken = async () => {
    try {
      const response = await fetch(urlApi);
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      if (!data) {
        throw new Error('data failed to response');
      }
      console.log('data: ', data);
      return data;
    } catch (error) {
      console.log('Hubo un error en el fetchActividades ', error);
    }
  }

  return (
    <Stack.Navigator 
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={LoginScreen}/>
      <Stack.Screen name="Registrarse" component={RegistrarseScreen}/>
      <Stack.Screen name="Home" component={HomeScreen}/>
    </Stack.Navigator>
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
