import { readFileSync } from 'fs';
import { getCalibrationValueFrom } from './utils';

export const main = (): number => {
    const input = readFileSync('./input', 'utf8');
    const lines: string[] = input.split('\n');
    let sum = 0;
    lines.forEach((line: string) => {
        const value = getCalibrationValueFrom(line);
        sum += parseInt(value);
    });
    return sum;
};

let startTime = performance.now();
console.log(main());
let endTime = performance.now();
let timeElapsed = endTime - startTime;
console.log({ timeElapsed });
