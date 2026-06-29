// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked (log it out)
// change the count-el in the HTML to reflect the new count

let countEl = document.getElementById("el-count")

console.log(countEl);

let count = 0
function increment(){
    console.log("clicked");
    count= count+1
    countEl.innerText = count
    console.log(count);
}

