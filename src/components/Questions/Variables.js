/*
variables schema:

{
        questionSort: 2,
        question: ``,
        rightAnswer: [``],
        wrongAnswers: [``,``,``],
        comment: ``
}
*/

export const variables = [
  {
    questionSort: 2,
    question: `"let myVariable" what value will this variable have?`,
    rightAnswer: [`Undefined`],
    wrongAnswers: [`Null`, `Nothing at all`, `String`],
    comment: `A declared but unassigned variable will always have "undefined" as its value.`,
  },
  {
    questionSort: 2,
    question: `What is the only reason to use the "var" keyword?`,
    rightAnswer: [`It's supported by older browsers.`],
    wrongAnswers: [`You want to make the variable global.`],
    comment: `Unless you are creating a website for older browsers always use "let" and "const".`,
  },
]
