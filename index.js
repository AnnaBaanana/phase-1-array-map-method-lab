const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];

const sentence = "Anna banana cannot js"

function titleCase(str) {
  let newStr;
  newStr = str.split(' ').map(function(element) {
    return (element.charAt(0).toUpperCase() + 
    element.slice(1));
  }).join(' ')
  return newStr;
}

const newTest = titleCase(sentence);

function titleCased(array) {
  let newArray = [];
  for (i of array) {
    newStr = titleCase(i);
    newArray.push(newStr);
    i++
  }
  return newArray
}

console.log(titleArray(tutorials));

const finalCheck = titleArray(tutorials);