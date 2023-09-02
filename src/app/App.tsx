import React from 'react';
import './App.css';

import { Routes } from './routes'; // Importe corretamente o módulo Routes

export const App: React.FC = () => {
  return (
    <div className='App'>
      <Routes />
    </div>    
  );
}
