import React, { FC } from 'react';

interface InputProps {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: number;
}

export const Input: FC<Readonly<InputProps>> = ({ value, onChange, defaultValue }) => {
    return (
        <input
            type="number"
            min={0}
            defaultValue={defaultValue}
            step={0.01}
            value={value}
            onChange={onChange}
            className="text-2xl focus:outline-none"
        />
    );
};
