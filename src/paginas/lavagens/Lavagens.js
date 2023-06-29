import * as React from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

var i = 1;

const LavaRapidos = ({navigation, route}) => {
    const { selecionado, lavaRapido} = route.params; 

    return (
        <KeyboardAvoidingView
            style={Styles.body}
        >
            <View 
                style={Styles.container}
            >
                <TouchableOpacity
                    style={Styles.lavaRapido}
                    onPress={() => navigation.navigate('Menu', { selecionado : selecionado, lavaRapido : lavaRapido, lavagem : 'Ducha', aspiracao : 'Não', pretinho : 'Sim', produto : 'Não', motor : 'Não', valor : '10' })}
                >
                    <Image source={require('../../../assets/logo.png')} style={Styles.imgLogo} />
                    <Text
                        style={Styles.titulo}
                    >
                        DUCHA
                        R$10,00
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Styles.info}
                    onPress={() => navigation.navigate('Ducha', { selecionado : selecionado, lavaRapido : lavaRapido })}
                >
                    <Image source={require('../../../assets/informacao.png')} style={Styles.imgInfo} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={Styles.lavaRapido}
                    onPress={() => navigation.navigate('Menu', { selecionado : selecionado, lavaRapido : lavaRapido })}
                >
                    <Image source={require('../../../assets/logo.png')} style={Styles.imgLogo} />
                    <Text
                        style={Styles.titulo}
                    >
                        SIMPLES
                        R$20,00
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Styles.info}
                    onPress={() => navigation.navigate('Simples', { selecionado : selecionado, lavaRapido : lavaRapido })}
                >
                    <Image source={require('../../../assets/informacao.png')} style={Styles.imgInfo} />
                </TouchableOpacity>

                <TouchableOpacity
                    style={Styles.lavaRapido}
                    onPress={() => navigation.navigate('Menu', { selecionado : selecionado, lavaRapido : lavaRapido })}
                >
                    <Image source={require('../../../assets/logo.png')} style={Styles.imgLogo} />
                    <Text
                        style={Styles.titulo}
                    >
                        COMPLETA
                        R$30,00
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Styles.info}
                    onPress={() => navigation.navigate('Completa', { selecionado : selecionado, lavaRapido : lavaRapido })}
                >
                    <Image source={require('../../../assets/informacao.png')} style={Styles.imgInfo} />
                </TouchableOpacity>

                {/*
                <TouchableOpacity
                    style={Styles.lavaRapido}
                    onPress={() => navigation.navigate('Menu', { selecionado : selecionado, lavaRapido : lavaRapido })}
                >
                    <Image source={require('../../../assets/logo.png')} style={Styles.imgLogo} />
                    <Text
                        style={Styles.titulo}
                    >
                        HIGIENIZAÇÃO
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Styles.info}
                    onPress={() => navigation.navigate('Higienizacao', { selecionado : selecionado, lavaRapido : lavaRapido })}
                >
                    <Image source={require('../../../assets/informacao.png')} style={Styles.imgInfo} />
                </TouchableOpacity>
                */}
            </View>
        </KeyboardAvoidingView>
    )
}

const Styles = StyleSheet.create({
    body : {
        flex : 1,
        backgroundColor : '#FFF'
    },

    container : {
        flex : 1
    },

    lavaRapido : {
        borderWidth : 2,
        width : '90%',
        height : '15%',
        margin : '5%',
        borderRadius : 10
    },

    imgLogo : {
        width : '20%',
        height : '75%',
        marginTop : '2.5%',
        marginLeft : '2%'
    },

    titulo : {
        fontWeight : 'bold',
        fontSize : 26,
        marginTop : '-18.5%',
        marginLeft : '30%',
        borderRightWidth : 2,
        marginRight : '20%',
    },

    info : {
        width : '15.4%',
        height : '10.2%',
        marginLeft : '78.5%',
        marginTop : '-22.5%'
    },

    imgInfo : {
        width : '90%',
        height : '96%',
        marginBottom : '60%'
    }
})

export default LavaRapidos;