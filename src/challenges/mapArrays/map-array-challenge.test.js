/* eslint-disable quotes */
import { doubleNumbers, stringItUp, capitalizeNames } from './map-array-challenge';

test('doubles numbers', () => {
  const input = [2, 5, 100]; // arrange
  const output = doubleNumbers(input); // act
  expect(output).toEqual([4, 10, 200]); // assert
});

test('string it up', () => {
  const input = [2, 5, 100]; // arrange
  const output = stringItUp(input); // act
  expect(output).toEqual(['2', '5', '100']); // assert
});

test('Capitalize Names', () => {
  const input = ["john", "JACOB", "jinGleHeimer", "schmidt"]; // arrange
  const output = capitalizeNames(input); // act
  expect(output).toEqual(["John", "Jacob", "Jingleheimer", "Schmidt"]); // assert
});
