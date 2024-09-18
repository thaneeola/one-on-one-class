/* 1  Iterate 0 to 10 using for loop, do the same using while and do while loop*/

// for (let i = 0; i <= 10; i++) {
//     console.log(i);
//   }
//   let i = 0;

//   while (i <= 10) {
//     console.log(i);
//     i++;
//   }
//   let j = 0;
//   do {
//     console.log(j);
//     j++;
//   } while (j <= 10);

/* 2 Iterate 10 to 0 using for loop, do the same using while and do while loop*/

//   for (let i = 10; i >= 0; i--) {
//     console.log(i);
//   }
//   let i = 10;

//   while (i >= 0) {
//     console.log(i);
//     i--;
//   }
//   let j = 10;
//   do {
//     console.log(j);
//     j--;
//   } while (j >= 10);

/* 3 Iterate 0 to n using for loop */

/* 4Write a loop that makes the following pattern using console.log():
    #
    ##
    ###
    ####
    #####
    ######
    #######*/

const symbol = "#";
for (let i = 1; i <= 10; i++) {
  console.log(symbol.repeat(i));
}
/* 5 Use loop to print the following pattern:

0 x 0 = 0
1 x 1 = 1
2 x 2 = 4
3 x 3 = 9
4 x 4 = 16
5 x 5 = 25
6 x 6 = 36
7 x 7 = 49
8 x 8 = 64
9 x 9 = 81
10 x 10 = 100*/

for (let i = 0; i <= 10; i++) {
  console.log(`${i} x ${i} = ${i * i}`);
}

/* 6. Using loop print the following pattern

 i    i^2   i^3
 0    0     0
 1    1     1
 2    4     8
 3    9     27
 4    16    64
 5    25    125
 6    36    216
 7    49    343
 8    64    512
 9    81    729
 10   100   1000 */

for (let i = 0; i <= 10; i++) {
  console.log(`${i}     ${i ** 2}     ${i ** 3}`);
}

/* 7. Use for loop to iterate from 0 to 100 and print only even numbers*/

for (let i = 1; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

/* 8 Use for loop to iterate from 0 to 100 and print only odd numbers */
for (let i = 1; i <= 100; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

/* 9. Use for loop to iterate from 0 to 100 and print only prime numbers */
for (let i = 2; i <= 100; i++) {
  if (i % 1 == 0 && i % i == 0) {
    console.log(i);
  }
}

/* 10.  Use for loop to iterate from 0 to 100 and print the sum of all numbers.

The sum of all numbers from 0 to 100 is 5050. */
let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum += i;
}
console.log(`The sum of all numbers from 0 to 100 is ${sum}`);

/* 11. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

The sum of all evens from 0 to 100 is 2550. And the sum of all odds from 0 to 100 is 2500.*/

let sumEvens = 0;
let sumOdds = 0;
for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEvens += i;
  } else {
    sumOdds += i;
  }
}
console.log(
  `The sum of all evens from 0 to 100 is ${sumEvens}. And the sum of all odds from 0 to 100 is ${sumOdds}`
);

/*12. Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array

  [2550, 2500]*/
let array = [];
array.push(sumEvens);
array.push(sumOdds);
console.log(array);

/* 13. Develop a small script which generate array of 5 random numbers */
let array2 = [];
for (let i = 0; i < 5; i++) {
  let random = Math.floor(Math.random() * 100);
  array2.push(random);
}
console.log(array2);

/* 14. Develop a small script which generate array of 5 random numbers and the numbers must be unique*/
let array3 = [];
let used = [];
for (let i = 0; i < 5; i++) {
  let random = Math.floor(Math.random() * 100);
  array3.push(random);
  for (const num of array3) {
    if (num == used) {
      continue;
    }
    used.push(num);
  }
}
console.log(used);
console.log(array3);

/* 15. Develop a small script which generate a six characters random id: 

5j2khz
*/

let alphaNumeric = "0123456789abcdefghijklmnopqrstuvwxyz";

let allCharArray = alphaNumeric.split("");
console.log(allCharArray);

let id = [];
for (let i = 0; i < 6; i++) {
  let randomNumber = Math.floor(Math.random() * allCharArray.length);
  id.push(allCharArray[randomNumber]);
}
console.log(id.join(""));

/* Develop a small script which generate any number of characters random id:

  fe3jo1gl124g
  xkqci4utda1lmbelpkm03rba */
let randomId = [];
for (let i = 0; i < Math.floor(Math.random() * 20); i++) {
  let randomNumber = Math.floor(Math.random() * allCharArray.length);
  id.push(allCharArray[randomNumber]);
}

console.log(id.join(""));

/* Write a script which generates a random hexadecimal number.

'#ee33df' */

let hexChar = "abcdef0123456789";
let hexArray = hexChar.split("");
let hex = [];
for (let i = 0; i < 6; i++) {
  let randomNumber = Math.floor(Math.random() * hexArray.length);
  hex.push(hexArray[randomNumber]);
}

console.log(`#${hex.join("")}`);

/* Write a script which generates a random rgb color number.

rgb(240,180,80) */
let rgb = [];
for (let i = 0; i < 3; i++) {
  let randomNumber = Math.floor(Math.random() * 255);
  rgb.push(randomNumber);
}
console.log(`rgb(${rgb.join(" ")})`);

/* Using the above countries array, create the following new array.

["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]*/

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];
let newCountries = [];

for (const UpperCountries of countries) {
  newCountries.push(UpperCountries.toUpperCase());
}
console.log(newCountries);

/* Using the above countries array, create an array for countries length'.

[7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
*/

let countriesLength = [];
for (const country of countries) {
  countriesLength.push(country.length);
}
console.log(countriesLength);

/*Use the countries array to create the following array of arrays:

  [
  ['Albania', 'ALB', 7],
  ['Bolivia', 'BOL', 7],
  ['Canada', 'CAN', 6],
  ['Denmark', 'DEN', 7],
  ['Ethiopia', 'ETH', 8],
  ['Finland', 'FIN', 7],
  ['Germany', 'GER', 7],
  ['Hungary', 'HUN', 7],
  ['Ireland', 'IRE', 7],
  ['Iceland', 'ICE', 7],
  ['Japan', 'JAP', 5],
  ['Kenya', 'KEN', 5]
] */

let firstArray = [];

for (const country of countries) {
  let innerArray = [];
  innerArray.push(country);
  country.toUpperCase();
  let first3Letters = country.slice(0, 3);
  innerArray.push(first3Letters.toUpperCase());
  innerArray.push(country.length);
  firstArray.push(innerArray);
}
console.log(firstArray);

/* In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.

['Finland','Ireland', 'Iceland']*/
let countryLand = []
for (const country of countries) {
if(country.includes('land')){
  countryLand.push(country)
}
}
console.log(countryLand)

/*  In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.

['Albania', 'Bolivia','Ethiopia']*/

let countryEndAi= []
for (const country of countries) {
if(country.endsWith("ia")){
  countryEndAi.push(country)
}
}
console.log(countryEndAi)

/* Using the above countries array, find the country containing the biggest number of characters.

Ethiopia*/

let highLetter = []
let number =[]
