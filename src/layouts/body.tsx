import React from 'react';
import { Container } from '../components/Container';
import { CustomCopmonentProps } from './../interfaces';

export const Body = (props: CustomCopmonentProps) => {
    return (
        <div className="flex-1 mt-5 md:mt-12">
            <Container className="flex flex-col gap-8 md:gap-20"> {props.children} </Container>
        </div>
    );
};
