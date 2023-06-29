import React from 'react';
import Navegacao from './src/Navegacao.js';
import { enableLatestRenderer } from 'react-native-maps';
import { LogBox } from 'react-native';


import Finalizar from './src/paginas/finalizar/Finalizar.js';

enableLatestRenderer();

const App = () => {
  LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
  LogBox.ignoreAllLogs();//Ignore all log notifications
  
  return (
    <Navegacao/>
    //<Finalizar/>
  )
}

export default App;