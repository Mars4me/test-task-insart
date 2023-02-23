import { Table } from './components/Table';
import { Body } from './layouts/body';
import { Footer } from './layouts/footer';
import { Header } from './layouts/header';
import CurrencyConverter from './components/CurrencyConverter';

function App() {
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
