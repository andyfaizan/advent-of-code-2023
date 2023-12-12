export const getCalibrationValueFrom = (line: string): string => {
    let updatedLine = line;
    let start: number | string, end: number | string;
    let firstDigit: string, lastDigit: string;

    for (let i = 0; ; i++) {
        start = updatedLine[i];
        end = updatedLine[updatedLine.length - i];
        if (!firstDigit) {
            if (!Number.isNaN(parseInt(start))) {
                firstDigit = start;
            } else {
                spelledOutDigits.forEach((digit) => {
                    if (updatedLine.indexOf(digit) === i) {
                        firstDigit = getNumberFromSpelledDigit(digit);
                    }
                });
            }
        }
        if (!lastDigit) {
            if (!Number.isNaN(parseInt(end))) {
                lastDigit = end;
            } else {
                spelledOutDigits.forEach((digit) => {
                    let allOccurrencesOfDigit = [
                        ...updatedLine.matchAll(new RegExp(digit, 'gi')),
                    ].map((a) => a.index);
                    if (
                        allOccurrencesOfDigit.length > 0 &&
                        allOccurrencesOfDigit.includes(updatedLine.length - i)
                    ) {
                        lastDigit = getNumberFromSpelledDigit(digit);
                    }
                });
            }
        }
        if (firstDigit && lastDigit) {
            return firstDigit + lastDigit;
        }
        if (i > updatedLine.length) break;
    }
    if (firstDigit && !lastDigit) return firstDigit + firstDigit;
    if (lastDigit && !firstDigit) return lastDigit + lastDigit;
};

export const spelledOutDigits = [
    'one',
    'two',
    'three',
    'four',
    'five',
    'six',
    'seven',
    'eight',
    'nine',
];

export const getNumberFromSpelledDigit = (spelledOutDigit: string): string => {
    return String(spelledOutDigits.indexOf(spelledOutDigit) + 1);
};
