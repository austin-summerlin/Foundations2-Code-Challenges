//Write a function that iterates over an array of people objects and creates a new list of each person's full name using the array method 'map'
//Each object will have the shape {firstName:string, lastName:string} Note the space in between first and last name.
//You can assume that neither firstName or lastName will be blank.
export const fullName = people => {
  return people.map(n => `${n.firstName} ${n.lastName}`);
};
//Write a function named addValues that, given an array of numbers as input, uses reduce to add the values in the array.
export const addValues = (arr) => {
  return arr.reduce((sum, n) => sum += n, 0);
};
//Write a function named addPurchases that, given an array of objects as input, uses reduce to find the toal amount purchased.
//Each object contains the keys item and purchasePrice like the example.

export const addPurchases = (arr) => {
  return arr.reduce((accumulator, value) => {
    return accumulator += value.purchasePrice;
  }, 0);
};

//Write a function name countNumberOfElements that, given an array as input, uses redue to count the number of elements in the array.
//Note: You may not use the array's built-in length property.
export const countNumberOfElements = (arr) => {
  return arr.reduce((accumulator) => {
    return accumulator + 1;
  }, 0);
};

//Write a function named returnNames that, given the Star Wars data, below, uses reduce to return an array containing the names of the characters.
export const returnNames = (arr) => {
  return arr.reduce((accumulator, value) => {
    accumulator.push(value.name);
    return accumulator;
  }, []);
};

//Write a function name reversedString that takes in a string and returns a string with the letters in reverse order.
//Note: You must use reduce for this challenge. You many not use the built-in .reverse() string method.
export const reversedString = (str) => {
  return str.split('').reduce((accumulator, value) => value + accumulator, '');
};
