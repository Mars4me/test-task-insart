import { Table } from './components/Table';
import { Body } from './layouts/body';
import { Footer } from './layouts/footer';
import { Header } from './layouts/header';
import CurrencyConverter from './components/CurrencyConverter';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [currencyData, setCurrencyData] = useState<any>([]);

    const fetchCurrencyData = async () => {
        try {
            const { data } = await axios.get('/p24api/pubinfo');

            console.log(data);

            setCurrencyData(data);
        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchCurrencyData();
    }, []);

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
