import React from 'react';
import Navegacao from './src/Navegacao.js';
import { enableLatestRenderer } from 'react-native-maps';

import Finalizar from './src/paginas/finalizar/Finalizar.js';

enableLatestRenderer();

const App = () => {
  return (
    <Navegacao/>
    //<Finalizar/>
  )
}

export default App;