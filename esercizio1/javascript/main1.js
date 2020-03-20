// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var number1, number2;

// chiedo all'utente di inserire il primo numero
number1 = parseInt(prompt("Inserici qui il primo numero"));

// chiedo all'utente di inserire il secondo numero
number2 = parseInt(prompt("Inserici qui il secondo numero"));

//logica e output del numero maggiore
if (number1 > number2) {
  document.getElementById('title').innerHTML = "Il numero maggiore che l'utente ha inserito è: " + number1;
} else if (number1 < number2) {
    document.getElementById('title').innerHTML = "Il numero maggiore che l'utente ha inserito è: " +number2;
} else {
    document.getElementById('title').innerHTML = "I numeri inseriti sono uguali";
}
