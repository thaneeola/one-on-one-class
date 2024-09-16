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
