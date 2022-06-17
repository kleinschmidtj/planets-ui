import { formatLargeNumber } from './formatLargeNumber';

test('formats large number correctly', () => {
  expect(formatLargeNumber(1000000)).toBe("1 000 000")
});

test('formats small number correctly', () => {
  expect(formatLargeNumber(9)).toBe("9")
});