/*
datatypes schema:

{
        questionSort: 1,
        question: ``,
        rightAnswer: ``,
        wrongAnswers: [``,``,``],
        comment: ``
}
*/

export const datatypes = [
  {
    questionSort: 1,
    question: `"typeof []" will return what datatype?`,
    rightAnswer: [`Object`],
    wrongAnswers: [`Variable`, `String`, `Undefined`],
    comment: `All arrays are of the object datatype, an array is a structured object.`,
  },
  {
    questionSort: 1,
    question: `"typeof NaN" will return what datatype?`,
    rightAnswer: [`Number`],
    wrongAnswers: [`String`, `NaN`, `Undefined`],
    comment: `For some reason Not A Number, NaN, is a number according to javascript.`,
  },
]
