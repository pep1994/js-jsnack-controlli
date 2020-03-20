// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var word1, word2;

alert("Ti verrà chiesto di inserire due parole, il software stamperà prima la parola più corta e poi quella più lunga");

// chiedo all'utente di inserire la prima parola
word1 = prompt("Inserisci la prima parola");

// chiedo all'utente di inserire la seconda parola
word2 = prompt("Inserisci la seconda parola");

// logica e output della parola corta e della parola lunga
if (word1.length > word2.length) {
  document.getElementById('short-word').innerHTML = "Questa è la parola più corta: " + word2;
  alert("Ora il software stamperà la parola più lunga");
  document.getElementById('long-word').innerHTML = "Questa è la parola più lunga: " + word1;
} else if (word1.length < word2.length) {
  document.getElementById('short-word').innerHTML = "Questa è la parola più corta: " + word1;
  alert("Ora il software stamperà la parola più lunga");
  document.getElementById('long-word').innerHTML = "Questa è la parola più lunga: " + word2;
} else {
  document.getElementById('short-word').innerHTML = "Le parole inserite sono della stessa lunghezza";
}
