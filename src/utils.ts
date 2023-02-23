export const mergeClassName = (firstValue: string, secondValue?: string) => {
    return firstValue + ' ' + (secondValue || '');
};

export const validation = (currValue: number, nextValue: number) => {
    return nextValue <= currValue * 1.1 && nextValue >= currValue * 0.9;
};

export const concurancy = () => console.log('afsafasf');
