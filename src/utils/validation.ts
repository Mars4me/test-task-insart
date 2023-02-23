export const validation = (currValue: number, nextValue: number) => {
    return nextValue <= currValue * 1.1 && nextValue >= currValue * 0.9;
};
