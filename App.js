import React from 'react';
import Navegacao from './src/Navegacao.js';
import Menu from './src/paginas/menu/Menu.js';
import { enableLatestRenderer } from 'react-native-maps';

enableLatestRenderer();

const App = () => {
  return (
    <Navegacao/>
  )
}

export default App;