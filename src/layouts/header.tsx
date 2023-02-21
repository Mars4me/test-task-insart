import { Container } from '../components/Container';

export const Header = () => {
    return (
        <div className="bg-header h-[100px] sticky top-0">
            <Container className="flex flex-col h-full">
                <h1 className="mt-0 mb-2 text-3xl font-normal leading-normal text-left text-pink-800">
                    Currency Converter
                </h1>
                <p>Logo</p>
            </Container>
            <hr />
        </div>
    );
};
