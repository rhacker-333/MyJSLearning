console.log("Hello")

const students = ["Piyush","John","Jane"]

function print(n){
    console.log(n)
}
// students.forEach((val)=>console.log(val))

// // for(let i=0;i<students.length;i=i+1){}


//students.map((val)=> console.log(val));

const numbers = [1,2,3,4,5]

// numbers.forEach((val)=>console.log(val*2))

// let arr1 = []

// numbers.forEach((val)=>arr1.push(val*2))

// console.log(arr1)

// let arr1 = numbers.map((val)=>val*2)
// console.log(arr1)

// let ans =numbers.find((num)=>num ===5)
// console.log(ans)

// let ans2= numbers.findIndex((num)=>num===4)
// console.log(ans2) 

// const newArr = numbers.filter((num)=> num%2==0)
// console.log(newArr)

// let newArr = numbers.slice(1,5)
// newArr = numbers.slice(4)
// console.log(newArr)

let newArr = numbers.splice(1,4)
console.log(newArr)
console.log(numbers)
