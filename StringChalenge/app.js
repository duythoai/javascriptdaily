"use strict";

///////////////////////////////////////
// Coding Challenge #4

/*
Write a program that receives a list of variable names written in underscore_case and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below), and conversion will happen when the button is pressed.
THIS TEST DATA (pasted to textarea)
underscore_case
 first_name
Some_Variable
  calculate_AGE
delayed_departure
SHOULD PRODUCE THIS OUTPUT (5 separate console.log outputs)
underscoreCase      ✅
firstName           ✅✅
someVariable        ✅✅✅
calculateAge        ✅✅✅✅
delayedDeparture    ✅✅✅✅✅
HINT 1: Remember which character defines a new line in the textarea 😉
HINT 2: The solution only needs to work for a variable made out of 2 words, like a_b
HINT 3: Start without worrying about the ✅. Tackle that only after you have the variable name conversion working 😉
HINT 4: This challenge is difficult on purpose, so start watching the solution in case you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 😀
*/
// Get element
const textareaElement = document.querySelector("textarea");
const buttonElement = document.querySelector("button");

const capitallize = (string) => {
  //
  const check = typeof string !== "string" || string.length === 0;
  if (check) {
    console.log("Nhập dữ liệu sai");
    return;
  }
  const newName = `${string[0].toUpperCase()}${string.slice(1)}`;
  return newName;
};
//
if (buttonElement) {
  const handleButton = (event) => {
    const content = textareaElement.value;
    // get content value of textarea
    const itemList = content.split("\n");
    const camelCase = [];
    itemList.forEach((element) => {
      const [first, second] = element.trim().split("_");
      let output = `${first}${second.replace(
        second[0],
        second[0].toUpperCase()
      )}`;
      camelCase.push(output);
    });
    camelCase.forEach((element, index) => {
      console.log(`${element.padEnd(20)}${"😍".repeat(index + 1)}`);
    });
  };
  buttonElement.addEventListener("click", handleButton);
}

// underscore_case
//  first_name
// Some_Variable
//   calculate_AGE
// delayed_departure
