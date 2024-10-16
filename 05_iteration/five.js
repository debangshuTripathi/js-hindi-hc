const coding = ["js","ruby","java","python","cpp"]

// coding.forEach( function  (item) {
//     console.log(item);
// })

// coding.forEach( (item) =>{
//     console.log(item);
    
// })

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

// coding.forEach((item, index, arr) => {
//     console.log(item ,index,arr);
    
// })

const my_coding =[
    {
        languagename : "javascript",
        languageFileName: "js"
    },
    {
        languagename : "java",
        languageFileName: "java"
    },
    {
        languagename : "pytho",
        languageFileName: "py"
    },
]

my_coding.forEach((item)=>{
    console.log(item.languagename);
    
})