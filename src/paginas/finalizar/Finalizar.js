import * as React from 'react';
import { KeyboardAvoidingView, Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import getDirections from 'react-native-google-maps-directions';

const Finalizar = ({navigation, route}) => {
    const { selecionado, lavaRapido, lavagem, aspiracao, pretinho, produto, motor, valor, pagamento, origin, latitude, longitude} = route.params;

    const IniciarCorrida = () => {
        fetch('http://lavafacil.ddns.net/lavafacilservidor/iniciarCorrida_json.php', {
                method: 'POST',
                body: JSON.stringify({
                    lavaRapidoID : '2',
                    clienteID : '1',
                    lavaRapido : lavaRapido,
                    lavagem : lavagem,
                    aspiracao : aspiracao,
                    pretinho : pretinho,
                    produto : produto,
                    motor : motor,
                    valor : valor,
                    pagamento : pagamento
                }),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
            });
    } 

    const handleGetGoogleMapDirections = () => {
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
                <Text style={Style.opcoes}>Lava-Rapido: { lavaRapido }</Text>
                <Text style={Style.opcoes}>Lavagem: { lavagem }</Text>
                <Text style={Style.opcoes}>Aspiracão: { aspiracao }</Text>
                <Text style={Style.opcoes}>Pretinho: { pretinho }</Text>
                <Text style={Style.opcoes}>Produto: { produto }</Text>
                <Text style={Style.opcoes}>Motor: { motor }</Text>
                <Text style={Style.opcoes}>Valor:R${ valor },00</Text>
                <Text style={Style.opcoes}>Forma de Pagamento: { pagamento }</Text>
                    
                <TouchableOpacity
                    style={Style.confirm}
                    onPress={() => {IniciarCorrida()}}//, handleGetGoogleMapDirections()}}
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
        marginTop : '10%',
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
        marginTop : '15%'
    },

    txtConfirm: {
        fontWeight: 'bold',
        fontSize: 18
    }
})

export default Finalizar;