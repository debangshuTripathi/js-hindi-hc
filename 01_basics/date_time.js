// dates 

let myDate = new Date()

// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());
// console.log(myDate.toLocaleString());
// console.log(typeof(myDate));

// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23 ,5 ,3)
// let myCreatedDate = new Date("2004-08-13")
let myCreatedDate = new Date("08-13-2004")
console.log(myCreatedDate.toLocaleString());
console.log(myCreatedDate.toDateString());


let myTimeStamp = Date.now()

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());
console.log(Math.floor(Date.now()/1000));

let new_date = new Date()
console.log(new_date.getMonth()+1)
console.log(new_date.getDay())


new_date.toLocaleString('default',{
    weekday:"long",
})