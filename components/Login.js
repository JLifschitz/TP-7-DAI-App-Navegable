 import React, {useState, useEffect} from 'react';
 import { Button, View, Text, TextInput } from 'react-native';
 const LoginScreen = (props) => {
     const [email, setEmail] = useState('');
     const [contraseña, setContraseña] = useState('');
     const urlApi = `http://localhost:3000/api/user/login`;
     const [token, setToken] = useState();
 
     const fetchToken = async () => {
         try {
             const response = await fetch(urlApi, {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({
                     username: email,
                     password: contraseña,
                 }),
             });
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
             console.log('Hubo un error en el login ', error);
         }
     }
     const generateToken = async () => {
         const data = await fetchToken();
         if (data.length > 0 && data !== null) {
           setToken(data);
           console.log(token);
           navigation.navigate('Home');
         }
     }
     useEffect( () =>{
         setToken(null);
     }, []);
     useEffect( () =>{
         if (token !== null) {
             navigation.navigate('Home');
         }
     }, [token]);
 
    return (
         <View style={styles.background}>
             <Text>Inicio Sesión</Text>
             <View style={styles.inputContainer}>
                 <TextInput
                     placeholder="Email"
                     value={email}
                     onChangeText={(newText) => {
                     setEmail(newText);
                     }}
                     autoCapitalize="none"
                 />
                 <TextInput
                     placeholder="Contraseña"
                     value={contraseña}
                     onChangeText={(newText) => {
                     setContraseña(newText);
                     }}
                     autoCapitalize="none"
                 />
             </View>
             <Button
                 title='Singin'
                 onPress={generateToken()}
             />
             <Button
                 title='¿No tenés cuenta?'
                 onPress={navigation.navigate('Registrarse')}
             />
         </View>
     );
 }
 export default LoginScreen;
