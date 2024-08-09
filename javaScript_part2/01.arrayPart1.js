
//  array 

const myArray = [0, 1, 2, 3, 4, 5];

const myHerros = ["thor", "ironman"];

const myArray2 = new Array(1, 2, 3, 4)


myArray.push(6)  // a new element added at last position of the array
myArray.pop()    // last element will delete from the array

myArray.unshift(99,98)  // a new element will added at first position of the array  
myArray.shift()  //  first element will delete from the array

console.log(myArray)

const newArr = myArray.join()  // this convert the arrat as a string
console.log(typeof newArr)



 // slice and splice
 const myArray3 = [0, 1, 2, 3, 4, 5, 6, 7];

 const sliceArr = myArray3.slice(2,4) // slice will create a new array that you want to creat indexNo to indexNo

 const spliceArr = myArray3.splice(2,5) // it will cut the main array and create a new array that you want to. 
 console.log(sliceArr)
 console.log(spliceArr)

