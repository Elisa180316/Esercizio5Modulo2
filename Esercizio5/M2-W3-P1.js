/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione chiamata "area" che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato.
*/

/*  <h1>Calcolo dell'area di un rettangolo</h1>
	    <label>Base:</label>
	    <input type="text" id="base"><br>
	    <label>Altezza:</label>
	    <input type="text" id="altezza"><br>
	    <input type="button" onclick="area()" value="Calcola l'area"><br>
	    <label>Area:</label>
	    <input type="text" id="area">
 <script>
    function area() {
        var b = document.getElementById("base").value;
        var h = document.getElementById("altezza").value;
        var A = b * h;
        document.getElementById("area").value = A;
    }
    
</script> */

/* ESERCIZIO 2
 Scrivi una funzione chiamata "crazySum" che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma di quei due valori, ma se il loro valore è lo stesso allora deve ritornare la loro somma moltiplicata per 3.
*/

/* function crazySum (num1, num2) {
    
     if (num1 !== num2) {
        return sum = num1 + num2;
     
    } else {
        return sum = (num1 + num2) *3;
    }}
     console.log(crazySum(2,2)); */

/* ESERCIZIO 3
 Scrivi una funzione chiamata "crazyDiff" che calcola la differenza assoluta tra un numero fornito e 19.
 Se il valore calcolato è più grande di 19, la funzione deve tornare tale risultato moltiplicato per 3.
*/

/* function crazyDiff (num1, num2) {
        if (num1 - num2 <= 19){
        return diff = num1 - num2;
     } else (num1 - num2 > 19);
     return diff = (num1 - num2) * 3;
    }

    console.log(crazyDiff(25,1))A */

/* ESERCIZIO 4
 Scrivi una funzione chiamata "boundary", che accetta un numero intero come parametro e ritorna true se tale parametro è incluso tra 20 e 100 (incluso) o se è esattamente uguale a 400.
*/

/* function boundary (num1) {
        if (num1 >= 20 && num1 <= 100 || num1 === 400) {
        return true 
    } else 
    {
        return false;
    }
}
    console.log(boundary(200)); */

/* ESERCIZIO 5
 Scrivi una funzione chiamata "codify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "code" all'inizio della stringa fornita e ritornare il risultato, ma se la stringa fornita comincia proprio con "code" allora deve ritornarla senza modifiche.
*/

/*  function codify (str1) {
        if(str1 !== "code") {
            return (codify = "code".concat(str1))
        } else (str1 === "code") 
        {
            return codify;
        }
    }
    console.log(codify("run")) */

/* ESERCIZIO 6
 Scrivi una funzione chiamata "check3and7" la quale accetta un numero intero positivo come parametro.
 La funzione deve controllare che tale parametro sia un multiplo di 3 o di 7, e in tal caso tornare true; altrimenti deve tornare false.
 SUGGERIMENTO: operatore modulo
*/

/*  function check3and7 (num1) {
        if (num1  % 3 === 0 || num1 % 7 === 0) {
        return true
    } else {
        return false
    }
}

console.log(check3and7(10)) */

/* ESERCIZIO 7
 Scrivi una funzione chiamata "reverseString", che accetta una stringa come parametro e la ritorna invertita (es.: EPICODE => EDOCIPE).
*/

/*  function reverseString(str) {
    return str.split('').reverse().join('');
}

console.log(reverseString('Elisa'));   */

/* ESERCIZIO 8
 Scrivi una funzione chiamata "upperFirst", che accetta una stringa come parametro e la ritorna rendendo maiuscola ogni lettera iniziale di ogni parola.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 9
 Scrivi una funzione chiamata "cutString", che accetta una stringa come parametro e la ritorna senza il primo e l'ultimo carattere.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 10
 Scrivi una funzione chiamata "giveMeRandom", che accetta come parametro un numero chiamato n e ritorna un array contenente n numeri random contenuti tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
