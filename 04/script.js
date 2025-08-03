console.log("Hello")
console.log("Roy")



const age = 90;

// if(age >= 18){
//     console.log("yes, you can vote")
// }
// else if(age >=80){
//     console.log("yes yu a adult")
// }
// else{
//     console.log("cant vote")
// }

//Teranary

age >=18 ? console.log("Yes") : console.log("No");

const option =1;

switch(option){
    case 1: {
        console.log("Namaste");
    }
    break;
    case 2 : {
        console.log("Hello!")
    }
    break;
    case 3: {
        console.log("Bonjour");
    }
    break;
    default: console.log("Invalid Option");
}


let a =30;
let opt='+';
let b =40;

switch(opt){

    case '+': console.log(a+b);
    break;
    case '-': console.log(a-b);
    break;
    case '*': console.log(a*b);
    break;
    default: console.log("IDK");
}

