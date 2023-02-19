export const CURRENCIES: Currency[] = [
    { name: 'USD', rate: 1 },
    { name: 'EUR', rate: 0.82 },
    { name: 'JPY', rate: 105.41 },
    { name: 'GBP', rate: 0.72 },
    { name: 'AUD', rate: 1.29 },
    { name: 'CAD', rate: 1.27 },
];

export type Currency = {
    name: string;
    rate: number;
};
