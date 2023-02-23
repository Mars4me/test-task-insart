import React, { FC } from 'react';

interface InputProps {
    value: number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    defaultValue?: number;
}

export const Input: FC<Readonly<InputProps>> = ({ onChange, value, defaultValue }) => {
    return (
        <input
            type="number"
            min={0}
            step={0.01}
            defaultValue={defaultValue}
            value={value}
            onChange={onChange}
            className="text-2xl focus:outline-none w-[100%]"
        />
    );
};
