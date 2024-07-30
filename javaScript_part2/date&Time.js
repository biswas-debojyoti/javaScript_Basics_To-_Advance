let time = new Date();
console.log(time)

// console.log( time.toString())
// console.log( time.toLocaleString())
// console.log( time.toDateString())


let myTime = new Date(2024 , 7 ,30 , 19 ,1)
console.log( myTime.toLocaleString())
console.log( myTime.toDateString())


let presentTime = Date.now();
console.log(Math.floor(presentTime/(1000*60*60*24*365)))



