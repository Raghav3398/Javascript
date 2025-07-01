const accountID = 12445
let accountEmail = "raghav@gmail.com"
var accountPassword = "12345"
accountCity = "Surat"

// accountID = 2  // not allowed
accountEmail = "rj@gmail.com"
accountPassword = "456789"
accountCity = "Mumbai"

console.log(accountID);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountID, accountEmail, accountPassword, accountCity])
