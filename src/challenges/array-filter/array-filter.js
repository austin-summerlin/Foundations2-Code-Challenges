export function fiveAndGreaterOnly(arr) {
  return arr.filter(n => n >= 5);
}

export function evensOnly(arr) {
  return arr.filter(n => n % 2 === 0);
}

export function fiveCharactersOrFewerOnly(arr) {
  return arr.filter(n => n.length < 6);
}

export function peopleWhoBelongToTheIlluminati(arr) {
  return arr.filter(n => n.member === true);
}

export function ofAge(arr) {
  return arr.filter(n => n.age >= 18);
}