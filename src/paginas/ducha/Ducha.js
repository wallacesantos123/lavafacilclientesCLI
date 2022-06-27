import React, {useEffect} from 'react';
import { Text, StyleSheet, KeyboardAvoidingView, View, Image, BackHandler, TouchableOpacity } from 'react-native';

const Ducha = ({navigation, route}) => {
    const { selecionado, lavaRapido} = route.params;

    useEffect(() => {
        BackHandler.addEventListener('hardwareBackPress', () => true);
        return () =>
          BackHandler.addEventListener('hardwareBackPress', () => true);
      }, []);

    return(
        <KeyboardAvoidingView 
            style={Styles.body} 
        >
            <View style={Styles.image}>
                <Image source={require('../../../assets/logo.png')}/>
            </View>

            <View 
                style={Styles.container} 
            >
                <Text style={Styles.titulo} >DUCHA</Text>
                <Text style={Styles.txtInfo} >Lavagem da parte externa do carro com direitino a pretinho.</Text>

                <TouchableOpacity 
                    style={Styles.voltar}
                    onPress={() => navigation.navigate('Lavagens', { selecionado : selecionado, lavaRapido : lavaRapido, lavagem : Ducha })}
                >
                    <Text style={Styles.txtVoltar} >VOLTAR PARA LAVAGENS</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
        
    )
}

const Styles = new StyleSheet.create({
    body : {
        width : '100%',
        height : '100%',
        backgroundColor : '#FFF'
    },

    image : {
        alignItems : 'center',
        justifyContent : 'center',
    },

    container : {
        alignItems : 'center'
    },

    titulo : {
        fontSize : 28,
        fontWeight : 'bold',
        marginTop : '10%',
    },

    txtInfo : {
        fontSize : 16,
        fontWeight : 'bold',
        marginTop : '5%',
        marginLeft : '5%'
    },

    voltar : {
        width : '80%',
        height : '15%',
        borderWidth : 2,
        marginTop : '15%',
        alignItems : 'center',
        justifyContent : 'center'
    },

    txtVoltar : {
        fontSize : 16,
        fontWeight : 'bold'
    }
});

export default Ducha;