export function doubleNumbers(arr) {
  const numbers = [2, 5, 100];
  const doubled = numbers.map(item => item * 2);
  return (doubled);
}

export function stringItUp(arr) {
  const numbers = [2, 5, 100];
  const stringy = numbers.map(item => item + '');
  return (stringy);
}