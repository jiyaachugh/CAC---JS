const accountId = 1432;
let accounEmail = "Jiya@gmail.com"
var accountPswd =  "hello123";
accountCity = "New Delhi"; //possible but not recommended

//accountId = 2 // not allowed

accountEmail = "Jc@jc.gmail.com"
accountPswd = "hello"
accountCity = "Banglore"

console.log(accountId);

/*
prefer not use - beacuse of issue in block scope and functional scope
*/
console.table([accountId,accounEmail, accountPswd, accountCity])