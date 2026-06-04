// CONTROL FLOW IN JS

// if statement
//const IsUserloggedIn = true;
//if(IsUserloggedIn){
//    console.log("logged In")
//}

// short hand notation 
const balance = 1000
if (balance>500) console.log("test"); // here is scope is inbuilt since the code ends in same line\

// nesting 

if (balance<500){
    console.log("balance is less than 500")
}
else if(balance<750){
    console.log("balance is less than 750")
}
else if(balance<900){
    console.log("balance is less than 900")
}
else {
    console.log("less than 1200")
}

// real life uses

const IsUserloggedIn = true
const debitCard = true
const loggedInFromGoogle = true
const loggedInFromGmail = true


if(IsUserloggedIn && debitCard){
    console.log("allow to buy course");
}

if (loggedInFromGmail || loggedInFromGoogle){
    console.log("user logged In");
}
// conditional rendering
// agee jake conditional rendering bhi karenge jisme agr user logged in hai or upse tokens bhi
// hai to usee login button na dikhayo  uska text change krdo or usee log out button dikhaoo










