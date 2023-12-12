export const getCalibrationValueFrom = (line: string): string => {
    const lineLength = line.length;
    let start: number | string, end: number | string;
    let firstDigit: string, lastDigit: string;
    for (let i = 0; i <= lineLength - 1; i++) {
        start = line[i];
        end = line[lineLength - i];
        if (!firstDigit && !Number.isNaN(parseInt(start))) {
            firstDigit = start;
        }
        if (!lastDigit && !Number.isNaN(parseInt(end))) {
            lastDigit = end;
        }
        if (firstDigit && lastDigit) {
            return firstDigit + lastDigit;
        }
    }
    if (firstDigit && !lastDigit) return firstDigit + firstDigit;
    if (lastDigit && !firstDigit) return lastDigit + lastDigit;
};
