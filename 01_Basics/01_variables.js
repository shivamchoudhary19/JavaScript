const accountId = 1989732
let accountEmail = "shivam@gmail.com"
var accountPassword = "abc123"
accountCity = "Bhopal"
let accountState;   // variable declared but no value assigned gives output => "undefined"

// accountId = 34  => not allowed

accountEmail = "shivam@yahoo.com"
accountPassword = "xyz987"
accountCity = "Bengaluru"  // not recommended

console.log(accountId);

/*
Prefer not to use var
because of issue in block and functional scope
*/

console.table([accountId, accountEmail, accountPassword, accountCity, accountState])