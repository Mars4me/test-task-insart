import React from 'react';
import { ControlledInput } from './components/ControlledInput';
import { Body } from './layouts/body';
import { Footer } from './layouts/footer';
import { Header } from './layouts/header';

function App() {
    return (
        <div className="flex flex-col w-full min-h-[100vh] overflow-hidden">
            <Header />
            <Body>
                <ControlledInput initialValue="Text test1" size="xl" className="w-[200px]" />

                {/* <CurrencyConverter />
            <RegistrationForm /> */}
            </Body>
            <Footer />
        </div>
    );
}

export default App;
