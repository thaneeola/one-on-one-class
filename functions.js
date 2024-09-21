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
console.log(4)

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
      return("Autumn");
      break;
    case "December":
    case "January":
    case "February":
      return("Winter");
      break;
    case "March":
    case "April":
    case "May":
      return("Spring");
      break;
    case "June":
    case "July":
    case "August":
      return("Summer");
      break;
    default:
      return("Invalid month");
  }
}

/* 15. Math.max returns its largest argument. Write a function findMax that takes three arguments and returns their maximum with out using Math.max method.

console.log(findMax(0, 10, 5))
10
console.log(findMax(0, -10, -2))
0 */
function findMax(a, b, c) {
  let maxNumber = [a,b,c];
  return Math.max(...maxNumber);
}

console.log(findMax(2,10,4))


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