import React from 'react';
import './App.css';
import Header from './components/Header';
import Expense from './components/Expense';
import History from './components/History';
import Transaction from './components/Transaction';
import { GlobalProvider } from './components/GlobalContext';

function App() {
  return (
    <GlobalProvider>
      <div className="container">
        <Header />
        <Expense />
        <History />
        <Transaction />
      </div>
    </GlobalProvider>
  );
}

export default App;
