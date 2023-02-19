import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import CurrencyConverter from './CurrencyConverter';

// describe('CurrencyConverter', () => {
//     test('renders the correct heading', () => {
//         render(<CurrencyConverter />);
//         const heading = screen.getByText('Currency Converter');
//         expect(heading).toBeInTheDocument();
//     });

//     test('updates the amount when the input is changed', () => {
//         render(<CurrencyConverter />);
//         const amountInput = screen.getByDisplayValue('1') as HTMLInputElement;
//         fireEvent.change(amountInput, { target: { value: '2' } });
//         expect(amountInput.value).toBe('2');
//     });

//     test('updates the from currency when the select is changed', () => {
//         render(<CurrencyConverter />);
//         const fromCurrencySelect = screen.getByDisplayValue('USD') as HTMLSelectElement;
//         fireEvent.change(fromCurrencySelect, { target: { value: 'EUR' } });
//         expect(fromCurrencySelect.value).toBe('EUR');
//     });

//     test('updates the to currency when the select is changed', () => {
//         render(<CurrencyConverter />);
//         const toCurrencySelect = screen.getByLabelText('To:') as HTMLSelectElement;
//         fireEvent.change(toCurrencySelect, { target: { value: 'JPY' } });
//         expect(toCurrencySelect.value).toBe('JPY');
//     });

//     test('updates the converted amount when the from currency is changed', () => {
//         render(<CurrencyConverter />);
//         const fromCurrencySelect = screen.getByDisplayValue('USD') as HTMLSelectElement;
//         const toCurrencySelect = screen.getByDisplayValue('EUR') as HTMLSelectElement;
//         const amountInput = screen.getByDisplayValue('1') as HTMLInputElement;
//         const convertedAmountInput = screen.getByDisplayValue('0.82') as HTMLInputElement;
//         fireEvent.change(fromCurrencySelect, { target: { value: 'JPY' } });
//         expect(fromCurrencySelect.value).toBe('JPY');
//         expect(toCurrencySelect.value).toBe('EUR');
//         expect(amountInput.value).toBe('1');
//         expect(convertedAmountInput.value).toBe('0.01');
//     });

//     test('updates the converted amount when the to currency is changed', () => {
//         render(<CurrencyConverter />);
//         const fromCurrencySelect = screen.getByDisplayValue('USD') as HTMLSelectElement;
//         const toCurrencySelect = screen.getByDisplayValue('EUR') as HTMLSelectElement;
//         const amountInput = screen.getByDisplayValue('1') as HTMLInputElement;
//         const convertedAmountInput = screen.getByDisplayValue('0.82') as HTMLInputElement;
//         fireEvent.change(toCurrencySelect, { target: { value: 'JPY' } });
//         expect(fromCurrencySelect.value).toBe('USD');
//         expect(toCurrencySelect.value).toBe('JPY');
//         expect(amountInput.value).toBe('1');
//         expect(convertedAmountInput.value).toBe('105.41');
//     });
// });
