// 1. Sigma

function sigma(num) {
    var sum = 0;
    for (var i = 0; i <= num; i++) {
        sum = sum + i;
    }
    return sum;
}

console.log(sigma(3));
console.log(sigma(5));

// 2. Factorial

function factorial(num) {
    product = 1;
    for (i = 1; i <= num; i++) {
        product = product * i;
    }
    return product;
}

console.log(factorial(3));
console.log(factorial(5));

// 3. Fibonacci

function fib(num) {
    var fibArr = [];
    fibArr[0] = 0;
    fibArr[1] = 1;
    for (var i = 2; i <= num; i++) {
        fibArr[i] = fibArr[i - 2] + fibArr[i - 1]; 
    }
    return fibArr;
}

console.log(fib(6));

// 4. Array: Second-to-last

function secondToLast(arr) {
    if (arr.length < 3) {
        return null;
    }
    for (var i = arr.length - 1; i > arr.length - 3; i--) {
        if (i = arr.length - 2) {
            var target = arr[i];
        }
    }
    return target;
}

console.log(secondToLast([1,2,3,4,5,6,7]));

// 5. Array Nth-to-last

function nthToLast(arr, n) {
    if (arr.length < n + 1) {
        return null;
    }
    for (var i = arr.length - 1; i > arr.length - n; i--) {
        if (i = arr.length - 3) {
            var target = arr[i];
        }
    }
    return target;
}

console.log(nthToLast([1,45,3,89,100], 3));

// 6. Array: Second-Largest

function secondLargest(arr) {
    if (arr.length < 2) {
        return null;
    }
    max = 0;
    second = 0;
    for (var i = 0; i < arr.length; i++) {
        if (max < arr[i]) {
            max = arr[i];
        }
    }
    for (var x = 0; x < arr.length; x++) {
        if (second < arr[x] && arr[x] != max) {
            second = arr[x];
        }
    }
    return second;
}

console.log(secondLargest([1, 8, 30, 10, 45, 20, 3]));

// 7. Double Trouble

function doubleTrouble(arr) {
    doubleArr = [];
    for (i = 0; i < arr.length; i++) {
        doubleArr.push(arr[i]);
        doubleArr.push(arr[i]);
    }
    return doubleArr;
}

console.log(doubleTrouble([4, "Ulysses", 42, false]));