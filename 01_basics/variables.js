const accountId = 1443
let accountEmail = "debangshutripathi@gmail.com"
var accountPassword = "12345"
accountcity = "asansol"

let accountState
// accountId = 2 not valid 

// let and var --> diff scope 
/**
 * prefer not to use var 
 * bcz of issue in block scope and functional scope 
 */

accountEmail = "tripathi@yahoo.com"
accountPassword = 2121212
accountcity = "medinipur"

console.log(accountId);
console.table([accountEmail,accountId,accountPassword,accountcity,accountState])
