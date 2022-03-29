import React, { useState } from 'react';
import { KeyboardAvoidingView, View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import CheckBox from '@react-native-community/checkbox';


const Cadastrar = ({navigation}) => {
    const [ nome, setNome ] = useState(' ');
    const [ cpf, setCpf ] = useState(null);
    const [ celular, setCelular ] = useState(null);
    const [ email, setEmail ] = useState(null);
    const [ senha, setSenha ] = useState(null);
    const [ confSenha, setConfSenha ] = useState(null);

    /*fetch('localhost/lavafacilservidor/cadastrar.php', {
        method: 'POST',
        body: JSON.stringify({
            nome: nome,
            email: email,
            celular: celular,
            cpf: cpf,
            senha: senha
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    .then((response) => response.json())
    .then((json) => console.log(json));*/

    return (
        <KeyboardAvoidingView style={styles.body}>
            <View style={styles.container}>
                <Text style={styles.titulo}>BEM VINDO AO LAVA FACIL!</Text>

                <TextInput
                    style={styles.nome}
                    placeholder={'Nome'}
                    placeholderTextColor={'#D3D3D3'}
                    autoCompleteType={'name'}
                    keyboardType={'default'}
                    onChangeText={txt => setNome(txt)}
                />

                <TextInput
                    style={styles.cpf}
                    placeholder={'CPF'}
                    placeholderTextColor={'#D3D3D3'}
                    autoCompleteType={'cc-number'}
                    keyboardType={'numeric'}
                    onChange={txt => setCpf(txt)}
                />

                <TextInput
                    style={styles.celular}
                    placeholder={'Celular'}
                    placeholderTextColor={'#D3D3D3'}
                    autoCompleteType={'tel'}
                    keyboardType={'numeric'}
                />

                <TextInput
                    style={styles.email}
                    placeholder={'Email'}
                    placeholderTextColor={'#D3D3D3'}
                    autoCompleteType={'email'}
                    keyboardType={'default'}
                />

                <TextInput
                    style={styles.senha}
                    placeholder={'Senha'}
                    placeholderTextColor={'#D3D3D3'}
                    autoCompleteType={'password'}
                    keyboardType={'default'}
                    secureTextEntry={true}
                />

                <TextInput
                    style={styles.confSenha}
                    placeholder={'Confirmar Senha'}
                    placeholderTextColor={'#D3D3D3'}
                    autoCompleteType={'password'}
                    keyboardType={'default'}
                    secureTextEntry={true}
                />             

                <View style={styles.termo}>
                    <CheckBox style={styles.CheckBox}/>   
                    <Text style={styles.txtTermo}>Li e concordo com os termos e Condicões de Uso. Os Termos estarção disponiveis para consulta dentro do app.</Text>        
                </View>     
                 
                <TouchableOpacity
                    style={styles.cadastrar}
                    onPress={() => {console.warn(nome)}}
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
        marginBottom : '2.5%',
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
       marginBottom : '2.5%'
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