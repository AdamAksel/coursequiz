/*
datatypes schema:

{
        questionSort: "Datatypes",
        question: ``,
        rightAnswer: [``],
        wrongAnswers: [``,``,``],
        comment: ``
}
*/

export const datatypes = [
  {
    questionSort: 'Datatypes',
    question: `typeof [] will returns what datatype?`,
    rightAnswer: [`Object`],
    wrongAnswers: [`Variable`, `String`, `Array`],
    comment: `All arrays are of the object datatype, an array is a structured object.`,
  },
  {
    questionSort: 'Datatypes',
    question: `typeof NaN retruns what datatype?`,
    rightAnswer: [`Number`],
    wrongAnswers: [`String`, `NaN`, `Undefined`],
    comment: `For some reason Not A Number, NaN, is a number according to javascript.`,
  },
  {
    questionSort: 'Datatypes',
    question: `typeof (parseInt("1") + 1) returns what datatype?`,
    rightAnswer: [`Number`],
    wrongAnswers: [`String`, `Function`, `Object`],
    comment: `Javascript coerces numbers into strings before the opposite so you have to convert strings to numbers before doing arithmetic.`,
  },
  {
    questionSort: 'Datatypes',
    question: `typeof ("1" + 1) returns what datatype?`,
    rightAnswer: [`String`],
    wrongAnswers: [`Number`, `Function`, `Array`],
    comment: `Javascript coerces numbers into strings before the opposite so you have to convert strings to numbers before doing arithmetic.`,
  },
  {
    questionSort: 'Datatypes',
    question: `typeof Number("1") returns what datatype?`,
    rightAnswer: [`Number`],
    wrongAnswers: [`String`, `Function`, `Object`],
    comment: `Number tries to parse things into numbers, including values that cannot be type coerced to a number.`,
  },
  {
    questionSort: 'Datatypes',
    question: `typeof Number("doggy") returns what datatype?`,
    rightAnswer: [`Number`],
    wrongAnswers: [`String`, `Function`, `Object`],
    comment: `Number tries to parse things into numbers, including values that cannot be type coerced to a number.`,
  },
  {
    questionSort: 'Datatypes',
    question: `typeof typeof 1 returns what datatype?`,
    rightAnswer: [`String`],
    wrongAnswers: [`Number`, `Why did you write typeof twice?`, `Undefined`],
    comment: `typeof typeof always returns a string, sorry for wasting your time.`,
  },
  {
    questionSort: 'Datatypes',
    question: `typeof true returns what datatype?`,
    rightAnswer: [`Boolean`],
    wrongAnswers: [`String`, `Object`, `Undefined`],
    comment: `true and false are booleans`,
  },
  {
    questionSort: 'Datatypes',
    question: `typeof undeclaredVariable; returns what datatype?`,
    rightAnswer: [`Undefined`],
    wrongAnswers: [`String`, `Variable`, `Object`],
    comment: `Variables always have the datatype they reference, if it is undeclared the type is undefined.`,
  },
  {
    questionSort: 'Datatypes',
    question: `typeof Math returns what datatype?`,
    rightAnswer: [`Object`],
    wrongAnswers: [`String`, `Number`, `Boolean`],
    comment: `Complex datatypes in javascript are objects, Math included.`,
  },
  {
    questionSort: 'Datatypes',
    question: `typeof Math.random returns what datatype?`,
    rightAnswer: [`Function`],
    wrongAnswers: [`String`, `Number`, `Object`],
    comment: `JavaScript doesn't have a function datatype, typeof should return an object but instead returns a function. Javascript being javascript.`,
  },
  {
    questionSort: 'Datatypes',
    question: `typeof Math.random() returns what datatype?`,
    rightAnswer: [`Number`],
    wrongAnswers: [`String`, `Function`, `Object`],
    comment: `When the Math.random method is run it returns a number.`,
  },
]
