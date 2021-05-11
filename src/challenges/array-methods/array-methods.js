//Write a function name howMuchPencil that takes in a string, as written on the side of a pencil.
//As you sharpen the pencil, the string will become shorter and shorter, starting by removing the first letter.
//Your function should use slice within a loop and return an array of each successice string result from losing letters to the sharpener, until nothing is left.
//For example, if the input is 'Welcome', the output will be ['Welcome', 'elcome', 'lcome', 'come', 'ome', 'om', 'e']
export function howMuchPencil(str) {
  const arr = [];
  for (let i = 0; i <= str.length; i++) {
    arr.push(str.substring(i, str.length));
  }
  return arr;

}

//Write a function name wordsToCharList that, given a string as inputm returns a new array where every element is a character of the input string.
//For example, wordsToCharList('gregor') returns ['g','r','e','g','o','r']
export function wordsToCharList(str) {
  return str.split('');
}

//You are making a grocery list for ingredients needed in the gruffalo crumble recipe, below. Rather than taking the entire recipt, you only want a list of the item names.
// Write a function named listFoods that takes in the recipe and returns a new arrat o the food items without any amount or units. Just the name. For example, '1 cup flour' wild return 'flour'.
export function listFoods(recipe) {
  const arr = recipe.ingredients.map(n => n.split(' ').splice(2).join(' '));
  return arr;
}

//Use the same recipe (gruffaloCrumble) from challenge 3, above.
//Write a function named stepAction that takes in the recipe and extracts the action verbs from the steps. Fortunate for you, the action verbs are the first word of each action.
//Return a new array containing just the verbs. For example, ['Mix until evenly distrubuted'] returns ['Mix'].
export function stepActions(recipe) {
  const arr = recipe.steps.map(n => n.split(' ').splice(0, 1)[0]);
  return arr;
}

//Write a function name removeLastCharacters that takes in a string and a number. The numberOfCharacters argument determines how many characters will be removed from the end of the string.
//Return the resulting string.
//If the numberOfCharacters argument is greater that the length of the input string, the function should return an empty string.
//If the numberOfCharacters argument is a negative number, the function should return the input string without any changes.
//For example removeLastCharacters('Gregor', 2) returns 'Greg', removeLastCharacters('Gregor', -2) returns 'Gregor', removeLastCharacters('Gregor', 9) returns ''.
export function removeLastCharacters(str, numberOfCharacters) {
  return str.substring(0, str.length - numberOfCharacters);
}