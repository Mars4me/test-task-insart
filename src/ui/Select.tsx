import React, { FC } from 'react';

interface SelectProps {
    selectElemProps: {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    };
    options: Currency[];
}

type Currency = {
    name: string;
};

export const Select: FC<SelectProps> = ({ selectElemProps, options }) => {
    return (
        <select
            id="to-currency"
            className="px-2 text-sm text-gray-500 bg-transparent border-0 border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-gray-200 peer"
            {...selectElemProps}
        >
            {options.map((currency) => (
                <option key={currency.name} value={currency.name}>
                    {currency.name}
                </option>
            ))}
        </select>
    );
};
