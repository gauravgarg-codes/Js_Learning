const user = {
    username: "hitesh",
    price:999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`) // here we use this to refer current context only the parent scope the child
        console.log(this);
    }
}

user.welcomeMessage()

user.username = "gaurav" //our context is not hard coded we changed the context tha's why the output changed


user.welcomeMessage()

console.log(this); // output is empty here, current context is empty
// since we are in node enviornment and this refers to context in global scope where no context is avialabel
// console.log(this)-->but now in browser so, It will give window object as current context or global object.


// ARROW FUNCTION 

function one(){
    let username = "Gaurav"
    console.log(this);// this ko kisi function ke andr print krne pr bhaut saree chizee aati hai
    // but we cannot access our current context in functions using this
    console.log(this.username); // gives undefined ye jo context wala tarika ke functions mein kaam nhi krta

    
}
one()

const chai = ()=>{
    console.log("gaurav");
}

// Arrrow

const addTwo = (num1, num2)=>{
    return num1+num2

}
console.log(addTwo(3,5));

// if we use parenthesis instead of curly braces

const addThree =(n1,n2,n3)=>(n1+n2+n3)
console.log(addThree(1,2,3));
// abb parenthesis se ek fayeda aur hoya hai, hm object bhi return kr sakte hai
// krto curlybraces mein bhi sakte hai but clean code nhi bnta fir...!

// this in Arrow funciton

const game = ()=>{
    let usernaam = "sam"
    console.log(this.username); // gives undefined
    console.log(this); // gives empty object
}
game()

