import React from 'react';
import { Route } from 'react-router-dom';
import { CalculatorPage } from './pages/Calculator';
import './App.css';

function App() {
  return (
    <div>
      <Route path='/' component={CalculatorPage}/>
    </div>
  );
}

export default App;
