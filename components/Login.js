import * as React from 'react';
import { Button, View, Text, TextInput } from 'react-native';



const LoginScreen = () => {
   const [email, setEmail] = React.useState('');
   const [contraseña, setContraseña] = React.useState('');
   
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
                    setcontraseña(newText);
                    }}
                    autoCapitalize="none"
                />
            </View>
                <Button
                    title="Iniciar"
                    textStyle='textoTurquesa'
                    containerColor='blanco'
                />
                <Button
                    title="¿No tenés cuenta?"
                    textStyle='textoTurquesa'
                    containerColor='blanco'
                    onPress={registroPress}
                />
        </View>
      );
}

export default LoginScreen;