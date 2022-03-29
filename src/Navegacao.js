import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//Import de Paginas
import Inicio from './paginas/inicio/Inicio.js';

const Navegacao = () => {
    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Inicio'} component={Inicio} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navegacao;