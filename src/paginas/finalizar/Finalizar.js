import React from "react";
import { KeyboardAvoidingView, Text, View } from 'react-native';

const Finalizar = () => {
    return(
        <KeyboardAvoidingView>
            <View>
                <Text>Confirmação de Lavagem</Text>
                <Text>Lava-Rapido: Suave na Nave</Text>
                <Text>Lavagem: Ducha</Text>
                <Text>aspiracão: Não</Text>
                <Text>Pretinho: Não</Text>
                <Text>Produto: Não</Text>
                <Text>Motor: Não</Text>
                <Text>Valor: R$10,00</Text>
                <Text>Forma de Pagamento: Dinheiro</Text>
                <Text>Confirmar e ir para o Lava-Rapido</Text>
            </View>
        </KeyboardAvoidingView>
    )
}

export default Finalizar;