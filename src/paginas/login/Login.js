import React, { useState } from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, StyleSheet, Text, Button, TouchableOpacity, Alert } from 'react-native';

const Login = ({navigation}) => {
    const [ email, setEmail ] = useState(' ');
    const [ senha, setSenha ] = useState(' ');
    const [ status, setStatus ] = useState(' ');

    /*const loginGet = () => {
        fetch('https://2f65-190-124-246-235.ngrok.io/lavafacilservidor/login_json.php', {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email : email,
                senha : senha,
                tipo : 'Cliente'
            })
        })
        .then((response) => response.json())
        .then((json) => setStatus(json));

        if(email == '' || senha == '') {
            Alert.alert('E-mail e Senha', 'Digite seu E-Mail e Senha para continuar!!!');
        }
        else if(JSON.stringify(status) === JSON.stringify("E-mail não cadastrado!")) {
            Alert.alert('Conta Inexistente', JSON.stringify(status));
        }
        else if(JSON.stringify(status) === JSON.stringify("E-mail ou Senha incorreta!")) {
            Alert.alert('Informação Incorreta', JSON.stringify(status));
        }
        else if(JSON.stringify(status) === JSON.stringify("aceito")){
            navigation.reset({
                index: 0,
                routes: [
                  {
                    name: 'Menu',
                  },
                ],
              });
        }
    }*/

    return (
        <KeyboardAvoidingView style={styles.body}>
            <View style={styles.container}>
            <View style={styles.image}>
                <Image source={require('../../../assets/logo.png')} />
            </View>
                <TextInput 
                    style={styles.email}
                    placeholder={'Email'}
                    placeholderTextColor={'#D3D3D3'}
                    textContentType={'emailAddress'}
                    onChangeText={txt => setEmail(txt)}
                />

                <TextInput
                    style={styles.senha}
                    secureTextEntry={true}
                    placeholder={'Senha'}
                    placeholderTextColor={'#D3D3D3'}
                    keyboardType={'default'}
                    textContentType={'password'}
                    onChangeText={txt => setSenha(txt)}
                />

                <TouchableOpacity
                    style={styles.entrar}
                    onPress={() => navigation.navigate('Menu')}
                >
                    <Text style={styles.txtEntrar}>ENTRAR</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.entrarCel}
                >
                    <Text style={styles.txtEntrarCel}>ENTRAR COM CELULAR</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const styles = new StyleSheet.create({
    body : {
        flex : 1,
        backgroundColor : '#FFF',
        alignItems : 'center',
        justifyContent : 'center',
        borderWidth : 2,
        borderColor : '#FFF'
    },

    image : {
        alignItems : 'center',
        justifyContent : 'center',
        position : 'absolute',
        marginTop : '2.5%'
    },

    container : {
        width : '100%',
        height : '100%',
        alignItems : 'center',
    },

    titulo : {
        color : '#000',
        fontSize : 20,
        fontWeight : 'bold',
        marginTop : '20%',
        marginBottom : '25%'
    },

    email : {
        width : '90%',
        height : 52,
        backgroundColor : '#FFF',
        color : '#000',
        marginTop : '80%',
        marginBottom : 25,
        borderWidth : 2,
        borderColor : '#000',
        borderRadius : 5,
        fontSize : 24,
        paddingLeft : 10,
    },

    senha : {
        width : '90%',
        height : 52,
        backgroundColor : '#FFF',
        color : '#000',
        marginBottom : '15%',
        borderWidth : 2,
        borderColor : '#000',
        borderRadius : 5,
        fontSize : 24,
        paddingLeft : 10
    },

    entrar : {
        width : '90%',
        height : 52,
        backgroundColor : '#FFF',
        justifyContent : 'center',
        alignItems : 'center',
        marginBottom : '2.5%',
        borderWidth : 2,
        borderRadius : 5
    },

    txtEntrar : {
        color : '#000',
        fontSize : 20,
        fontWeight : 'bold'
    },

    entrarCel : {
        width : '90%',
        height : 52,
        backgroundColor : '#000',
        justifyContent : 'center',
        alignItems : 'center',
        borderRadius : 5
    },

    txtEntrarCel : {
        color : '#FFF',
        fontSize : 20,
        fontWeight : 'bold'
    }
})

export default Login;