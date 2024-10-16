const myobj = {
    js : "java script",
    cpp : "c++",
    rb : "Ruby",
    swift : "swift by apple "
}

for (const key in myobj) {
    //console.log(`${key} shortcut is ${myobj[key]}`);
    
}

const programming = ['js','rb','py','java','cpp']

for (const key in programming) {
    //console.log(programming[key]);
    
}

const map = new Map()
map.set('IN',"India")
map.set('USA',"United States of America")
map.set('FR',"France")


for (const key in map) { // not possible bcz maps are not iteratable
    console.log(key);
    
}