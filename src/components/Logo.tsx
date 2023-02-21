import React, { FC } from 'react';
import { SiReactivex } from 'react-icons/si';

interface LogoProps {
    size: number;
    color: string;
}

export const Logo: FC<LogoProps> = (props: LogoProps) => {
    return <SiReactivex {...props}></SiReactivex>;
};
