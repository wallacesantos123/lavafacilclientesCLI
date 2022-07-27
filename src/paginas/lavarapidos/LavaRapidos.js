import * as React from 'react';
import { KeyboardAvoidingView, StyleSheet, View, TouchableOpacity, Image, Text } from 'react-native';

const LavaRapidos = ({navigation, route}) => {
    return (
        <KeyboardAvoidingView
            style={Styles.body}
        >
            <View 
                style={Styles.container}
            >
                <TouchableOpacity
                    style={Styles.lavaRapido}
                    onPress={() => navigation.navigate('Menu', { selecionado: true ,lavaRapido: 'SUAVE NA NAVE', latitude : -23.4902 , longitude : -46.3533 })}
                >
                    <Image source={require('../../../assets/logo.png')} style={Styles.imgLogo} />
                    <Text
                        style={Styles.titulo}
                    >
                        SUAVE NA NAVE
                    </Text>
                    <Image source={require('../../../assets/avaliacao0.png')} style={Styles.imgAvali} />
                    <Text
                        style={Styles.endereco}
                    >
                        RUA: JUIZ DE FORA 630, VILA VIRGI...
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={Styles.info}
                >
                    <Image source={require('../../../assets/informacao.png')} style={Styles.imgInfo} />
                </TouchableOpacity>
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
        height : '80%',
        marginTop : '2%',
        marginLeft : '3%'
    },

    titulo : {
        fontWeight : 'bold',
        fontSize : 18,
        marginTop : '-21%',
        marginLeft : '25%'
    },

    imgAvali : {
        width : '60%',
        height : '60%',
        marginTop : '-3%',
        marginLeft : '19%'
    },

    endereco : {
        fontWeight : 'bold',
        fontSize : 10,
        marginLeft : '25%'
    },

    info : {
        borderLeftWidth : 2,
        width : '16.4%',
        height : '10.5%',
        alignItems : 'center',
        justifyContent : 'center',
        marginLeft : '78%',
        marginTop : '-23%'
    },

    imgInfo : {
        width : '90%',
        height : '96%',
    }
})

export default LavaRapidos;