// check of one value from ultple conditions 
// GENERAL SYNTAX
// switch(Key){
//     case value:
//         break;
//     default:
//         break;
// }

const month = 3
switch (month) {
    case 1:
        console.log("january")
        break;
    case 2:
        console.log("Febrary")
        break;
    case 3:
        console.log("March")
        break;
    case 4:
        console.log("april")
        break;

    default:
        console.log("default value match the case")
        break;
}

// use of the break is to get out of the code after matching the condition 

// if you have a string instead of number so use as it is going on 
// -----------------------------------**********--------------------------
// TRUTHY AND FALSY VALUES

const userEmail = []
 if (userEmail){
    console.log("got the user email")
 }
  else{
    console.log("Don't have the user email")
  }
// 8 falsy values in js and expect them all are truthy

// false, 0, -0, bigInt 0n, "", null, undefined, NaN
// TRUTHY
 // "0", 'false'," "-->string with space in it, [], {}, function(){}

if (userEmail.length === 0){
    console.log("array is Empty");
}

const emptyObj = {}
if (Object.keys(emptyObj).length===0){ // here when we call keys of object so it return into a array that's why we take length property to check it out     console.log("object is empty");
}

// GENERAL KNOWLEDGE KE LIYE HAI JUST --> COMPETETIVE PROGRAMMING KE LYE 
 // false == 0
 // false == ''
 // 0==''
 // the above all have true output
/**********************************************/
// Nullish Coalescing Operator (??): nul undefined
let vall;
vall = 5??10

console.log(vall)
// jha hmne 10 likha hai wha hm ek function daldete hai jo ek database se value call kr rha hota hai 
// or in case agr koi value nhi aa ti hai database s to wo usee null assign kr dete hai jisse code break na hio
 
// this operator jst only made for null and undefined

/* ------------------------------------------------------------- */
// TERNIARY OPERATOR 

//condition ? true:false

const IceTeaPrice = 100
IceTeaPrice <= 80? console.log("less than 80"): console.log("more than 80")



