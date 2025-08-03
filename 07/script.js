console.log("Hello")

//Functions

function sayHello(){
    console.log("Hey Piyush")
}

sayHello()
sayHello()
sayHello()
sayHello()

//this is a function
function add(num1,num2){// these are arguments
    console.log(num1+num2)
}

add(5,10)// --> these are parameters


function mult(num1, num2){
   // console.log(num1*num2)
   return num1*num2;
}

// let result = mult(5,2)
// console.log(result)


function add1(){
       
    let ans=0

    for(let i =0;i<arguments.length;i++){
        ans+=arguments[i]
    }
    return ans
}

//add1(10,20,30,40,50)
let res = add1(10,20,30,40,50)
console.log(res)

//spread operator

function addUsingSpread(...numbers){

    ans =0

    for(let i =0;i<numbers.length;i++){
        ans+=numbers[i];
    }
    return ans;
}

res=addUsingSpread(10,20,30)
console.log(res)





