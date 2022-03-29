import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Import de Paginas
import Inicio from './paginas/inicio/Inicio.js';
import Cadastrar from './paginas/cadastrar/Cadastrar.js';
import Login from './paginas/login/Login.js';
import Menu from './paginas/menu/Menu.js';

const Navegacao = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Inicio'} component={Inicio} />
                <Stack.Screen name={'Cadastrar'} component={Cadastrar} />
                <Stack.Screen name={'Login'} component={Login} />
                <Stack.Screen name={'Menu'} component={Menu} initialParams={{selecionado : 1}} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navegacao;