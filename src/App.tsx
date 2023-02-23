import { Table } from './components/Table';
import { Body } from './layouts/body';
import { Footer } from './layouts/footer';
import { Header } from './layouts/header';
import CurrencyConverter from './components/CurrencyConverter';
import { useState, useEffect } from 'react';

function App() {
    const [currencyData, setCurrencyData] = useState<any>([]);

    const fetchCurrencyData = async () => {
        try {
            const response = await fetch('https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5', {
                mode: 'no-cors',
            });
            const data = await response.json();
            setCurrencyData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCurrencyData();
    }, []);

    useEffect(() => {
        console.log(currencyData);
    });

    return (
        <div className="flex flex-col w-full min-h-[100vh] overflow-hidden">
            <Header />
            <Body>
                <Table />
                {/* <CurrencyConverter />
            <RegistrationForm /> */}

                <CurrencyConverter></CurrencyConverter>
            </Body>
            <Footer />
        </div>
    );
}

export default App;
