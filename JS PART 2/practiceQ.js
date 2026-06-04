// use querySelectorAll to select all buttons with class "buy-now "
let buynow=document.querySelectorAll(".buy-now");
console.log(buynow);

// TASK NO.: 01
// Select the heading of a page by ID and change its to "welcome to shreyians!"
    let heading=document.querySelector("#heading");
    heading.textContent="wlcome to shreyiansh!";

// select all <li> elements and print their text using a loop

let lis = document.querySelectorAll("li");
lis.forEach(function(val){
    console.log(val.textContent);         
});
// OR
let liss = document.querySelectorAll("li");
for(let i=0; i < liss.length; i++){
    console.log(liss[i].textContent);
}

// what is the difference between innerText, textContent, and innerHMTL ?

// TASK 03.
// SELECT A PARAGRAPH AND REPLACE ITS CONTENT WITH:
// <b> Updated </b> by javascript
let p=document.querySelector("p");
p.innerHTML = "<b>Updated</b> by javascript";

// HOW TO DO YOU GET THE SRC OF AN IMAGE USING JAVASCRIPT
// let img = document.querySelector("img");
// console.log(img.src);
//OR
// console.log(img.getAttribute("src"));

// // what does setAttribute() do?
// document.querySelector("img").setAttribute("src","https://images.unsplash.com/photo-1773088843510-277540282242?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw3fHx8ZW58MHx8fHx8");

// SELECT A LINK AND UPDATE ITS HREF TO POINT TO (https://shreyians.com)
let a = document.querySelector("a");
a.href = "https://www.shreyians.com"

// add a tittle attribute to div dynamically
let div = document.querySelector("div");
div.setAttribute("tittle","some Info");

// remove a disabled attribute from a button

let btn = document.querySelector("button");
btn.removeAttribute("disabled");

// what does createElement() do? what's returned ?
let h1=document.createElement("h1");
console.log(h1);

//difference between appendChild() and prepend()
//---> appendChild adds element to last and prepend adds element to first.

// can you remove an element using removeChild()?
document.querySelector("div").removeChild(elementNode)

// Create a new list item <li> New task </li> and add it to the end of a <ul>.
// DOUBT - it is not adding li to ul at the end see at after a while
let ul = document.querySelector("ul");
let li = document.createElement("li");

li.textContent = "New Task";
ul.appendChild(li);

// Create a new image element with a placeholder source and add it at the top of a div.

let img = document.createElement("img");
img.setAttribute("src","https://imgs.search.brave.com/tu80peDDYz46QJ-k5hQt-xJBiKLPdXDaWtkdTw-6rH8/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9jZG4t/ZnJvbnQuZnJlZXBp/ay5jb20vaG9tZS9h/bm9uLXJ2bXAvY3Jl/YXRpdmUtc3VpdGUv/YXVkaW8tY3JlYXRp/b24vdmlzdWFscy1z/b25ncy53ZWJw");
let div2=document.getElementById("div2").prepend(img);












