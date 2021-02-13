// Challenge ONE
// Given an array, print out the values in the array as well as
// the sum of all values

var myArray = [4, 10, 6, 2, 9];

var sum = 0;

for (var i = 0; i < myArray.length; i++) {
    var value = myArray[i];
    sum = sum + myArray[i];
    console.log("Value: " + value + ", Sum: " + sum);
}

// Challange 2:
// Given an array, multiply each value in the array by its index position and
// and console.log the modified array

var someArray = [2, 5, 14, 3, 7];

for (var i = 0; i < someArray.length; i++) {
    someArray[i] = someArray[i] * i;
}
console.log(someArray);