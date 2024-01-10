
/*********   CODE CHALLENGE 01 **********/
 
/*
Geben Sie über eine Prompt-Anforderung eine Zahl ein.
Geben Sie über eine Prompt-Anforderung eine zweite Zahl ein.
Berechnen Sie die Summe der beiden Zahlen.
Geben Sie die Summe der Zahlen in die Konsole aus:
"Die Summe der Zahlen ist: summe"
*/

// Variante Jasper

// const prompt = require('prompt-sync')({sigint: true});

// let zahl1 = Number(prompt("zahl 1 = "));

// let zahl2 = Number(prompt("zahl 2 = "));

// let summe = Number(zahl1 + zahl2);

// Variante Behrang

// const prompt = require('prompt-sync')({sigint: true});

// Benutzer zur Eingabe der ersten Zahl auffordern
// let zahl1 = prompt("Geben Sie die erste Zahl ein:");

// Benutzer zur Eingabe der zweiten Zahl auffordern
// let zahl2 = prompt("Geben Sie die zweite Zahl ein:");

// Konvertiere die eingegebenen Werte von String zu Zahl
// zahl1 = parseFloat(zahl1);
// zahl2 = parseFloat(zahl2);

// Überprüfe, ob die Eingaben gültige Zahlen sind
// if (isNaN(zahl1) || isNaN(zahl2)) {
//  console.log("Ungültige Eingabe. Bitte geben Sie gültige Zahlen ein.");
// } else {
  // Berechne die Summe der Zahlen
//  let summe = zahl1 + zahl2;

  // Gebe die Summe in die Konsole aus
//  console.log("Die Summe der Zahlen ist: " + summe);

// console.log("das ergebnis von "+ zahl1 +" + " + zahl2 + " lautet " + summe);

// Die 3 Varianten von Herr Schmidt

/*********** Variante 1  ****************/
// Vorteil: gute Lesbarkeit | aber viele Variablen

// let ziffer1, ziffer2, zahl1, zahl2, summe;

// ziffer1 = prompt("Bitte Zahl 1 eingeben: ");
// ziffer2 = prompt("Bitte Zahl 2 eingeben: ");

// console.log("Datentyp: " + typeof ziffer1);
// console.log("Datentyp: " + typeof ziffer2);

// // Typkonvertierung 1: ziffer --> zahl (mit Nachkomma)
// zahl1 = parseFloat(ziffer1);
// zahl2 = parseFloat(ziffer2);

// console.log("Datentyp: " + typeof zahl1);
// console.log("Datentyp: " + typeof zahl2);

// summe = zahl1 + zahl2;

// console.log("Die Summe der Zahlen ist: " + summe);

/*********** Variante 2  ****************/

// Kompaktere Lösung

// let zahl1, zahl2, summe;

// zahl1 = parseInt(prompt("Zahl 1: "));
// zahl2 = parseInt(prompt("Zahl 2: "));

// summe = zahl1 + zahl2;

// console.log("Die Summe der Zahlen ist: " + summe);

/*********** Variante 3  ****************/
// Kompakt, aber schlechter lesbar, unflexibel

// console.log
// (
//     "Die Summe ist: " + 
//    (
//     parseFloat(prompt("Bitte Zahl 1 eingeben ")) +
//     parseFloat(prompt("Bitte Zahl 2 eingeben "))
//    ) 
// 
// );

