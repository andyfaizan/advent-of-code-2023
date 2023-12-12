import { getCalibrationValueFrom } from './utils';

describe('getCalibrationValueFrom', () => {
    it.each([
        { encodedValue: '1abc2', configValue: '12' },
        {
            encodedValue: 'pqr3stu8vwx',
            configValue: '38',
        },
        { encodedValue: 'a1b2c3d4e5f', configValue: '15' },
        { encodedValue: 'treb7uchet', configValue: '77' },
        { encodedValue: 'gjrcjrkvghthreegqqrg82qbct', configValue: '82' },
        { encodedValue: 'zkxjhgprtrlcfeight795five8', configValue: '78' },
    ])('encoded value', ({ encodedValue, configValue }) => {
        const result = getCalibrationValueFrom(encodedValue);
        expect(result).toEqual(configValue);
    });
});
