
// function sayMyName() {
//     console.log("H")
//     console.log("I")
//     console.log("T")
//     console.log("E")â
//     console.log("S")
//     console.log("H")
// }
// sayMyName()

// function addTwoNumbers(num1,num2){ // parameters(functio decleare)

//    console.log( num1+num2);
   
// }
// const result = addTwoNumbers(3,5) // arguments (function calling)


function addTwoNumbers(num1,num2){ // parameters(functio decleare)

//   let result = num1 + num2
//   return result

return num1+num2
   
}
const result = addTwoNumbers(3,5) // arguments (function calling)

// console.log("Result " ,result);

function loginUserMessage(username = "sam"){
    // if(username === undefined){
    //     console.log("piliz enter a username !");
    //     return
    // }
    if(!username){
        console.log("pilliz enter a username !");
        return
    }
    return `${username} just Logged In `
}

// console.log(loginUserMessage("Debangshu"))
console.log(loginUserMessage("Dipu"))