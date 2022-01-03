import { sum, capitalString, reverseString, calculator, ceasarCipher, analyzeArray } from './script';

// Tests for simple addition
test('adds 1 + 2 to equal 3', () => {
	expect(sum(1, 2)).toBe(3);
});

// Tests for string
test('First letter capitalized', () => {
	expect(capitalString('hero')).toBe('Hero');
});

test('Reverse string', () => {
	expect(reverseString('Yesterday')).toBe('yadretseY');
});

// Tests for calculator
test('calculator add', () => {
	expect(calculator('+', 1, 2)).toBe(3);
});

test('calculator subtract', () => {
	expect(calculator('-', 10, 2)).toBe(8);
});

test('calculator multiply', () => {
	expect(calculator('*', 8, 8)).toBe(64);
});

test('calculator divide', () => {
	expect(calculator('/', 100, 10)).toBe(10);
});

// Tests for ceasar cipher

test('Test from z to a', () => {
	expect(ceasarCipher('abcdefghijklmnopqrstuvwxyz', 2)).toBe('cdefghijklmnopqrstuvwxyzab');
});

test('Keeping the same case', () => {
	expect(ceasarCipher('We need To keep Same case', 5)).toBe('Bj sjji Yt pjju Xfrj hfxj');
});

test('Test punctuation', () => {
	expect(ceasarCipher('Hello. I am. Borg.', 5)).toBe('Mjqqt. N fr. Gtwl.');
});

// Tests for analyze function

test('Test average value', () => {
	expect(analyzeArray([ 1, 8, 3, 4, 2, 6 ])).toStrictEqual({
    average: 4,
    length: 6,
    max: 8,
    min: 1
  });
});
