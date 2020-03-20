// L’utente inserisce due parole in successione, con due prompt. Il software stampa prima la parola più corta, poi la parola più lunga.

var word1, word2;

alert("Il software ti chiederà di inserire due parole. La più corta delle due verrà stampata per prima");
// chiedo all'utente di inserire la prima parola
word1 = prompt("Inserisci la prima parola");

// chiedo all'utente di inserire la seconda parola
word2 = prompt("Inserisci la seconda parola");

// logica e output della parola corta e della parola lunga
if (word1.length > word2.length) {
  document.getElementById('content-1').innerHTML = '<h2 class="short-word">' + 'Questa è la parola più corta: ' + word2 + '</h2>';
  alert("Ora il software stamperà la parola più lunga");
  document.getElementById('content-2').innerHTML = '<h2 class="long-word">' + 'Questa è la parola più lunga: ' + word1 + '</h2>';
} else if (word1.length < word2.length) {
    document.getElementById('content-1').innerHTML = '<h2 class="short-word">' + 'Questa è la parola più corta: ' + word1 + '</h2>';
    alert("Ora il software stamperà la parola più lunga");
    document.getElementById('content-2').innerHTML = '<h2 class="long-word">' + 'Questa è la parola più lunga: ' + word2 + '</h2>';
} else {
    document.getElementById('content-2').innerHTML = '<h2 class="equal-word">' + 'La parola: ' + word1 + ' è lunga come la parola: ' + word2 + '</h2>';
}
