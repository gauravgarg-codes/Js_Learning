// // ARRAYS --> MORE THAN ONE VALUE CAN BE STORED AND IN JAVASCRIPT IT'S ARRAYS ARE QUUITE DIFFERENT FROM OTHER LANG SINCE 
// // HERE IN ARRAYS DIFFERENT TYPES OF DATA CAN BE STORED IN SAME ARRAY EX- NUMBER, CHARACTORS,FLOAT, INT, STRINGS ALL CAN BE STORED TOGETHER

// let marks =[10,20,30,40,50];
// marks[0] = 100; // CHANGING THE VALUE OF FIRST ELEMENT IN ARRAY
// console.log(marks); 

// //               ARRAY METHODS 

// arr.push(7000); // PUSH METHOD ADDS THE ELEMENT AT THE END OF THE ARRAY
// arr.pop(); // POP METHOD REMOVES THE LAST ELEMENT OF THE ARRAY 
// arr.shift(); // remove one element from the end or last one element ko remove krta hai.
// arr.unshift(4);// to add one element at the st. of array
// arr.splice(2,1);// kha se hatana start krna hai or kitni hatani hai 
// // index 2 se leke value hatani 1 to sirf index ki or 2 ko index wali value aur usse just agge wali and so on.
// arr.slice(0,3);// original array ki copy kreate karo and usme se ek slice cut krdo for given exmple
// // index 0 se index 3 ke ek phele element tak ki ek slice o/p->[1,2,3]
// arr.reverse();// change the main array and reverse the order of the array.
// // sort --> used to make the order decending order or accending order

// let arr=[11,33,45,21,5,98];
// let sr = arr.sort(function(a,b){
//     return a-b;// make accending order
//     return b-a; // make decending order
// })

// // FOREACH
// arr.forEach(function(val){
//     console.log(val);
//     console.log(val+5);
// })
// // MAP 
// arr.map(function(val){
//     return 12; // this is the onlu 
// }) // output--> [12,12,12,12,12,12] since map method creates a new array with the results of calling a provided function on every element in the calling array. In this case, it returns 12 for each element in the original array.
// // if you didn't return anything in the map function then it will return undefined for each element in the original array, resulting in an array of undefined values.



// // // FILTER
// // arr.filter(function(val){
// //     return (val>20) return true; // this will return a new array with only the values that are greater than 20 from the original array.
// // })


let arr = ["a", "b", "c", "d", "e"];
arr.splice(1, 2, "2");
   

function outer(){
    let username = "hitesh"
        function inner(){
            console.log(username);
        }
        inner();
}
outer();