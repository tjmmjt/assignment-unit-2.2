// WHAT IS THIS EVEN DOING?

// For questions 1-3, each code block is syntactically and logically correct. Your job is to describe what is happening. 
// They are in isolation -- variables in one question do not affect other questions.
// Describe the code as it would be run, and make sure you give us the console.log's value at the end.
// (Don't just say 'we console log the variable' -- instead say something like 'we console log 'yes'')


// 0. WRITE YOUR DESCRIPTION HERE
// //EXAMPLE. We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 2 is equal to 2, so
// we console.log 'yes'.

//CODE
/*
let number = 1;

number++;

if (number >= 2) {
  console.log('yes');
}

*/


// 1. WRITE YOUR DESCRIPTION HERE
// The variable 'name' is declared and is set equal to the string 'Dane'
// Then a conditional statement is written. If the variable name is equal to 'Mary', it will console.log 'Hi, Mary!'
// If the variable name equals anything other than 'Mary' then it will console.log 'How do you do?'
// In this scenario, it will console.log 'How do you do?' because the variable is equal to 'Dane'

//CODE
/*
let name = 'Dane';

if (name === 'Mary') {
  console.log('Hi, Mary!');
} else {
  console.log('How do you do?');
}


*/

// 2. WRITE YOUR DESCRIPTION HERE
// The variable 'secret' is declared.
// The variable 'code' is declared and set equal to '123'
// A conditional statement is written as such. If the variable 'code' is equal to 123, then the variable 'secret' will be set equal to the string 'super' and the variable 'code' will be reassigned to itself multiplied by 2
// Another conditional statement is written. If the variable 'code' is greater than the value 250, then the variable 'secret' will be set equal to the string 'duper'
// console.log(secret) will log 'super' because code === 123 in the first conditional, and = 246 (less than 250) in the second conditional.

//CODE
/*
let secret;

let code = 123;

if(code === 123) {
  secret = 'super';
  code = code * 2;
}

if (code > 250) {
  secret = 'duper'
}

console.log(secret)

*/

// 3. WRITE YOUR DESCRIPTION HERE
// The variables 'isStudent', 'age', and 'zip' are declared and set equal to the boolean value 'true', the number value '34', and number value '55407'
// A compound conditional is written with the following conditions: 
// If the variable 'isStudent' is true AND 'zip' is greater than 80000, it will log 'You're a student on the West Coast!' to the console.
// If isStudent is false OR age is less than 30, then it will log 'What are your hobbies?' to the console.
// If isStudent is true, it will log 'Welcome to Prime!' to the console.
// For all other conditions, it will log 'How about the weather?' to the console. 
// In this example, it will log 'Welcome to Prime!' to the console.

//CODE
/*
let isStudent = true;
let age = 34;
let zip = 55407;

if (isStudent === true && zip > 80000 ) {
  console.log(`You're a student on the West Coast!`);
} else if (isStudent === false || age < 30) {
  console.log('What are your hobbies?');
} else if (isStudent === true) {
  console.log('Welcome to Prime!');
} else {
  console.log('How about the weather?')
}

*/




// REVERSE
// Now, for questions 4-6, we'll give you a description and some code. 
// Some of the code will NOT match the description.
// Comment above the problem code, and describe a potential solution.
// Look closely -- things are logically incorrect or missing and wrong in the code!

// EXAMPLE
// 0. (DESCRIPTION OF CORRECT BEHAVIOR)
// We make a variable called number and set it to 1 as a number.
// Then we increment the number variable. Number is now 2.
// We check if number is greater than or equal to 2. 
// -- it is, so we console.log 'yes'

//CODE
/*
let number = 1;

// FIX - number-- decrements number, but the instructions ask to increment. 
// Should be number++.
number--; 

if (number >= 2) {
  console.log('yes');
}

*/



//4. We start with three variables -- colorOne is set to 'blue' and 
// colorTwo is set to 'red', and mix is set to true. We check if mix is true 
// -- it is, so we set colorOne and colorTwo to 'purple'

// FIX - colorOne should be set to blue and colorTwo should be set to red. 
/*
let colorOne = 'red';
let colorTwo = 'blue';
let mix = true;

// FIX - Missing "colorTwo = 'purple'" in conditional statement
if (mix === true) {
  colorOne = 'purple';
}
*/

//5. We start with two variables -- temp is set to 40 and time is set to 4.
// We check if temp is higher than 39 and if time is greater or equal to  4 
// -- they are so we console.log 'throw away the food!'

// FIX - time should be declared with let instead of const because time is never constant. 
/*
let temp = 40;
const time = 4;

// FIX - || is the 'or' operator and should be replaced with the 'and' operator &&
if (temp > 39 || time >= 4) {
  console.log('throw away the food!');
}
*/

//6. We start with two variables -- age is set to 21 and minAge is set to 21.
// We check if age is greater than or equal to minAge 
// -- it is, so we console.log 'enter'.

/*
let age = 21;
const minAge = 21;

// FIX - if/else statements are switched. The first statement should be console.log('enter'), and the else statement should be console.log('no entry')
if(minAge <= age) {
  console.log('no entry');
} else {
  console.log('enter');
}
*/

