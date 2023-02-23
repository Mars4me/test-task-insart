import React, { useState, useEffect } from 'react';
import { CURRENCIES, Currency } from '../mockData';
import { AiOutlineSwap } from 'react-icons/ai';
import { Select } from '../ui/Select';
import { Input } from './../ui/Input';

const CurrencyConverter: React.FC = () => {
    const [fromCurrency, setFromCurrency] = useState<Currency>(CURRENCIES[0]);
    const [toCurrency, setToCurrency] = useState<Currency>(CURRENCIES[1]);
    const [amountFrom, setAmountFrom] = useState<number>(100);
    const [convertedAmount, setConvertedAmount] = useState<number>(0);

    const handleFromCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCurrency = getSelectedOption(e.target.value);
        if (selectedCurrency) {
            setFromCurrency(selectedCurrency);
            const calculateConvertedAmountValue = +(
                amountFrom *
                (toCurrency.rate / selectedCurrency.rate)
            ).toFixed(2);
            setConvertedAmount(calculateConvertedAmountValue);
        }
    };

    const handleToCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const selectedCurrency = getSelectedOption(e.target.value);
        if (selectedCurrency) {
            setToCurrency(selectedCurrency);
            const calculateAmoutFromValue = +(
                convertedAmount *
                (fromCurrency.rate / selectedCurrency.rate)
            ).toFixed(2);
            setAmountFrom(calculateAmoutFromValue);
        }
    };

    const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const amount = getIntegerValueFromInput(e.target.value);
        if (!isNaN(amount)) {
            setAmountFrom(amount);
            setConvertedAmount(+(amount * (toCurrency.rate / fromCurrency.rate)).toFixed(2));
        }
    };

    const handleToAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const amount = getIntegerValueFromInput(e.target.value);
        if (!isNaN(amount)) {
            setConvertedAmount(amount);
            setAmountFrom(+(amount * (fromCurrency.rate / toCurrency.rate)).toFixed(2));
        }
    };

    const swapCurrencyItems = () => {
        setFromCurrency(toCurrency);
        setToCurrency(fromCurrency);
        setAmountFrom(convertedAmount);
        setConvertedAmount(amountFrom);
    };

    const getIntegerValueFromInput = (value: string) => {
        return +parseFloat(value).toFixed(2);
    };
    const getSelectedOption = (value: string) => {
        return CURRENCIES.find((currency) => currency.name === value);
    };

    return (
        <div className="flex w-full justify-evenly">
            <div>
                <label className="font-thin" htmlFor="from-currency">
                    Change
                </label>
                <div>
                    <Input value={amountFrom} onChange={handleAmountChange} />

                    <Select
                        selectElemProps={{ value: fromCurrency.name, onChange: handleFromCurrencyChange }}
                        options={CURRENCIES}
                    />
                </div>
            </div>
            <AiOutlineSwap
                onClick={swapCurrencyItems}
                size={54}
                strokeWidth={'40'}
                className="mx-4 cursor-pointer fill-white hover:fill-black hover:stroke-primary"
            />
            <div>
                <label htmlFor="to-currency" className="font-thin">
                    Get
                </label>
                <div className="flex">
                    <Input value={convertedAmount} onChange={handleToAmountChange} />
                    {/* <input
                        type="number"
                        className="text-2xl flex-grow-[2]"
                        defaultValue={3.63}
                        min={0}
                        step={0.01}
                        value={convertedAmount.toFixed(2)}
                        onChange={(e) => setAmountFrom(parseFloat(e.target.value))}
                    /> */}
                    <Select
                        selectElemProps={{ value: toCurrency.name, onChange: handleToCurrencyChange }}
                        options={CURRENCIES}
                    />
                </div>
            </div>
        </div>
    );
};

export default CurrencyConverter;
