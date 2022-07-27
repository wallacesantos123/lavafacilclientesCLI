import * as React from 'react';
import { KeyboardAvoidingView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import getDirections from 'react-native-google-maps-directions';

const Finalizar = ({navigation, route}) => {
    const { selecionado, lavaRapido, lavagem, aspiracao, pretinho, produto, motor, origin, latitude, longitude} = route.params;

    handleGetGoogleMapDirections = () => {
        const data = {
        source: origin,
        destination: {latitude: latitude, longitude: longitude},
        params: [
        {
            key: "travelmode",
            value: "driving"
        }
        ]
    };
        getDirections(data)
    };

    return(
        <KeyboardAvoidingView>
            <View>
                <Text style={Style.titulo}>Confirmação de Lavagem</Text>
                <Text style={Style.opcoes}>Lava-Rapido: Suave na Nave</Text>
                <Text style={Style.opcoes}>Lavagem: Ducha</Text>
                <Text style={Style.opcoes}>Aspiracão: Não</Text>
                <Text style={Style.opcoes}>Pretinho: Não</Text>
                <Text style={Style.opcoes}>Produto: Não</Text>
                <Text style={Style.opcoes}>Motor: Não</Text>
                <Text style={Style.opcoes}>Valor: R$10,00</Text>
                <Text style={Style.opcoes}>Forma de Pagamento: Dinheiro</Text>
                    
                <TouchableOpacity
                    style={Style.confirm}
                    onPress={() => {handleGetGoogleMapDirections()}}
                >
                    <Text style={Style.txtConfirm}>Confirmar e ir Para o Lava-Rapido</Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

const Style = new StyleSheet.create({
    titulo: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize : 28,
        marginBottom : '10%'
    },

    opcoes: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 24
    },
    
    confirm: {
        width: '90%',
        height: '15%',
        borderWidth: 2,
        borderColor: '#000',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop : '5%'
    },

    txtConfirm: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default Finalizar;