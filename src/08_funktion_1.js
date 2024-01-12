/****** Funktionen 01 ******/
// 1. Kapslung von Codeblöcken

// Funktionsaufruf | call
// test();

// Funktionsrumpf | callee
// Funktionsdeklaration 
function test()
{
console.log("Hallo, Benjamin!");
}

/****** Funktionen 02a ******/
// 2a. Parametrisierung + Datenübergabe von INNEN

// Call
// ausgabeNamen();

// Funktion
function ausgabeNamen() {
    // interne Variable | What happens in VEGAS ...
    let firstName = "Maria";
    console.log("Hallo, " + firstName +"!");
}

// console.log(firstName); // Fehler : scope!

/****** Funktionen 02b ******/
// 2b. Parametrisierung + Datenübergabe von AUSSEN

// Argumente sind Datein für Parameter
// ausgabeNamen2("Maria"); // Argument --> Daten für Parameter!!
// ausgabeNamen2("Nadim");
// ausgabeNamen2("Melanie");

function ausgabeNamen2(firstName) { // Parameter
    console.log("Hallo, " + firstName +"!");
}

/****** Funktionen 02c ******/
// 2c. Mehrere Parameter / Argumente

ausgabeNamenParams("Max","Mütze");

const prompt = require('prompt-sync')({signit:true});
ausgabeNamenParams(prompt("Vorname? :"),prompt("Name? :")); // Piping 

function ausgabeNamenParams(firstName, familyName) { // Parameter
    console.log("Hallo, " + firstName + " " + familyName + "!");
}
