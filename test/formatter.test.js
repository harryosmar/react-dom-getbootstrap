import { secondsToTime } from '../src/formatter/timeFormatter.js';

test('secondsToTime should be behave correctly', () => {
    expect(secondsToTime(0)).toBe('0');
    expect(secondsToTime(59)).toBe('59');
    expect(secondsToTime(60)).toBe('1:0');
    expect(secondsToTime(90)).toBe('1:30');
    expect(secondsToTime(3600)).toBe('1:0:0');
    expect(secondsToTime(3690)).toBe('1:1:30');
});