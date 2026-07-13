
const prompt = require("prompt-sync")(); // *** must to include at the top to use prompt feature in node js

// this is the 4th step -- spin the slot machine
// use global variables

const ROWS = 3;
const COLS = 3;
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
    const numberoflineslines = prompt("Enter number of lines to bet on (1-3): ");
    // ab to user ne input dia hai wo ek string hai ab usee number mein convert krna hai
    const numberoflines = parseFloat(numberoflineslines);
    // now hmee abb check krna hai ki entered amount valid to hai na nhi hai to user ko intimate krna to deposit a valid bet amount
    if(isNaN(numberoflines) || numberoflines <= 0 || numberoflines >3 ){
        console.log('Invalid number of lines to be betted on, try again.');
    }else{
        return numberoflines; // or jab if wala case nhi hoga to return the user entered value to the function since it's correct

        }
    }
    // *** doubt why we pack it into a while loop condition
    
};

// bet should like balance divided by the number of lines to bet

const getBet = (balance,numberoflines)=>{
    while(true){
        const bet = prompt("enter the bet per line : ");
        const numberBet = parseFloat(bet);
    // hmnee user se phele pucha ki kitna amount deposit krna hia fir hmne perline kitna bet dalni hai ye pucha then hmne check kia ki avialble deposited amount mein per line kitne ki bet possible hai fir hmne 
    //condition lagadi ki jo betting amount per linne entered by user wo greater hona chahiye from balance/no.of line.
    if(isNaN(numberBet) || numberBet > balance || numberBet>balance/numberoflines ){
        console.log("Invalid Bet enter a valid Bet, try again ");
    } else{
        return numberBet;
        }

    }
}
// generating individual reel or column *** doubts ->
const spin = ()=>{
    const symbols = []; // I took const here bcz i'm not changing the actual array i will just add and remove the value from the same array
   // now I have to loop through all the entries of mine SYMBOLS_COUNT 
    for(const [symbol,count] of Object.entries(SYMBOLS_COUNT)){
       // console.log(symbol,count);--> now we have over symbols and array now we add them into our symbols array 
        for(let i=0; i<count; i++){
            symbols.push(symbol);
        }
        
        
    };
    //console.log(symbols);
    //const reels = [[],[],[]]; // these are the 3 columns
    const reels = [];
    for(let i=0;i<COLS; i++){
            reels.push([]); // if No.of column less so code breaks
            const reelSymbols = [...symbols];
        for(j=0;j<ROWS;j++){
                const randomIndex = Math.floor(Math.random()* reelSymbols.length)
                const selectedSymbol = reelSymbols[randomIndex];
            reels[i].push(selectedSymbol);
            reelSymbols.splice(randomIndex,1);
        }
    }
    return reels;

}

// if the user won or not check 

const transpose = (reels) =>{
    const rows = [];
    for(let i = 0; i<ROWS; i++){
        rows.push([]);
        for(let j=0; j<COLS; j++){
            rows[i].push(reels[j][i]); 
        }
    }
    return rows;
};

const printRows = (rows)=>{
    for(const row of rows){
        let rowString = "";//  A | B | C
        for(const [i,symbol] of row.entries()){
            rowString += symbol
            if (i != row.length-1){
                rowString += " | "
            }
        } 
        console.log(rowString);
        
    }
};

const getWinnings = (rows ,bet, lines)=>{
    let winnings = 0;
    for ( let row = 0; row<lines; row++){
        const symbols = rows[row];
        let allSame = true;

        for( const symbol of symbols){
            if (symbol != symbols[0]){
                allSame = false;
                break;
            }
        }

        if (allSame){
            winnings += bet * SYMBOLS_VALUE[symbols[0]]
        }
    }

    return winnings;
};

const game =()=>{
    let balance = deposit();


    while(true){  
    console.log("You Have a balance of $" + balance)
    const numberoflines = getnumberofLines();
    const bet = getBet();
    balance -= bet*numberoflines;
    const reels = spin()
    const rows = transpose(reels);
    printRows(rows);
    const winnings = getWinnings(rows, bet, numberoflines)
    balance += winnings;
        console.log("you won, $" + winnings.toString());

    if (balance<=0){
        console.log("You have ran out of money!");
        break;
        }
    const playAgain = prompt("Do you want to play again (y/n)?");
        if(playAgain !="y"){
            console.log("GOOD TO HAVE YOU VISIT AGAIN !!");
            break;
        }

    } 
}


game();


//console.log(reels)
//console.log(depositAmount);

// [[A B C],[D D D],[A A A]] THESE ARE THE COLUMS 
/*
    [A D A] R-1
    [B D A] R-2   --->  TRANSPOSE OF MATRIX IS NEEDED TO CALCUALTE THE WINNING OF USER 
    [C D A] R-3
    BY USING ROWS WE CAN DETERMINE WHO IS WINNING AND NOT 

*/
