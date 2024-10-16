const user = {
    username : "hitesh",
    price : "999",
    welcomeMessage: function(){
        console.log(`${this.username} welcome to website`);
        console.log(this)
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

//console.log(this); // {} empty_object ---> node 


// function chai (){
//     let username = "debangshu"
//     console.log(this.username);
    
// }
// chai()

// const chai =  function(){
//     let username = "debangshu"
//     console.log(this.username);
// }


const chai =  () =>{
    let username = "debangshu"
    console.log(this.username);
}

//chai()

// const addTwo= (num1,num2)=>  num1 + num2

//const addTwo = (num1,num2) => ( num1 + num2) // implicite return
const addTwo = (num1,num2) => ({username : "hitesh"}) // implicite return
console.log(addTwo(5,7));
