console.log("Hello People")

// //Loops

// // if you know how many times to loop
// for(let i=1; i<=10; i=i+1){
//         console.log("Piyush"+i)

// }

// while loop 

/*

*/

// let ip =0
// let house =100

// // while(ip!=house){
// //     ip=ip+1;
// //     console.log("Step Taken"+ip)
// // }


// // // 


// do{
//     ip=ip+1;
//     console.log("Step taken"+ip);
// }while(ip<=house);


let number =40;

let guess =0;

do{
    guess = parseInt(prompt("Guess a number"))
    if(guess == number ){
        break;
        alert("Winner");
    }
        

}while(guess!=0)