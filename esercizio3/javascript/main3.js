// Il software deve chiedere per 5 volte all’utente di inserire un numero. Il programma stampa la somma di tutti i numeri inseriti.

var number1, number2, number3, number4, number5;
var sum;


// messaggio per l'utente

alert("Il software ti chiederà di inserire un numero per cinque volte. Successivamente stamperà la somma di tutti i  numeri inseriti");


// chiedo all'utente di inserire un numero per cinque volte

number1 = parseInt(prompt("Inserisci qui il primo numero"));
number2 = parseInt(prompt("Inserisci qui il secondo numero"));
number3 = parseInt(prompt("Inserisci qui il terzo numero"));
number4 = parseInt(prompt("Inserisci qui il quarto numero"));
number5 = parseInt(prompt("Inserisci qui il quinto numero"));


// faccio la somma di tutti i numeri inseriti

sum = number1 + number2 + number3 + number4 + number5;


// ouput

document.getElementById('container').innerHTML = '<h1>' + 'La somma di tutti i numeri inseriti è: ' + sum;
