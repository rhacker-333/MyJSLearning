// console.log("HELL")

// high order function

function add(a,b, cb){
    
    let result=a+b
    cb(result)

    return () => console.log(result)
}

// function showResult(result){
//     console.log(result)
// }

add(2,4,function(val){
    console.log(val);
} );

let resultFunction = add(2,4,() => {});
resultFunction();