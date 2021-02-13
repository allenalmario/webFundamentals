// 1

function greaterThanY(arr, y) {
    count = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > y) {
            count ++;
        }
    }
    return count;
}

console.log(greaterThanY([1,2,3],1));

// 2

function maxMinAvg(arr) {
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
        sum = sum + arr[i];
    }
    var avg = sum / arr.length;
    console.log(`Max: ${max} Min: ${min} Average: ${avg}`);
}

maxMinAvg([1,2,3,4,5,6,7]);

// 3

function replaceNegatives(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

console.log(replaceNegatives([-1, 3,4,-10]));