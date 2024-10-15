
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
// console.log(loginUserMessage("Dipu"))

// ... ---> spread operator

function calculateCartPrice(...num1){ // ... ---> rest operator 
    return num1
}
console.log(calculateCartPrice(200,400,600));


const user = {
    username : "debangshu",
    price : 785
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
handleObject({
    username:"sam",
    price:528
})
// handleObject(user)

const myNewArray = [200,400,600,800]

function returnsecoendvalue(getArray){
    return getArray[1]
}
console.log(returnsecoendvalue(myNewArray))
console.log(returnsecoendvalue([1,2,58,9,5,3]))