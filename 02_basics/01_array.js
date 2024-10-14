// array


const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman","naajraj"]
const myArr2 = new Array(1,2,3,7)

// console.log(myArr[0]);

// array methods 
// myArr.push(6)
// myArr.push(7)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// myArr.unshift(9)
// myArr.shift()
// console.log(myArr);

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(5));

// const newArr = myArr.join() // convert into string

// console.log(myArr);
// console.log(newArr);


// slice , splice

console.log("A",myArr)
const myn1 = myArr.slice(1,3)
console.log("A",myn1);

console.log("B",myArr)
const myn2 = myArr.splice(1,3) // chages the original arrray ---> splice 

console.log(myn2);
console.log(myArr);






