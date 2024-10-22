import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Import de Paginas
import Inicio from './paginas/inicio/Inicio';
import Login from './paginas/login/Login';
import Cadastrar from './paginas/cadastrar/Cadastrar';
import Menu from './paginas/menu/Menu';
import Lavagens from './paginas/lavagens/Lavagens';
import Ducha from './paginas/ducha/Ducha';
import Simples from './paginas/simples/Simples';
import Completa from './paginas/completa/Completa';
import Higienizacao from './paginas/higienizacao/Higienizacao';
import LavaRapidos from './paginas/lavarapidos/LavaRapidos';
import Finalizar from './paginas/finalizar/Finalizar';
import Sql from './paginas/sql/Sql';

const Navegacao = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Inicio">
                <Stack.Screen name='Menu' component={Menu} options={{swipeEnabled : false}} initialParams={{ selecionado : false , lavaRapidoID : null, clientID : null, lavaRapido : 'Nenhum Lava-Rapido Selecionado.', lavagem : 'Nenhuma', aspiracao : 'Não', pretinho : 'Não', produto : 'Não', motor : 'Não', valor : '0', pagamento : 'Dinheiro' }} />
                <Stack.Screen name='Inicio' component={Inicio} />
                <Stack.Screen name='Login' component={Login} />  
                <Stack.Screen name='Cadastrar' component={Cadastrar} />
                <Stack.Screen name='Lavagens' component={Lavagens} />
                <Stack.Screen name='Ducha' component={Ducha} />
                <Stack.Screen name='Simples' component={Simples} />
                <Stack.Screen name='Completa' component={Completa} />
                <Stack.Screen name='Higienizacao' component={Higienizacao} />
                <Stack.Screen name='LavaRapidos' component={LavaRapidos} />
                <Stack.Screen name='Finalizar' component={Finalizar} />
                <Stack.Screen name='Sql' component={Sql} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navegacao;