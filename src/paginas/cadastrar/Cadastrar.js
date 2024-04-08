import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import CheckBox from '@react-native-community/checkbox';

const Cadastrar = ({navigation}) => {
    const [ nome, setNome ] = useState(' ');
    const [ cpf, setCpf ] = useState(' ');
    const [ celular, setCelular ] = useState(' ');
    const [ email, setEmail ] = useState(' ');
    const [ senha, setSenha ] = useState(' ');
    const [ confSenha, setConfSenha ] = useState(' ');

    const CadastrarPost = () => {
        fetch('http://lavafacil.ddns.net/lavafacilservidor/cadastrar_json.php', {
            method: 'POST',
            body: JSON.stringify({
                nome: nome,
                cpf: cpf,
                celular: celular,
                email: email,
                senha: senha
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        .then((response) => response.json())
        .then((json) => Alert.alert('Cadastrado!', JSON.stringify(json)));

        /*fetch('https://204a-190-124-246-235.ngrok.io/lavafacilservidor/testejson.php')
        .then((response) => response.json())
        .then((json) => console.log(json));*/
    } 

    return (
        <KeyboardAvoidingView style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.titulo}>BEM VINDO AO LAVA FACIL!</Text>

                <TextInput
                    style={styles.email}
                    placeholder={'Email'}
                    placeholderTextColor={'#D3D3D3'}
                    autoCompleteType={'email'}
                    keyboardType={'default'}
                    onChangeText={txt => setEmail(txt)}
                />

                <TextInput
                    style={styles.celular}
                    placeholder={'Celular'}
                    placeholderTextColor={'#D3D3D3'}
                    autoCompleteType={'tel'}
                    keyboardType={'numeric'}
                    onChangeText={txt => setCelular(txt)}
                />

                <TextInput
                    style={styles.senha}
                    placeholder={'Senha'}
                    placeholderTextColor={'#D3D3D3'}
                    autoCompleteType={'password'}
                    keyboardType={'default'}
                    secureTextEntry={true}
                    onChangeText={txt => setSenha(txt)}
                />

                <TextInput
                    style={styles.confSenha}
                    placeholder={'Confirmar Senha'}
                    placeholderTextColor={'#D3D3D3'}
                    autoCompleteType={'password'}
                    keyboardType={'default'}
                    secureTextEntry={true}
                    onChangeText={txt => setConfSenha(txt)}
                />             

                <View style={styles.termo}>
                    <CheckBox style={styles.CheckBox}/>   
                    <Text style={styles.txtTermo}>Li e concordo com os termos e Condicões de Uso. Os Termos estarção disponiveis para consulta dentro do app.</Text>        
                </View>     
                 
                <TouchableOpacity
                    style={styles.cadastrar}
                    onPress={CadastrarPost}
                >
                    <Text style={styles.txtCadastrar}>Cadastrar</Text>
                </TouchableOpacity>
            </View> 
        </KeyboardAvoidingView>
    );
}

const styles = new StyleSheet.create({
    body : {
        flex : 1,
        backgroundColor : '#FFF',
        borderWidth : 2,
    },

    container : {
        flex : 1,
        alignItems : 'center',
    },

    titulo : {
        color : '#000',
        marginTop : '10%',
        marginBottom : '10%',
        fontSize : 18,
        fontWeight : 'bold'
    },

    txtNome : {
        color : '#000',
        fontSize : 24,
        fontWeight : 'bold'
    },

    nome : {
        width : '90%',
        height : 52,
        backgroundColor : '#FFF',
        color : '#000',
        paddingLeft : 10,
        fontSize : 24,
        fontWeight : 'bold',
        borderWidth : 2,
        borderColor : '#000',
        borderRadius : 5,
        marginBottom : 20
    },

    cpf : {
        width : '90%',
        height : 52,
        backgroundColor : '#FFF',
        color : '#000',
        paddingLeft : 10,
        fontSize : 24,
        fontWeight : 'bold',
        borderWidth : 2,
        borderColor : '#000',
        borderRadius : 5,
        marginBottom : 20
    },

    celular : {
        width : '90%',
        height : 52,
        backgroundColor : '#FFF',
        color : '#000',
        paddingLeft : 10,
        fontSize : 24,
        fontWeight : 'bold',
        borderWidth : 2,
        borderColor : '#000',
        borderRadius : 5,
        marginBottom : 20
    },

    email : {
        width : '90%',
        height : 52,
        backgroundColor : '#FFF',
        color : '#000',
        paddingLeft : 10,
        fontSize : 24,
        fontWeight : 'bold',
        borderWidth : 2,
        borderColor : '#000',
        borderRadius : 5,
        marginBottom : 20
    },

    senha : {
        width : '90%',
        height : 52,
        backgroundColor : '#FFF',
        color : '#000',
        paddingLeft : 10,
        fontSize : 24,
        fontWeight : 'bold',
        borderWidth : 2,
        borderColor : '#000',
        borderRadius : 5,
        marginBottom : 20
    },

    confSenha : {
        width : '90%',
        height : 52,
        backgroundColor : '#FFF',
        color : '#000',
        paddingLeft : 10,
        fontSize : 24,
        fontWeight : 'bold',
        borderWidth : 2,
        borderColor : '#000',
        borderRadius : 5,
    },

    termo : {
       backgroundColor : '#FFF',
       marginTop : '4%',
       marginBottom : '4%'
    },

    CheckBox : {
        borderWidth : 2,
        position : 'absolute',
        marginLeft : '3%'
    },

    txtTermo : {
        marginTop : 5,
        marginLeft : 40,
        fontSize : 16,
        fontWeight : 'bold'
    },

    cadastrar : {
        width : '90%',
        height : 52,
        borderWidth : 2,
        backgroundColor : '#000',
        justifyContent : 'center',
    },

    txtCadastrar : {
        fontSize : 24,
        fontWeight : 'bold',
        color : '#FFF',
        textAlign : 'center'
    }
})

export default Cadastrar;