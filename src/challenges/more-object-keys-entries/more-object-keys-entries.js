export function getHouses(obj) {
  const arr = Object.values(obj);
  return arr.map(x => x.house);
}

export function updateNumbers(obj) {
  const arr = [];
  Object.keys(obj).forEach(key => {
    arr.push(`${key}: ${obj[key]}`);
  });
  return arr;

}

export function totalCharacters(arr) {
}

export function hasChildrenEntries(arr, character) {
}

export function sortByChildren(arr) {
}