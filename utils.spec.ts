import { getCalibrationValueFrom, getNumberFromSpelledDigit } from './utils';

describe('getCalibrationValueFrom', () => {
    it.each([
        { encodedValue: '1abc2', configValue: '12' },
        {
            encodedValue: 'pqr3stu8vwx',
            configValue: '38',
        },
        { encodedValue: 'a1b2c3d4e5f', configValue: '15' },
        { encodedValue: 'treb7uchet', configValue: '77' },
        { encodedValue: 'gjrcjrkvghthreegqqrg82qbct', configValue: '32' },
        { encodedValue: 'zkxjhgprtrlcfeight795five8', configValue: '88' },
        { encodedValue: 'xtwone3four', configValue: '24' },
        { encodedValue: '4nineeightseven2', configValue: '42' },
        { encodedValue: 'zoneight234', configValue: '14' },
        { encodedValue: '7pqrstsixteen', configValue: '76' },
        { encodedValue: 'two1nine', configValue: '29' },
        { encodedValue: 'eightwothree', configValue: '83' },
        { encodedValue: 'abcone2threexyz', configValue: '13' },
        {
            encodedValue: 'fzrpfhbfvj6dbxbtfs7twofksfbshrzkdeightwoqg',
            configValue: '62',
        },
    ])('encoded value', ({ encodedValue, configValue }) => {
        const result = getCalibrationValueFrom(encodedValue);
        expect(result).toEqual(configValue);
    });
});

describe('getNumberFromSpelledDigit', () => {
    it('should getNumberFromSpelledDigit', () => {
        expect(getNumberFromSpelledDigit('one')).toEqual('1');
        expect(getNumberFromSpelledDigit('two')).toEqual('2');
        expect(getNumberFromSpelledDigit('three')).toEqual('3');
        expect(getNumberFromSpelledDigit('four')).toEqual('4');
        expect(getNumberFromSpelledDigit('five')).toEqual('5');
        expect(getNumberFromSpelledDigit('six')).toEqual('6');
        expect(getNumberFromSpelledDigit('seven')).toEqual('7');
        expect(getNumberFromSpelledDigit('eight')).toEqual('8');
        expect(getNumberFromSpelledDigit('nine')).toEqual('9');
    });
});
