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

// const firstName = "Jane";
// let job;

// job = "driver"; // .. fährt TAXI! / UBER
// job = "diver"; // .. taucht im Rhein!
// job = "artist"; // .. malt ein Bild! 
// job = "pilot"; // .. fliegt ein Flugzeug!
// job = "teacher"; // .. unterrichtet!
// job = "instructer"; // .. unterrichtet!

// switch (job)
// {   
//     case "driver":
//         console.log(firstName + " fährt TAXI!");
//         break;
//     case "diver":
//         console.log(firstName + " taucht im Rhein!");
//         break;
//     case "artist":
//         console.log(firstName + " malt ein Bild!");
//         break;
//     case "teacher":
//     case "instructer":
//         console.log(firstName + " unterrichtet!");
//         break;
//     default:
//         console.log("Jane macht etwas anderes!")
//         break;
// }

/********** Fallunterscheidung / SWITCH|CASE 2 *********/

// const cond = false;
// const value = 2;

// switch (cond) {
//     case (value == 1):
//         console.log ("Value hat den Wert ist 1.");
//         break;
//     case (value == 2):
//         console.log ("Value hat den Wert ist 2.");
//         break;
//     default:
//         console.log ("Value hat einen anderen Wert.");
//         break;
// }