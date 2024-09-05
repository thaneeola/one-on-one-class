// 1. Declare an empty array;
let emptyArray = [];

//2. Declare an array with more than 5 number of elements
let emptyArray2=Array(5)

//3. Find the length of your array
console.log(emptyArray2.length)
//4. Get the first item, the middle item and the last item of the array
let array = [1, 2, 3, 4, 5, 6]
console.log("First item: ", array[0])
let length =array.length
console.log("Middle item: ", array[length/2])
console.log("Last item: ", array[length-1]) // or array[-1]

//5. Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let mixedDataTypes = [1, "hello", true, null, undefined, 3,[3,2,5]]
console.log(mixedDataTypes.length);

//6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompanies = ["Facebook", "Google", "Microsoft", "Apple", "IBM", "Oracle","amazon"]

//7. Print the array using console.log()
console.log(itCompanies)

//8. Print the number of companies in the array
console.log(itCompanies.length)

//9. Print the first company, middle and last company
console.log(itCompanies[0]);
let length2 = (itCompanies.length - 1) / 2 
console.log(itCompanies[length2]);
console.log(itCompanies[itCompanies.length-1])


//10. Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
let sentence = itCompanies.join(', ').concat("are big compamies") 
console.log(sentence);
if (itCompanies[3]=="Apple"){
    console.log("Apple")}
else{
    console.log("A company is not found")
}

//11. Filter out companies which have more than one 'o' without the filter method
let companiesWithMoreThanOneO = []
for (let i = 0; i < itCompanies.length; i++) {
    if (itCompanies[i].toLowerCase().split('o').length > 2) {
        companiesWithMoreThanOneO.push(itCompanies[i])

    }

}
console.log(companiesWithMoreThanOneO);
//12.Sort the array using sort() method
itCompanies.sort()
console.log(itCompanies)
//13.Reverse the array using reverse() method
itCompanies.reverse()
console.log(itCompanies)

// Slice out the first 3 companies from the array
let firstThreeCompanies = itCompanies.slice(0, 3)
console.log(firstThreeCompanies)

// Slice out the last 3 companies from the array
let lastThreeCompanies = itCompanies.slice(itCompanies.length - 3)
console.log(lastThreeCompanies)

//Slice out the middle IT company or companies from the array
let middleCompanies = itCompanies.slice((itCompanies.length - 1) / 2,4)
console.log(middleCompanies)

// Remove the first IT company from the array
itCompanies.shift()
console.log(itCompanies)

// Remove the middle IT company or companies from the array
 let middleIndex = Math.floor(itCompanies.length / 2)
 itCompanies.splice(middleIndex, 1)
 console.log(itCompanies)

 // Remove the last IT company from the array
 itCompanies.pop()
 console.log(itCompanies)

 // Remove all IT companies
 itCompanies=[]
 console.log(itCompanies)

 