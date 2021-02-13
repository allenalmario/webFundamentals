// 1. Prints odds 1-20

for (var i = 1; i <= 20; i = i + 2) {
    console.log(i)
}

// 2. Sum and Print 1-5

var sum = 0; // holds current value, can change value of var outside for loop, inside of for loop

for (var i = 1; i <= 5; i++) {
    sum = sum + i;
    console.log("Num: " + i + " Sum: " + sum);
}
