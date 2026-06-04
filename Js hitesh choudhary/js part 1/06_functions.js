// function SayMyName(){
//     console.log("G");
//     console.log("A");
//     console.log("U");
//     console.log("R");
//     console.log("A");
//     console.log("v");
// }

// SayMyName() ---> it is reference with execution
// SayMyName ---> it's just a reference not a execution

function addTwoNumber(num1, num2){
    console.log(num1+num2);
}

addTwoNumber(3,4)
addTwoNumber(3, "4")
addTwoNumber(3, null)
// that's why checking is important before execution 
//---------------------------------------------------
function hello(parameters){
    return
}
hello(arguments)
//----------------------------------------------------
function addTwoNumber(num1, num2){
    console.log(num1+num2);
}
// const result = addTwoNumber(3,5)
// console.log("Result: ", result);
// output 8 is due to console.log in function scope and it doesn't mean it retruning 8 it just printing 8
//----------------------------------------------------
function addTwoNumber(num1, num2){
    let result1 = num1+num2;
    return result1
}
const result = addTwoNumber(3,5)
console.log("Result: ", result); 
// result1=result ---> function scope 
//----------------------------------------------------
function addTwoNumber(num1, num2){
    return num1+num2
}
console.log(addTwoNumber(3,6));
//--------------------------------------------------

function loginUserMessage(username){
    return `${username} just logged in`
}
console.log(loginUserMessage("Gaurav"));
// "" empty string ---> o/p just logged in
// if no input so o/p will be Undefined not null
// so we check before executing our function

function loginUserMessage(username){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
// or
function loginUserMessage(username){
    if(!undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}

// undefined is a falsy value so !undefined means a true value so code block under if scope will run

// now to avoid break of execution we can pass some default values 

function loginUserMessage(username = "sam"){
    if(username === undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(loginUserMessage()); // no arguments given so function use defualt parameter.

//---------------------------PART 2 -----------------------------------
// jab number of arguments are unknown

function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(2)); // this is obevious situation 

// if your arguments not fixed 
function calculateCartPrice(num1){
    return num1
}
console.log(calculateCartPrice(200, 400, 500)); // first item ka price to include hojayega but baki nhi lega since 
// there is only one parameter exists

// SOLUTION TO THIS PROBLEM IS TO SOLVE BY "REST-OPERATOR" (...)
function calculateCartPrice2(...num1){
    return num1
}
console.log(calculateCartPrice2(200, 400, 500)); // NOW ALL THE ARGUMETNS COMBINED INTO AN ARRAY
// and now by manipulating array elements we can do many things apply buisness logic

function calculateCartPrice3(val1, val2,...num1){
    return num1
}
console.log(calculateCartPrice3(200, 400, 500,1000));
// 200-->val1, 400-->val2, and remaining go to num1

 const user ={
    username : "garuav",
    price: 199
 }
 function handleobject(anyobject){
    console.log(`username is ${anyobject.username} and the price is ${anyobject.price }`)
 }
//handleobject(user)
// here we can also pass the object directly.

handleobject({
    username:"Gaurav",
    price:399
})
// and similarly we can pass the array's as arguments in function

const newArray = [200, 400, 500]
function returnSecondvalue(getArray){
    return getArray[1]
}
console.log(returnSecondvalue(newArray));
// and here we can also do with array direct pass 
console.log(returnSecondvalue([200,300,1000]));













