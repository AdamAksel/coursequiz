/*
booleans schema:

{
        questionSort: "Booleans",
        question: ``,
        rightAnswer: [``],
        wrongAnswers: [``,``,``],
        comment: ``
}
*/

export const booleans = [
  {
    questionSort: 'Booleans',
    question: `undefined === undefined returns what value?`,
    rightAnswer: [`True`],
    wrongAnswers: [`False`, `Undefined`, `NaN`],
    comment: `It will return false if we write ">=" since the ">" operator is made for numbers and strings.`,
  },
  {
    questionSort: 'Booleans',
    question: `NaN === NaN returns what value?`,
    rightAnswer: [`False`],
    wrongAnswers: [`True`, `Undefined`, `NaN`],
    comment: `NaN is its own datatype, counts as a number and is not equal to itself, just javascript being javascript.`,
  },
  {
    questionSort: 'Booleans',
    question: `Booleans are the most effective way for your coomputer to process data?`,
    rightAnswer: [`Yes`],
    wrongAnswers: [`No`],
    comment: `Booleans are very similar to the binary language and mimic your computers own hardware memory.`,
  },
  {
    questionSort: 'Booleans',
    question: `An empty string "" has what boolean value?`,
    rightAnswer: [`False`],
    wrongAnswers: [`True`],
    comment: `In javascript 0, empty string, null, undefined and NaN are always false.`,
  },
  {
    questionSort: 'Booleans',
    question: `undefined has what boolean value?`,
    rightAnswer: [`False`],
    wrongAnswers: [`True`],
    comment: `In javascript 0, empty string, null, undefined and NaN are always false.`,
  },
  {
    questionSort: 'Booleans',
    question: `null has what boolean value?`,
    rightAnswer: [`False`],
    wrongAnswers: [`True`],
    comment: `In javascript 0, empty string, null, undefined and NaN are always false.`,
  },
  {
    questionSort: 'Booleans',
    question: `NaN has what boolean value?`,
    rightAnswer: [`False`],
    wrongAnswers: [`True`],
    comment: `In javascript 0, empty string, null, undefined and NaN are always false.`,
  },
  {
    questionSort: 'Booleans',
    question: `"false" has what boolean value?`,
    rightAnswer: [`True`],
    wrongAnswers: [`False`],
    comment: `"false" inside a string makes true because it is not coerced into false and strings count as true values.`,
  },
  {
    questionSort: 'Booleans',
    question: `true && "dog" returns what value?`,
    rightAnswer: [`"dog"`],
    wrongAnswers: [`True`, `False`, `Undefined`],
    comment: `If the values before the && operator is true it returns the value after.`,
  },
  {
    questionSort: 'Booleans',
    question: `if([]) will the if statement run?`,
    rightAnswer: [`Yes`],
    wrongAnswers: [`No`],
    comment: `Empty strings are false but empty arrays and objects are true.`,
  },
  {
    questionSort: 'Booleans',
    question: `if({}) will the if statement run?`,
    rightAnswer: [`Yes`],
    wrongAnswers: [`No`],
    comment: `Empty strings are false but empty arrays and objects are true.`,
  },
]
