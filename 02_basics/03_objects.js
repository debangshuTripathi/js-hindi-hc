// singleton 


// object literrals
//Object.create() ---> singleton(bad main vbaat krte hai)

const mysym = Symbol("key1")
const JsUser = {
    name : "Debangshu",
    "Full_Name" :"Debangshu Tripathi",
    age : 18,
    location : "Asansol",
    email: "debangshu@gmail.com",
    isLoggedIn: false,
    lastLoginDays : ["Monday","Saturday"],
    [mysym] : "My Key_1",


}
// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser["Full_Name"]);


// console.log(JsUser.mysym);
// console.log(typeof JsUser.mysym); // use symbol as a string 


// console.log(JsUser[mysym]); // use symbol as a symbol 
// console.log(typeof (JsUser[mysym])); 

JsUser.email = "debangshu@chatgpt.com"
// Object.freeze(JsUser)
JsUser.email = "devbangshu@microsoft.com"
console.log(JsUser);

JsUser.greating = function(){
    console.log("Hello Js user ");
    
}
JsUser.greating2 = function(){
    console.log(`Hello js user ${this.name}`);
    
}
console.log(JsUser.greating());
console.log(JsUser.greating2());
