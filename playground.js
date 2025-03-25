//STEP 2:      Declare variables//
let userName = "John";
const birthYear = 2000;
const currentYear = 2025;

// STEP 3:        Use template Literals//: Tempalte Strings
const birthhYear = 2000;
const currentYearr = 2025;
const age = currentYearr - birthhYear;
const name = "sandra";
console.log(`the name is ${name} and age is ${age}`);

//STEP 4:       Write arrow function

const currenttYear = 2025;
const calcBirthYear = (age) => currenttYear - age;
console.log(`The birthYear is ${calcBirthYear(20)}`);

const calculateBirthYear = (currentYeear, agee) => currentYeear - agee;
const currentYeear = 2025;
const agee = 21;
console.log(`The birthYear is ${calculateBirthYear(currentYeear, agee)}`);

//STEP 5 :     Apply Destructing  //

const user = { names: "cyuzuzo eric", age: 20, country: "Rwanda" };
const { names, country } = user;
console.log(`the name is ${names} and the country is ${country}`);

//////    Array

const arrayOfColors = ["green", "pink", "blue", "white", "black"];
const [firstColor, secondColor] = arrayOfColors;
console.log(`The first color is ${firstColor}`);
console.log(`The second color is ${secondColor}`);

//STEP 6 :  Experiment with Rest and Spread Operators////

function sumOfArray(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
const array = [1, 2, 3, 4, 5, 6];
const result = sumOfArray(...array);
console.log(`The sum of an array is ${result}`);

////   To Merge two arrays //////

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];
const mergedArray = [...array1, ...array2];
console.log(mergedArray);

//// STEP 7:   Use Promises ////

function fetchData() {
  return new Promise((resolve, reject) => {
    const success = true;

    setTimeout(() => {
      if (success) {
        resolve("Data fetched successfully!!!!");
      } else {
        reject("Error fetching data.");
      }
    }, 2000);
  });
}

fetchData()
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
