
// conversion to number

let score = 33 // cnfrm score is a number 
let marks = "33"
// const {score} = req.body --> value form se ayi hai kya pta number na ho , string ho or object mein ho.
// it is the syntax of taking value from frontend

console.log(typeof score);
console.log(typeof (score)); // as a method 
// both are correct

let valueInNumber = Number(marks) // for sure marks is a number now.
console.log(typeof valueInNumber); // --> number 

// now conversion to boolean.

let percentage = "33abc"
let valueInNumbers = Number(percentage)
console.log(typeof valueInNumbers);// --> number
console.log(valueInNumbers) // --> Nan (not a number) special number 

// "33"-> 33
// "33abc"-> Nan
// true -> 1 and false ->0

let isLoggedin = 1

let isLoggedIn = 1
let booleanisLoggedIn = Boolean(isLoggedIn)
console.log(booleanisLoggedIn);

// 1 -> true
// 0 -> false
// empty string -> false
// string -> true.

// conversion to strings 

let someNumber = 33
let stringNumber = String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

// bhaut saare conversion hai object ke and or bhi bhaut dekhenge dheere dheere
// browser jayada tar string mein output deta hai

//----------OPERATION------------//

 let value = 3
 let negvalue = -value
 // console.log(negvlaue) --> -3

 // basic arithmetic operations

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2/2);
// console.log(2+%2);
// console.log(2**2);

let str1 = "hello"
let str2 = "hitesh"

let str3 =str1+str2 // no subtraction only addition
console.log(str3);

console.log("1" + 2);//->12
console.log(1+"2");//-> 12
console.log("1"+2+2);// -> 122
console.log(1+2+"2");// -> 32
console.log(+true);// --> 1 (true+) not applicable
console.log(+"");// --> 0 
// Operator precendence important hota hai but project code ese nhi likhe jate 
let no = "12"
console.log(typeof no);
let noo =  +no;
console.log(noo);
console.log(typeof noo);

let num1, num2, num3
num1 = num2 = num3 =2+2 // ok but not readable

let gameCounter = 100
gameCounter++;
++gameCounter;
// study about prefix and post fix increament from mdn
console.log(gameCounter);
  
// link to study conversion- "https://tc39.es/ecma262/#sec-abstract-operations.html#sec-type-conversion"