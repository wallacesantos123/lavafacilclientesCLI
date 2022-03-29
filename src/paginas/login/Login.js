import React from 'react';
import { View, KeyboardAvoidingView, Image, TextInput, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';

const Login = ({navigation}) => {
    return (
        <KeyboardAvoidingView style={styles.body}>
            <View style={styles.container}>
            <View style={styles.image}>
                <Image source={require('../../../assets/logo.png')} />
            </View>
                <TextInput 
                    style={styles.email}
                    onChangeText={() => {}}
                    placeholder={'Email'}
                    placeholderTextColor={'#D3D3D3'}
                    textContentType={'emailAddress'}
                />

                <TextInput
                    style={styles.senha}
                    onChangeText={() => {}}
                    secureTextEntry={true}
                    placeholder={'Senha'}
                    placeholderTextColor={'#D3D3D3'}
                    keyboardType={'default'}
                    textContentType={'password'}
                />

                <TouchableOpacity
                    style={styles.entrar}
                    onPress={() =>
                        navigation.reset({
                          index: 0,
                          routes: [
                            {
                              name: 'Menu',
                            },
                          ],
                        })
                    }
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
        marginBottom : '5%'
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