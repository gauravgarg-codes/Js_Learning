
const prompt = require("prompt-sync")(); // *** must to include at the top to use prompt feature in node js

// this is the 4th step -- spin the slot machine
// use global variables

const ROWS = 3;
const COLs = 3;
// *** THIS IS THE COUNT OF THE SYMBOL AVIALABLE IN THE SLOT MACHINE
const SYMBOLS_COUNT = {
    "A":2,
    "B":4,
    "C":6,
    "D":8    
}  
// THIS VALUE MEAN IF LINE OF A MATCHED SO THE 5X OF BET AMOUNTWILL BE THE WINNING AMOUNT
 const SYMBOLS_VALUE = {
    "A":5,
    "B":4,
    "C":3,
    "D":2 
 }

const deposit = ()=>{
    while(true){
    const depositAmount = prompt("Enter a deposit amount: ");
    // ab to user ne input dia hai wo ek string hai ab usee number mein convert krna hai
    const numberdepositAmount = parseFloat(depositAmount);
    // now hmee abb check krna hai ki entered amount valid to hai na nhi hai to user ko intimate krna to deposit a valid bet amount
    if(isNaN(numberdepositAmount) || numberdepositAmount <= 0  ){
        console.log('Invalid deposit amount, try again.');
    }else{
        return numberdepositAmount; // or jab if wala case nhi hoga to return the user entered value to the function since it's correct

        }
    }
    // *** doubt why we pack it into a while loop condition
    
};
const getnumberofLines = ()=>{
    while(true){
    const lines = prompt("Enter number of lines to bet on (1-3): ");
    // ab to user ne input dia hai wo ek string hai ab usee number mein convert krna hai
    const numberoflines = parseFloat(lines);
    // now hmee abb check krna hai ki entered amount valid to hai na nhi hai to user ko intimate krna to deposit a valid bet amount
    if(isNaN(numberoflines) || numberoflines <= 0 || numberoflines >=3 ){
        console.log('Invalid number of lines to be betted on, try again.');
    }else{
        return numberoflines; // or jab if wala case nhi hoga to return the user entered value to the function since it's correct

        }
    }
    // *** doubt why we pack it into a while loop condition
    
};

// bet should like balance divided by the number of lines to bet

const getBet = (balance)=>{
    while(true){
        const bet = prompt("enter the bet per line : ");
        const numberBet = parseFloat(bet);
    // hmnee user se phele pucha ki kitna amount deposit krna hia fir hmne perline kitna bet dalni hai ye pucha then hmne check kia ki avialble deposited amount mein per line kitne ki bet possible hai fir hmne 
    //condition lagadi ki jo betting amount per linne entered by user wo greater hona chahiye from balance/no.of line.
    if(isNaN(numberBet) || numberBet > balance || numberBet>balance/lines ){
        console.log("Invalid Bet enter a valid Bet, try again ");
    } else{
        return numberBet;
        }

    }
}
// generating individual reel or column
const spin = ()=>{
    const symbols = []; // I took const here bcz i'm not changing the actual array i will just add and remove the value from the same array
    


}




let balance = deposit();
const bettedLines = getnumberofLines();
const bet = getBet();
//console.log(depositAmount);


