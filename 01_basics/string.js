// const name = "debangshu"
// const repocount = 50

// // console.log(name + repocount + " value");


// // string interpotetion
// console.log(`Hello my name is ${name} and my repocount is ${repocount}`);

const gameName = new String("Deba-ngshu-dt")
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.length);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('g'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotheString = gameName.slice(-8,4)
console.log(newString);

const newString1 = "      hitesh        "
console.log(newString1)
console.log(newString1.trim())

const url = "https://hitesh.com/hitesh%20choudhary"
console.log(url.replace('%20','-'));

console.log(url.includes('hitesh'));
console.log(gameName.split('-'));

