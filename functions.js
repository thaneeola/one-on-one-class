/* Declare a function fullName and it print out your full name.*/
function fullName() {
  console.log("My name is Thanee_ola");
}

/* 2. Declare a function fullName and now it takes firstName, lastName as a parameter and it returns your full - name.*/

function myFullName(lastName, firstName) {
  return firstName + " " + lastName;
}

/* 3. Declare a function addNumbers and it takes two two parameters and it returns sum.*/

function addNumbers(firstNum, lastNum) {
  return firstNum + lastNum;
}

/* 4.An area of a rectangle is calculated as follows: area = length x width. Write a function which calculates areaOfRectangle.*/

function areaOfRectangle(length, width) {
  return length * width;
}

/* 5. A perimeter of a rectangle is calculated as follows: perimeter= 2x(length + width). Write a function which calculates perimeterOfRectangle.*/
function perimeterOfRectangle(length, width) {
  return 2 * (length + width);
}

/* 6. A volume of a rectangular prism is calculated as follows: volume = length x width x height. Write a function which calculates volumeOfRectPrism.*/
function volumeOfRectPrism(length, width, height) {
  return length * width * height;
}
console.log(4);

/* 7. Area of a circle is calculated as follows: area = π x r x r. Write a function which calculates areaOfCircle*/
function areaOfCircle(radius) {
  return Math.PI * radius * radius;
}

/* 8. Circumference of a circle is calculated as follows: circumference = 2πr. Write a function which calculates circumOfCircle*/
function circumOfCircle(radius) {
  return 2 * Math.PI * radius;
}

/* 9. Density of a substance is calculated as follows:density= mass/volume. Write a function which calculates density.*/

function density(mass, volume) {
  return mass / volume;
}

/* 10. Speed is calculated by dividing the total distance covered by a moving object divided by the total amount of time taken. Write a function which calculates a speed of a moving object, speed.*/
function speed(distance, time) {
  return distance / time;
}

/* 11. Weight of a substance is calculated as follows: weight = mass x gravity. Write a function which calculates weight.*/
function weight(mass, gravity) {
  return mass * gravity;
}

/* 12. Temperature in oC can be converted to oF using this formula: oF = (oC x 9/5) + 32. Write a function which convert oC to oF convertCelsiusToFahrenheit.*/
function convertCelsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

/* 13. Body mass index(BMI) is calculated as follows: bmi = weight in Kg / (height x height) in m2. Write a function which calculates bmi. BMI is used to broadly define different weight groups in adults 20 years old or older.Check if a person is underweight, normal, overweight or obese based the information given below.

The same groups apply to both men and women.
Underweight: BMI is less than 18.5
Normal weight: BMI is 18.5 to 24.9
Overweight: BMI is 25 to 29.9
Obese: BMI is 30 or more */

function calculateBmi(weight, height) {
  let bmi = weight / (height * height);
  if (bmi < 18.5) {
    return "Underweight";
  } else if (bmi >= 18.5 && bmi <= 24.9) {
    return "Normal weight";
  } else if (bmi >= 25 && bmi <= 29.9) {
    return "Overweight";
  } else {
    return "Obese";
  }
}

/* 14. Write a function called checkSeason, it takes a month parameter and returns the season:Autumn, Winter, Spring or Summer.*/

function checkSeason(month) {
  switch (month) {
    case "September":
    case "October":
    case "November":
      return "Autumn";
      break;
    case "December":
    case "January":
    case "February":
      return "Winter";
      break;
    case "March":
    case "April":
    case "May":
      return "Spring";
      break;
    case "June":
    case "July":
    case "August":
      return "Summer";
      break;
    default:
      return "Invalid month";
  }
}

/* 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0 */
function findMax(a, b, c) {
  let maxNumber = [a, b, c];
  return Math.max(...maxNumber);
}

console.log(findMax(2, 10, 4));

/* Linear equation is calculated as follows: ax + by + c = 0. Write a function which calculates value of a linear equation, solveLinEquation.*/

function solveLinEquation(a, b, x, y, c) {
  const result = a * x + b * y + c;
  return result === 0;
}

/* Quadratic equation is calculated as follows: ax2 + bx + c = 0. Write a function which calculates value or values of a quadratic equation, solveQuadEquation.

console.log(solveQuadratic()) // {0}
console.log(solveQuadratic(1, 4, 4)) // {-2}
console.log(solveQuadratic(1, -1, -2)) // {2, -1}
console.log(solveQuadratic(1, 7, 12)) // {-3, -4}
console.log(solveQuadratic(1, 0, -4)) //{2, -2}
console.log(solveQuadratic(1, -1, 0)) //{1, 0} */
function solveQuadratic(a, b, c) {
  const d = b * b - 4 * a * c;
}

// Declare a function name printArray. It takes array as a parameter and it prints out each value of the array.

function printArray(Array) {
  for (const value of Array) {
    console.log(value);
  }
}
printArray([1, 4, 5, 6]);

/* Write a function name showDateTime which shows time in this format: 08/01/2020 04:08 using the Date object. */
function showDateTime() {
  let date = new Date();
  console.log(date.toLocaleString());
}

/* Declare a function name swapValues. This function swaps value of x to y.

swapValues(3, 4) // x => 4, y=>3
swapValues(4, 5)  */

function swapValues(a, b) {
  let firstNumber = a;
  let secoondNumber = b;
  console.log(`x => ${secoondNumber}  y => ${firstNumber}`);
}
swapValues(1, 2);

/* Declare a function name reverseArray. It takes array as a parameter and it returns the reverse of the array (don't use method).

console.log(reverseArray([1, 2, 3, 4, 5]))
//[5, 4, 3, 2, 1]
console.log(reverseArray(['A', 'B', 'C']))
//['C', 'B', 'A']*/
function reverseArray(array) {
  let newArray = [];
  for (const value of array) {
    newArray.unshift(value);
  }
  return newArray;
}

console.log(reverseArray(["a", "b"]));

/* Declare a function name capitalizeArray. It takes array as a parameter and it returns the - capitalizedarray. */
function capitalizeArray(array) {
  let capitalizeArray = [];
  for (const value of array) {
    capitalizeArray.push(value.toUpperCase());
  }
  return capitalizeArray;
}
console.log(capitalizeArray(["a", "b"]));

/* Declare a function name addItem. It takes an item parameter and it returns an array after adding the item */
function addItem(a, b) {
  let array = [];
  let c = a + b;
  array.push(c);
  return array;
}
console.log(addItem(1, 2));

// Declare a function name removeItem. It takes an index parameter and it returns an array after removing an item

// Declare a function name sumOfNumbers. It takes a number parameter and it adds all the numbers in that range.
function sumOfNumbers(range) {
  let sum = 0;
  for (let i = 0; i <= range; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumOfNumbers(68));

// Declare a function name sumOfEven. It takes a number parameter and it adds all the even numbers in that - range.

function sumOfEven(range) {
  let sumEvens = 0;
  for (let i = 0; i <= range; i++) {
    if (i % 2 == 0) {
      sumEvens += i;
    }
  }
  return sumEvens;
}
console.log(sumOfEven(100));

// Declare a function name sumOfOdds. It takes a number parameter and it adds all the odd numbers in that - range.

function sumOfOdds(range) {
  let sumodds = 0;
  for (let i = 0; i <= range; i++) {
    if (i % 2 !== 0) {
      sumodds += i;
    }
  }
  return sumodds;
}

console.log(sumOfOdds(100));

/*Declare a function name evensAndOdds . It takes a positive integer as parameter and it counts number of evens and odds in the number.

evensAndOdds(100);
The number of odds are 50.
The number of evens are 51.*/

function evensAndOdds(range) {
  const evenNumbers = [];
  const oddNumber = [];
  for (let i = 0; i <= range; i++) {
    if (i % 2 == 0) {
      evenNumbers.push(i);
    } else {
      oddNumber.push(i);
    }
  }

  return `The number of odds are ${oddNumber.length}.\nThe number of evens are ${evenNumbers.length}.`;
}

console.log(evensAndOdds(100));

/* Write a function which takes any number of arguments and return the sum of the arguments

sum(1, 2, 3) // -> 6
sum(1, 2, 3, 4) // -> 10()*/

/* Declare a function name randomHexaNumberGenerator. When this function is called it generates a random hexadecimal number. The function return the hexadecimal number*/

function randomHexaNumberGenerator() {
  let hexChar = "abcdef0123456789";
  let hexArray = hexChar.split("");
  let hex = [];
  for (let i = 0; i < 6; i++) {
    let randomNumber = Math.floor(Math.random() * hexArray.length);
    hex.push(hexArray[randomNumber]);
  }

  return `#${hex.join("")}`;
}

console.log(randomHexaNumberGenerator());

/* Declare a function name userIdGenerator. When this function is called it generates seven character id. The function return the id.

console.log(userIdGenerator());
41XTDbE */

function userIdGenerator() {
  let alphaNumeric = "0123456789abcdefghijklmnopqrstuvwxyz";

  let allCharArray = alphaNumeric.split("");
  console.log(allCharArray);

  let id = [];
  for (let i = 0; i <= 6; i++) {
    let randomNumber = Math.floor(Math.random() * allCharArray.length);
    id.push(allCharArray[randomNumber]);
  }
  return id.join("");
}
console.log(userIdGenerator());

/*Modify the userIdGenerator function. Declare a function name userIdGeneratedByUser. It doesn’t take any parameter but it takes two inputs using prompt(). One of the input is the number of characters and the second input is the number of ids which are supposed to be generated.

userIdGeneratedByUser()
'kcsy2
SMFYb
bWmeq
ZXOYh
2Rgxf
'
userIdGeneratedByUser()
'1GCSgPLMaBAVQZ26
YD7eFwNQKNs7qXaT
ycArC5yrRupyG00S
UbGxOFI7UXSWAyKN
dIV0SSUTgAdKwStr */
function userIdGeneratedByUser() {
  let charNumber = 4; // use prompt when you are using it 
  let numberofid = 3; // use prompt when you are using it 

  for (let i = 0; i < numberofid; i++) {
    let alphaNumeric = "0123456789abcdefghijklmnopqrstuvwxyz";

    let allCharArray = alphaNumeric.split("");
    console.log(allCharArray);

    let id = [];
    for (let i = 0; i < charNumber; i++) {
      let randomNumber = Math.floor(Math.random() * allCharArray.length);
      id.push(allCharArray[randomNumber]);
    }
    
    console.log(id.join(""))
  }
}
userIdGeneratedByUser()

/* Write a function name rgbColorGenerator and it generates rgb colors.

rgbColorGenerator()
rgb(125,244,255)*/

function rgbColorGenerator(){
  let rgb = [];
for (let i = 0; i < 3; i++) {
  let randomNumber = Math.floor(Math.random() * 255);
  rgb.push(randomNumber);
}
console.log(`rgb(${rgb.join(" ")})`);
}
rgbColorGenerator()


