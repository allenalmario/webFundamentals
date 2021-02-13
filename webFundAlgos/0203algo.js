// Challenge 1

var arr = [1,2,3,4];

arr.push(5);

console.log(arr);

// Challenge 2

var arr = [2,3,4,5];

var num = 1;

function pushToFirst(arr, num) {
    arr.push(null); // push null to end of arr to create another index to add to;
    for (var i = arr.length - 1; i > 0; i--) {
        arr[i] = arr[i - 1]; // Take current index and make it equal to value to the index before
    }
    arr[0] = num; // set first index to 1;
}

pushToFirst(arr,num);
console.log(arr);