// var c = 500

// let a = 300
// if(true){ // block_scope
//     let a = 100 
//     const b = 200
//     console.log("INNER : ",a);
    
// }
// console.log(a);
// console.log(b);
// console.log(a);

function one(){
    const username = "Debangshu"

    function two(){
        const website = "youtube"
        console.log(username);   
    }
    //console.log(website); 
    //two()
}

one()

if(true){
    const username = "Debangshu"
    if(username === "Debangshu"){
        const website = "_youtube "
        //console.log(username + website);
        
    }
    //console.log(website); // error
    
}
//console.log(username) // error

//++++++++++++++++++++++++++++ interesting ++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num+1
}

addTwo(5) // error ---> hoisting 
const addTwo = function(num){
    return num+2
}
