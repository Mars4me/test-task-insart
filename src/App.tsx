import React from 'react';
import ControlledInput from './components/ControlledInput';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
    return (
        <div className="container">
            <h1 className="text-3xl font-bold underline text-center">Currency Converter</h1>
            <ControlledInput initialValue="sfsafas" />
            <CurrencyConverter />
        </div>
    );
}

export default App;
