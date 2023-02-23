export const toFixed =
    (numbersAfterDot: number) =>
    (number: number): number =>
        +number.toFixed(numbersAfterDot);
