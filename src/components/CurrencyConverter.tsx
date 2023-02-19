import React, { useState, useEffect } from 'react';
import { CURRENCIES, Currency } from '../mockData';

const CurrencyConverter: React.FC = () => {
    const [fromCurrency, setFromCurrency] = useState<Currency>(CURRENCIES[0]);
    const [toCurrency, setToCurrency] = useState<Currency>(CURRENCIES[1]);
    const [amountFrom, setAmountFrom] = useState<number>(1);
    const [convertedAmount, setConvertedAmount] = useState<number>(0);

    const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCurrency = CURRENCIES.find((currency) => currency.name === e.target.value);
        if (selectedCurrency) {
            setFromCurrency(selectedCurrency);
        }
    };

    const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCurrency = CURRENCIES.find((currency) => currency.name === e.target.value);
        if (selectedCurrency) {
            setToCurrency(selectedCurrency);
        }
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const amount = parseFloat(e.target.value);
        if (!isNaN(amount)) {
            setAmountFrom(amount);
        }
    };

    const handleToAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const amount = parseFloat(e.target.value);
        if (!isNaN(amount)) {
            setAmountFrom(amount);
        }
    };

    useEffect(() => {
        setConvertedAmount(amountFrom * (toCurrency.rate / fromCurrency.rate));
    }, [fromCurrency, toCurrency, amountFrom]);

    return (
        <div>
            <h1>Currency Converter</h1>
            <div>
                <label htmlFor="from-currency">From:</label>
                <select id="from-currency" value={fromCurrency.name} onChange={handleFromCurrencyChange}>
                    {CURRENCIES.map((currency) => (
                        <option key={currency.name} value={currency.name}>
                            {currency.name}
                        </option>
                    ))}
                </select>
                <input type="number" value={amountFrom} onChange={handleAmountChange} />
            </div>
            <div>
                <label htmlFor="to-currency">To:</label>
                <select id="to-currency" value={toCurrency.name} onChange={handleToCurrencyChange}>
                    {CURRENCIES.map((currency) => (
                        <option key={currency.name} value={currency.name}>
                            {currency.name}
                        </option>
                    ))}
                </select>
                <input
                    type="text"
                    value={convertedAmount.toFixed(2)}
                    onChange={(e) => setAmountFrom(parseFloat(e.target.value))}
                />
            </div>
        </div>
    );
};

export default CurrencyConverter;
