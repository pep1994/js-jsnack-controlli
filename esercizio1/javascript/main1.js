// L’utente inserisce due numeri in successione, con due prompt. Il software stampa il maggiore.

var number1, number2;

// messaggio all'utente
alert("Il software stabilirà il numero più grande tra i due che digiterai nella finestra successiva");

// chiedo all'utente di inserire il primo numero
number1 = parseInt(prompt("Inserici qui il primo numero"));

// chiedo all'utente di inserire il secondo numero
number2 = parseInt(prompt("Inserici qui il secondo numero"));

//logica e output del numero maggiore
if (number1 > number2) {
  document.getElementById('flex-container').innerHTML = '<h1 id="title">' + "Il numero maggiore che l'utente ha inserito è: " + number1 + '</h1>';
} else if (number1 < number2) {
    document.getElementById('flex-container').innerHTML = '<h1 id="title">' + "Il numero maggiore che l'utente ha inserito è: " + number2 + '</h1>';
} else {
    document.getElementById('flex-container').innerHTML = '<h1 id="title">' + "I numeri inseriti sono uguali " + '</h1>';
}
