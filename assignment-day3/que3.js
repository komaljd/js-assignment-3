// assignment 3
// 1) if elseif condition

console.log("===========1) if elseif condition ==========");

let marks = prompt("Enter your Marks", 0);
console.log(Number(marks));

if ( marks === '50'){
    console.log(`Marks are ${marks} grade is B`);
}

else if ( marks >= '50'){
    console.log(`marks are ${marks} grade is A`);
}
else{
    console.log("You marks less than 50 marks grade is C");
}


// 1) Switch case
console.log("===========1) Switch case==========");

let markswitch = prompt("Enter Your marks");
console.log(Number(markswitch));

switch (markswitch) {
    case "50":
        console.log(`marks are ${markswitch} grade is B`);
        break;
    case "60":
    case "70": 
        console.log(`marks are ${markswitch} grade is A`);
        break;
    default:
        console.log(`You marks less than 50 marks grade is C`);
}

//3. Ternary

console.log("===========3) Ternary ==========");
let Tresult = prompt("Enter Your marks");
console.log(Number(Tresult));

let ternaryresult = 
Tresult  === 50 ? `You marks is ${Tresult} grade is B` :
Tresult  >= 50 ? `You marks is ${Tresult} grade is A` :
`You marks less than 50 marks grade is C`;
console.log(ternaryresult);
