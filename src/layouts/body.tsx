import React from 'react';
import { Container } from '../components/Container';
import { CustomCopmonentProps } from './../interfaces';

export const Body = (props: CustomCopmonentProps) => {
    return (
        <div className="flex-1 grow">
            <Container className="px-[64px]"> {props.children} </Container>
        </div>
    );
};
