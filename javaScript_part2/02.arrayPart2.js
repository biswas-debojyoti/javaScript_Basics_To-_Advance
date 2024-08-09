const myHeros = ["hanuman", "saktiman", "Krish"]
const bhagban = ["ram", "shyam", "krishna"]

// myHeros.push(bhagban)
const concat = myHeros.concat(bhagban)

console.log(concat)

const spread = [...myHeros, ...bhagban]

console.log(spread)


const arrNumber = [1,2,[2,3,4],4,5,[5,6,[6,7],7],8]

const allinone = arrNumber.flat(Infinity)

console.log(allinone)
