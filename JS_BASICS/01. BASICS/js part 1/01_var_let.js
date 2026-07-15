const accountId = 144553
let accountEmail = "gaurav@google.com"
var accountPassword = "12345"
let accountCity = "jaipur" 
let accountState; // it shows undefined since no value assigned.

// accountId = 2 // not allowed

accountEmail = "gg@gg.com"
accountPassword = "21212121"
accountCity = "delhi"

/* 
    Prefer not to use "var"  bcz of issue in block scope and functional scope.
*/
console.log(accountId, accountEmail, accountPassword, accountCity);




 console.table([accountId, accountEmail, accountPassword, accountCity]);




 