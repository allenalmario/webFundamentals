// 1. Get 1 to 255

function counter(){
    var arr = [];
    for (var i = 1; i <= 255; i++) {
        arr.push(i);
    }
    return arr;
}

console.log(counter());

// 2. Get even 1000

function even(){
    var sum = 0;
    for (var i = 1; i <= 1000; i++) {
        if (i % 2 == 0) {
            sum = sum + i;
        }
    }
    return sum
}

console.log(even());

// 3. Sum odd 5000

function odd() {
    sum = 0;
    for (var i = 1; i <= 5000; i++) {
        if (i % 2 != 0) {
            sum = sum + i;
        }
    }
    return sum
}

console.log(odd());

// 4. Iterate an array 

function iterate(arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}

console.log(iterate([1,2,3]));

// 5. Find max 

function max(arr) {
    var max = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}

console.log(max([5, 9, 1, 3, 0]))

// 6. Find average

function average(arr) {
    var sum = 0;
    for (i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    avg = sum / arr.length;
    return avg;
}

console.log(average([1, 5, 9, 4]));

// 7. Array odd

function oddArray() {
    arr = [];
    for (var i = 0; i <= 50; i++) {
        if (i % 2 != 0) {
            arr.push(i);
        }
    }
    return arr;
}

console.log(oddArray());

// 8. Greater than Y 

function greaterThanY(arr, y) {
    var count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count = count + 1;
        }
    }
    return count;
}

console.log(greaterThanY([1, 3, 5, 7], 3));

 // 9. Squares

function squares(arr) {
    for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i] * arr[i];
    }
    return arr;
}

console.log(squares([1,5,10,-2]));

// 10. Negatives 

function negatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(negatives([1, -5, 10, -2]));

// 11. Max/Min/Avg 

function average(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;

    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i]
    }
    avg = sum / arr.length;
    finalArray = [max, min, avg];
    return finalArray;
}

console.log(average([1, 5, 10, -2]));

// 12. Swap Values

function swap(arr) {
    var temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    return arr;
}

console.log(swap([1,5,10,-2]));

// 13. Number to string

function dojo(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo'
        }
    }
    return arr;
}

console.log(dojo([-1, -3, 2]));