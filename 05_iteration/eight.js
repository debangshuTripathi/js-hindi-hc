const myNums = [1,2,3]
const myTotal = myNums.reduce( (acc,curr_val)=>{
    console.log(`acc : ${acc} & curr_val : ${curr_val}`);
    return acc + curr_val
} , 0)

//console.log(myTotal);


const shopping_cart = [
    {
        itemname: "Js corse",
        price:2999
    },
    {
        itemname: "python",
        price:999
    },
    {
        itemname: "data science course ",
        price:12999
    },
    {
        itemname: "mobile dev course ",
        price:5999
    },
  
]

const add = shopping_cart.reduce( (acc,item) => item.price+ acc ,0)
console.log(add);
