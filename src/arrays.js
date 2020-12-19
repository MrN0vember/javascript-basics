const getNthElement = (index, array) => {
  return array[index]
};

const arrayToCSVString = array => {
return array.toString()
  
};

const csvStringToArray = string => {
  return string.split(",")
};

const addToArray = (element, array) => {
array.push(element);
};

const addToArray2 = (element, array) => {
  return array.concat(element);
};

const removeNthElement = (index, array) => {
  return array.splice(index,1);
};

const numbersToStrings = numbers => {
  return numbers.toString().split(",")
};

const uppercaseWordsInArray = strings => {
  return strings.map(strings => strings.toUpperCase());
};

const reverseWordsInArray = strings => {
  return strings.map(strings => strings.split("").reverse().join(""))
};

const onlyEven = numbers => {
  return numbers.filter(numbers => numbers % 2 == 0) 
};

const removeNthElement2 = (index, array) => {
  const nthRemoved= [...array];
  nthRemoved.splice(index,1);
  return nthRemoved;
};

const elementsStartingWithAVowel = strings => {
  // your code here
};

const removeSpaces = string => {
  // your code here
};

const sumNumbers = numbers => {
  // your code here
};

const sortByLastLetter = strings => {
  // your code here
};

module.exports = {
  getNthElement,
  arrayToCSVString,
  csvStringToArray,
  addToArray,
  addToArray2,
  removeNthElement,
  numbersToStrings,
  uppercaseWordsInArray,
  reverseWordsInArray,
  onlyEven,
  removeNthElement2,
  elementsStartingWithAVowel,
  removeSpaces,
  sumNumbers,
  sortByLastLetter
};
