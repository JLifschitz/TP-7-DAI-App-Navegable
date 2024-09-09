 const RegistrarseScreen = () => {
     let [firstName, setFirstName] = React.useState('');
     let [lastName, setLastName] = React.useState('');
     let [email, setEmail] = React.useState('');
     let [contraseña, setContraseña] = React.useState('');
     const urlApi = `http://localhost:3000/api/user/register`;
 
     const registrarsePost = async () => {
         try {
             const response = await fetch(urlApi, {
                 method: 'POST',
                 headers: {
                     'Content-Type': 'application/json',
                 },
                 body: JSON.stringify({
                     first_name: firstName,
                     last_name: lastName,
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
             console.log('Hubo un error en el register ', error);
         }
     }
     const registrarse = async () => {
         const data = await registrarsePost();
         if (data.length > 0) {
             navigation.navigate('Login');
         }
     }
 
    return (
         <View style={styles.background}>
             <Text>Inicio Sesión</Text>
             <View style={styles.inputContainer}>
             <TextInput
                     placeholder="First Name"
                     value={firstName}
                     onChangeText={(newText) => {
                     setFirstName(newText);
                     }}
                     autoCapitalize="none"
                 />
                 <TextInput
                     placeholder="Last Name"
                     value={lastName}
                     onChangeText={(newText) => {
                     setLastName(newText);
                     }}
                     autoCapitalize="none"
                 />
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
                 onPress={registrarse()}
             />
             <Button
                 title="¿Ya tenés cuenta?"
                 onPress={navigation.navigate('Login')}
             />
         </View>
     );
 }
 export default RegistrarseScreen;
