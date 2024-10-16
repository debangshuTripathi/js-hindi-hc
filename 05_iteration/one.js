// for 

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);

// }

for(let i = 1;i<=10;i++){
    // console.log(`Outer loop value : ${i}`);
    
    for(let j = 1;j<=10;j++){
        // console.log(` inner  value is : ${j}`);
        //console.log(`${i} * ${j} = ${i*j}`);
        
    }
}

let myArr = ["flash","batman","superman"]

for (let index = 0; index < myArr.length; index++) {
    const element = myArr[index];
    //console.log(element);
    
}

// break and continue 
for(let i = 1;i<=20;i++){
    if(i === 5) {
        console.log("Detected 5 ");
        //break
        continue
    } 
    console.log(`value of i is ${i}`);


    
}