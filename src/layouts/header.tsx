import { Container } from '../components/Container';
import { Logo } from './../components/Logo';

export const Header = () => {
    return (
        <div className="bg-header h-[100px] sticky top-0">
            <Container className="flex flex-col h-full">
                <h1 className="mt-0 mb-2 text-2xl font-bold leading-normal text-left text-primary">
                    Currency Converter
                </h1>
                <Logo color="var(--color-primary)" size={42} className="animate-spin-slow" />
            </Container>
            <hr />
        </div>
    );
};
