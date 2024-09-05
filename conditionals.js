/*Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

Enter your age: 30
You are old enough to drive.

Enter your age:15
You are left with 3 years to drive.*/
// let user_input = Number(prompt("Enter your age: "))
// let user_age = 18 - user_input
// if (user_input >= 18){
//     alert("You are old enough to drive.")
// }else{
//     alert(`You are left with ${user_age} years to drive`)
// }

/* 2.) Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

Enter your age: 30
You are 5 years older than me.*/

let myAge = 20;
let yourAge = Number(prompt("Enter your age: "));
if (myAge < yourAge) {
  alert(`You are ${yourAge - myAge} years older than me.`);
} else if (myAge == yourAge) {
  alert(`we are the same age.`);
} else {
  alert(`I am ${yourAge - myAge} years older than you.`);
}
/* 3.) If a is greater than b return 'a is greater than b' else 'a is less than b'. 
Try to implement it in to ways

using if else
ternary operator.
  let a = 4
  let b = 3
  4 is greater than 3 */

let a = 4;
let b = 3;
if (a > b) {
  console.log(`${a} is greater than ${b}`);
} else {
  console.log(`${b} is greater than ${a}`);
}

a > b
  ? console.log(`${a} is greater than ${b}`)
  : console.log(`${b} is greater than ${a}`);

/* Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?

Enter a number: 2
2 is an even number

Enter a number: 9
9 is is an odd number. */

let num = Number(prompt("Enter a number: "));
if (num % 2 == 0) {
  alert(`${num} is an even number`);
} else {
  alert(`num is an odd number`);
}

// Exercises: Level 2
/* 1.  Write a code which can give grades to students according to theirs scores:
80-100, A
70-89, B
60-69, C
50-59, D
0-49, F */
let score = Number(prompt("Enter your score: "));
if (score >= 80 && score <= 100) {
  alert("A");
} else if (score >= 70 && score <= 89) {
  alert("B");
} else if (score >= 60 && score <= 69) {
  alert("C");
} else if (score >= 50 && score <= 59) {
  alert("D");
} else {
  alert("F");
}

/* 2. Check if the season is Autumn, Winter, Spring or Summer. If the user input is :
September, October or November, the season is Autumn.
December, January or February, the season is Winter.
March, April or May, the season is Spring
June, July or August, the season is Summer. */

let month = prompt("Enter the month: ");
switch (month) {
  case "September":
  case "October":
  case "November":
    alert("Autumn");
    break;
  case "December":
  case "January":
  case "February":
    alert("Winter");
    break;
  case "March":
  case "April":
  case "May":
    alert("Spring");
    break;
  case "June":
  case "July":
  case "August":
    alert("Summer");
    break;
  default:
    alert("Invalid month");
}

/* 3.  Check if a day is weekend day or a working day. Your script will take day as an input.
    What is the day  today? Saturday
    Saturday is a weekend.

    What is the day today? saturDaY
    Saturday is a weekend.

    What is the day today? Friday
    Friday is a working day.

    What is the day today? FrIDAy
    Friday is a working day. */

let day = prompt("What is the day  today? ");
switch (day.toLowerCase()) {
  case "saturday":
  case "sunday":
    alert("Weekend");
    break;
  case "monday":
  case "tuesday":
  case "wednesday":
  case "thursday":
  case "friday":
    alert("Working day");
    break;
  default:
    alert("Invalid day");
}
/* Write a program which tells the number of days in a month.
  Enter a month: January
  January has 31 days.

  Enter a month: JANUARY
  January has 31 day

  Enter a month: February
  February has 28 days.

  Enter a month: FEbruary
  February has 28 days. */
let months = prompt("Enter a month: ").toLowerCase();
switch (months) {
  case "january":
  case "march":
  case "may":
  case "july":
  case "august":
  case "december":
    alert(`${months} has 31 days`);
    break;
  case "april":
  case "june":
  case "september":
  case "october":
  case "november":
    alert(`${months} has 30 days`);
    break;
  case "february":
    alert(`${months} has 28 days`);
    break;
  default:
    alert("Invalid month");
}
