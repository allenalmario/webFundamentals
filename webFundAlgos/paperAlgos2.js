function foo(x,y){
    return 5;
}
console.log(foo(5,5));

// 5

function foo(x,y){
    var z = []
    z.push(x);
    z.push(y);
    z.push(5);
    console.log(z);
    return z;
}
var b = foo(2,2)
console.log(b);
console.log(foo(6,8));

// [2,2,5], [2,2,5], [6,8,5], [6,8,5]

function foo(x){
    var z = [];
    z.push(x);
    z.pop();
    z.push(x);
    z.push(x);
    return z;
}
var y = foo(2);
y.push(5);
console.log(y);

// [2,2,5]

function foo(x){
    if(x[0] <x [1]) {
        return true;
    }
    else {
        return false;
    }
}
var b = foo([2,3,4,5])
console.log(b);

// true

function foo(x){
    for(var i=0; i<x.length; i++){
        if(x[i] > 0){
            x[i] = "Coding"
        }
    }
}
console.log(foo([1,2,3,4]))

// undefined

function foo(x){
    for(var i=0; i<x.length; i++){
      if(x[i] > 5){
           x[i] = "Coding"
      }
      else if(x[i] < 0){
           x[i] = "Dojo"
      }
  }
}
console.log(foo([5,7,-1,4]))

// [5, 'coding', 'dojo', 4] WRONG NO RETURN

function foo(x){
    if(x[0] > x[1]) {
     return x[1];
    }
    return 10;
 }
 var b = foo([5,10])
 console.log(b);

// 10

function sum(x){
    var sum = 0;
    for(var i=0; i<x.length; i++){
       sum = sum + x[i];
       console.log(sum);
    }
    return sum;
}

// nothing ever calls it

function printAverage(x) {
    var sum = 0;
    for (var i = 0; i < x.length; i++) {
        sum += x[i];
    }
    var avg = sum / x.length;
    return avg;
}

var y = printAverage([1,2,3]);
console.log(y);

y = printAverage([5,2,8]);
console.log(y);

function returnOddArray(){
    var arr = [];
    for (var i = 1; i <= 255; i++){
        if (i % 2 != 0) {
            arr.push(i);
        }
    }
    return arr;
}

var y = returnOddArray();
console.log(y);

function squareValue(x){
    for (var i = 0; i < x.length; i++) {
        x[i] = x[i] * x[i];
    }
    return x;
}

var y = squareValue([1,2,3]);
console.log(y);

y = squareValue([2,5,8]);
console.log(y);