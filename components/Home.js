import * as React from 'react';
import { Button, View, Text } from 'react-native';

function HomeScreen ({navigation}) {
    return (
        <View>
            <Text>Bienvenido</Text>
            <View>
                <Button
                    title='Login'
                    onPress={navigation.navigate('Login')}
                />
                <Button
                    title='Registrarse'
                    onPress={navigation.navigate('Registrarse')}
                />
            </View>
        </View>
    )
}

export default HomeScreen;