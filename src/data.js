/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions : [
  {
    text: 'Which of the following JavaScript snippets correctly swaps the values of a and b?',
    answers: {
      a: 'let temp = a; a = b; b = temp;',
      b: 'a = b; b = a;',
      c: 'swap(a, b);',
      d: 'a = a + b;',
    },
    correct: 'a',
    selected: null,
  },
  {
    text: 'Given the array [1, 2, 3, 5, 6], which number is missing to complete the sequence from 1 to 6?',
    answers: {
      a: '2',
      b: '4',
      c: '7',
      d: '0',
    },
    correct: 'b',
    selected: null,
  },
  {
    text: 'Which JavaScript expression will reverse the string "hello" correctly?',
    answers: {
      a: 'str.split("").reverse().join("")',
      b: 'str.reverse()',
      c: 'str.join().reverse()',
      d: 'str.split("").join("")',
    },
    correct: 'a',
    selected: null,
  },
  {
    text: 'How many vowels are present in the string "Programming is fun"?',
    answers: {
      a: '4',
      b: '5',
      c: '6',
      d: '7',
    },
    correct: 'b',
    selected: null,
  },
  {
  text: 'Which JavaScript method converts a string to uppercase?',
  answers: {
    a: 'toUpperCase()',
    b: 'toUpper()',
    c: 'upperCase()',
    d: 'uppercase()',
  },
  correct: 'a',
  selected: null,
},
  {
    text: 'For number 15, which output is printed by the FizzBuzz condition?',
    answers: {
      a: 'Fizz',
      b: 'Buzz',
      c: 'FizzBuzz',
      d: '15',
    },
    correct: 'c',
    selected: null,
  },
  {
    text: 'Which snippet correctly finds the highest number in [2, 7, 1, 9, 5]?',
    answers: {
      a: 'Math.max(...arr)',
      b: 'arr.min()',
      c: 'arr[0]',
      d: 'arr.reduce((a,b)=>a+b)',
    },
    correct: 'a',
    selected: null,
  },
  {
    text: 'Which JavaScript code produces [1,2,3,4,5] from [1,2,2,3,4,4,5]?',
    answers: {
      a: '[...new Set(arr)]',
      b: 'arr.filter(x=>x>0)',
      c: 'arr.slice()',
      d: 'arr.map(x=>x)',
    },
    correct: 'a',
    selected: null,
  },
  {
    text: 'What JavaScript code sums all digits in 1234?',
    answers: {
      a: 'String(num).split("").map(Number).reduce((a,b)=>a+b)',
      b: 'num % 10',
      c: 'parseInt(num / 10)',
      d: 'num + 1',
    },
    correct: 'a',
    selected: null,
  },
  {
    text: 'Which loop prints this star pattern in the console? "*", "**", "***", "****"',
    answers: {
      a: 'for(let i=4;i>0;i--){console.log("*".repeat(i))}',
      b: 'for(let i=1;i<=4;i++){console.log("*".repeat(i))}',
      c: 'for(let i=4;i>=1;i--){console.log(i)}',
      d: 'for(let i=1;i<=4;i++){console.log(i)}',
    },
    correct: 'b',
    selected: null,
  },
]};
