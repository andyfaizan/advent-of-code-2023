import { main } from './main';
import { getCalibrationValueFrom } from './utils';

jest.mock('./utils', () => ({
    getCalibrationValueFrom: jest.fn(),
}));

jest.mock('fs', () => ({
    readFileSync: jest.fn().mockReturnValue('a\nb\nc\nd'),
}));

xdescribe('main', () => {
    it('should return added values', () => {
        (getCalibrationValueFrom as jest.Mock)
            .mockReturnValueOnce('12')
            .mockReturnValueOnce('38')
            .mockReturnValueOnce('15')
            .mockReturnValueOnce('77');
        expect(main()).toEqual(142);
    });
});
