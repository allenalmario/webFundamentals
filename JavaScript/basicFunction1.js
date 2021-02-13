// Predicted right: 13/15

function a(){
    return 35;
}
console.log(a())

//Output: Nothing
// Wrong

function a(){
    return 4;
}
console.log(a()+a());

//Output: 8
// Right

function a(b){
    return b;
}
console.log(a(2)+a(4));

// Output: 6
// Right

function a(b){
    console.log(b);
    return b*3;
}
console.log(a(3));

//Output: 3, 9
// Right

function a(b){
    return b*4;
    console.log(b);
}
console.log(a(10));

//Output: 40
// Right

function a(b){
    if(b<10) {
        return 2;
    }
    else     {
        return 4;
    }
    console.log(b);
}
console.log(a(15));

//Output: 4
// Right

function a(b,c){
    return b*c;
}
console.log(10,3);
console.log( a(3,10) );

//Output: 10 3, 30
// Right

function a(b){
    for(var i=0; i<10; i++){
        console.log(i);
    }
    return i;
}
console.log(3);
console.log(4);

//Output: 3, 4
// Right

function a(){
    for(var i=0; i<10; i++){
        i = i +2;
        console.log(i);
    }
}
a();

// Output: 2, 5, 8, 11
// Right

function a(b,c){
    for(var i=b; i<c; i++) {
        console.log(i);
   }
   return b*c;
}
a(0,10);
console.log(a(0,10));

//Output: 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
// Right

function a(){
    for(var i=0; i<10; i++){
       for(var j=0; j<10; j++){
           console.log(j);
       }
       console.log(i);
    }
}

//Output: Nothing
// Right

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
console.log(z);

// Output: 10
// Right

var z = 10;
function a(){
    var z = 15;
    console.log(z);
}
a();
console.log(z);

//Output: 15, 15
// Wrong

var z = 10;
function a(){
    var z = 15;
    console.log(z);
    return z;
}
z = a();
console.log(z);

//Output: 15, 15
// Right