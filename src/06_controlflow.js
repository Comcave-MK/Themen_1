// Entscheidungsstrukturen | control flow

// Deklaration + Assignment
// const ageJohn = 30;
// const ageMark = 30;

// // Deklaration
// let isJohnOlder, isJohnEqual;

// Test | Logische Aussage
// isJohnOlder = (ageJohn > ageMark);
// isJohnEqual = (ageJohn == ageMark);

// Ausgabe
// console.log("ageJohn: " + ageJohn);
// console.log("ageMark: " + ageMark);
// console.log("isJohnOlder: " + isJohnOlder);
// console.log("isJohnEqual: " + isJohnEqual);
// console.log("------------------");

/************ IF ************/
// TINA --> There is no alternative!
// entweder JA oder nix ... alternativlos
// Türsteher-Politik (Doors 10 p.m.)

// if (true)
// if (false) 
// if (isJohnOlder)
// if (ageJohn > ageMark)
// {
//     console.log("John ist älter!");
// }

/************ IF - ELSE  ************/
// mit Alternative  
// entweder ja oder nein

// if (true)
// if (false)
// if (isJohnOlder)
// if(ageJohn > ageMark)
// {
//     console.log("John is älter!");
// }
// {
// else 
// }
// {
//     console.log("John ist jünger!");
//}

/************  Ternäre (ternary) Schreibweise ************/
// console.log( (isJohnOlder) ? "John is older" : "Mark is older");

// if(isJohnOlder)
// // Ja- Zweig
// {
//     console.log("John ist älter!");
// } 
// // alternative Zweige ... 1 .n
// else if(isJohnEqual)
// {
//     console.log("John ist gleich alt!");
// }
// // gemeneinsame Alternative
// else 
// {
//     console.log("John ist jünger!");
// }


/****** Fallunterscheidung / SWITCH/CASE 1 ******/

const firstName = "Jane";
let job;

job = "Driver"; // .. fährt TAXI! / UBER
job = "Diver"; // .. taucht im Rhein!

switch (job)
{   
    case "driver":
        console.log(firstName + " fährt TAXI!");
        break;
    case "diver":
        console.log(firstName + " taucht im Rhein!");
        break;

    default:


        break;

}