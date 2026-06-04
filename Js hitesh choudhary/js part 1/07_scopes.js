// let, var, cons
// let a =10
// const b = 20
// var c = 30

// console.log(a);
// console.log(b);
// console.log(c);
// var doesn't respect block scope
// {}--> this is the scope  don't confuse with object curly braces that are for object generation

// NESTED SCOPE

function one(){
    const username = "gaurav"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    //console.log(website);

    two()
}// one >> two
one()

if (true){
    const usernamee = "hitesh"
    if (usernamee === "hitesh"){
        const website = "youtube"
        console.log(usernamee+website);
    }
    //console.log(website);
}

//console.log(username);

//-------------------interesting-------------------

addone(5)
function addone(num){
    return num+1
}


addTwo(5) // shows error "cannot access before intialization bcz it is stored in a variable"
// this technique of declaring function is expression
const addTwo = function(num){
    return num+2
}
