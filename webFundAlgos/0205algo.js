// Change. Change is inevitable (especially when breaking a twenty). Make generateCoinChange(cents). 
// Accept a number of American cents, compute and print how to represent that amount with 
// smallest number of coins. Common American coins are pennies (1 cent), nickels (5 cents), 
// dimes (10 cents), quarters (25 cents), and a dollar (100 cents).

function generateCoinChange(cents) {
    var pennies = 1;
    var nickels = 5;
    var dimes = 10;
    var quarters = 25;
    var dollar = 100;
    
    console.log(`Dollars: ${Math.floor(cents/dollar)}`);
    cents = cents % 100;
    console.log(`Quarters: ${Math.floor(cents/quarters)}`);
    cents = cents % 25;
    console.log(`Dimes: ${Math.floor(cents/dimes)}`);
    cents = cents % 10;
    console.log(`Nickels: ${Math.floor(cents/nickels)}`);
    cents = cents % 5;
    console.log(`Pennies: ${Math.floor(cents)}`);
}

generateCoinChange(50);

//173
//pennies: 3
//nickels:0
//quarters: 2
//dime: 2
//dollar: 1
