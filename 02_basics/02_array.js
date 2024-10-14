const marvel_heros = ["Thor","Ironman","Spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3])
// console.log(marvel_heros[3][1])

// const heros = marvel_heros.concat(dc_heros)
// console.log(heros)

const heros = [...marvel_heros,...dc_heros]
console.log(heros);


const anotherArray = [1,2,3,[4,5,6],7,[6,7,[4,5]]]

const real_another_array = anotherArray.flat(Infinity)
console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))
console.log(Array.from({neme: "hitesh"})) // intersting (keys)


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1,score2,score3))
