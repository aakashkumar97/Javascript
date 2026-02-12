const accountId = 144553
let accountEmail = "aakash@gmail.com"
var accountPassword = "12345"
accountCity = "Ghaziabad"
let accountState

//accountId = 2

accountEmail = "aakash@google.com"
accountPassword = "1122330"

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.log(accountId);

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
