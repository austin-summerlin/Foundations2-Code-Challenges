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

export function capitalizeNames(arr) {
  return arr.map(n => {
    const lower = n.toLowerCase();
    return (lower.charAt(0).toUpperCase() + lower.slice(1));
  });
}

export function namesOnly(arr) {
  return arr.map(n => n.name);
}