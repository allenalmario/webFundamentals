// 1. Biggie Size

function makeItBig(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            arr[i] = "big";
        }
    }
    return arr;
}

console.log(makeItBig([-1, 3, 5, -5]));

// 2. Print Low, Return High

function lowestValue(arr) {
    var min = arr[0];
    var max = arr[0];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    console.log(min);
    return max;
}

console.log(lowestValue([11, 17, 1, 3, 5]));

// 3. Print one, return another

function printOne(arr) {
    console.log(arr[arr.length - 2]);
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] % 2 != 0) {
            return arr[i];
        }
    }
}

var answer = printOne([2, 10, 3, 8, 1, 9, 14]);
console.log(answer);

// 4. Double Vision 

var anArray = [1, 2, 3];

function double(arr) {
    var doubleArray = [];
    for (var i = 0; i < arr.length; i++) {
        doubleArray.push(arr[i] * 2);
    }
    return doubleArray;
}

var doubleArray = double(anArray);
console.log(doubleArray);
console.log(anArray);

// 5. Count Positives

function countPositives(arr) {
    var positives = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positives += 1;
        } 
    }
    arr[arr.length - 1] = positives;
    return arr;
}

console.log(countPositives([-1, 1, 1, 1]));

// 6. Even and Odds

function evenOdds(arr) {
    var evens = 0;
    var odds = 0;
    for (var i = 0; i < arr.length; i++) {
        if (evens == 3) {
            console.log("Even more so!");
            evens = 0;
        }
        if (odds == 3) {
            console.log("That's odd!");
            odds = 0;
        }
        if (arr[i] % 2 == 0) {
            evens += 1;
        }
        else {
            odds += 1;
        }
    }
}

evenOdds([1,5,9,14,23,27,30,26,42]);

// 7. Increment the Seconds

function seconds(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (i % 2 != 0) {
            arr[i] = arr[i] + 1;
            console.log(arr[i]);
        }
    }
    return arr;
}

var secondsArray = seconds([1, 2, 3, 4, 5, 6]);
console.log(secondsArray);

// 8. Previous Lengths

function previousLengths(arr) {
    for (var i = arr.length - 1; i > 0; i--) {
        var word = arr[i - 1]; // figure out how I can stop it before it can access arr[-1]
        var count = word.length;
        arr[i] = count;
    }
    return arr;
}

var newArr = previousLengths(['hello', 'dojo', 'awesome']);
console.log(newArr);

// 9. Add Seven 

seven = [1, 2, 3]

function addSeven(arr) {
    var randArray = [];
    for (var i = 0; i < arr.length; i++) {
        randArray.push(arr[i] + 7);
    }
    return randArray;
}

var newArray = addSeven(seven);
console.log(newArray);
console.log(seven);

// 10. Reverse Array

function reverseArr(arr) {
    for (var i = 0; i < arr.length / 2; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
        // console.log(arr);
    }
}

var arr = [1,2,3,4,5];

reverseArr(arr);

console.log(arr);

// 11. Outlook: Negative

function negative(arr) {
    var negArray = [];
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            var neg = arr[i] - (arr[i] * 2);
            negArray.push(neg);
        }
        if (arr[i] <= 0) {
            negArray.push(arr[i]);
        }
    }
    return negArray;
}

var negArr = negative([1,-3,5]);
console.log(negArr);

// 12. Always Hungry

function alwaysHungry(arr) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == "food") {
            console.log("yummy");
            count = count + 1;
        }
    }
    if (count == 0) {
        console.log("I'm hungry");
    }
}

alwaysHungry(['food', 1, 'food', 4, 7, 'food']);

// 13. Swap Toward the Center

function swapTowardCenter(arr) {
    for (var i = 0; i < arr.length / 5; i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
        console.log(arr);
    }
}

swapTowardCenter(['true', 42, 'Ada', 2, 'pizza']);

// 14. Scale the Array 

function scaleArray(arr, num) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * num;
    }
    return arr
}
var newArr = scaleArray([1,2,3], 3);
console.log(newArr);