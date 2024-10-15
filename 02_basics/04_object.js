// const tinderUser = new Object() // singleton

const tinderUser = {}
tinderUser.user = "123abc"
tinderUser.name = "sam"
tinderUser.isLoggedIn = false

// console.log(tinderUser)

const regularUser = {
    email:"some@gmail.com",
    fullname:{
        usrefullName:{
            firstname :"debangshu",
            lastname: "Tripathi"

        }
    }
}
// console.log(regularUser.fullname.usrefullName.firstname)
// console.log(regularUser.fullname?.usrefullName.firstname) // optional chaining 

const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj4 ={5:"a",6:"h"}

// const obj3 = {obj1,obj2}
// const obj3 = Object.assign({},obj1,obj2,obj4)
const obj3={...obj1,...obj2,...obj4}
console.log(obj3);


const users = [
    {
        id : 1,
        email:"one@gamil.com",
    },
    {
        id : 1,
        email:"one@gamil.com",
    },
    {
        id : 1,
        email:"one@gamil.com",
    },
    {
        id : 1,
        email:"one@gamil.com",
    }
]
// users[1].email

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));
console.log(tinderUser.hasOwnProperty('isLoggedIn'));
