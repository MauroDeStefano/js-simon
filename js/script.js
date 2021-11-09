// Descrizione:
// Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l’utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
// Consigli del giorno:
// * Pensate prima in italiano.
// * Dividete in piccoli problemi la consegna.
// * Individuate gli elementi di cui avete bisogno per realizzare il programma.

/*
--1--Fare una funzione che generi 6 numeri  casuali da uno a 99 e li insierisca all' interno di un array
--2--fare un timing di trenta secondi che elimini l'output dei numeri generati in 1 e mi faccia fare 6 prompt dove inserire i numeri che ci ricordiamo.
--3-- se i numeri che ci ricordiamo corrispondono ai numeri estratti all'inizio restituirli in pagina.
*/

const numToRemember = generateNumToRemember(6);

const numsToUse = 6;
const toHinner = document.querySelector(".to-hinner");

init(numToRemember);

// funzione che genera un array composto da (numsToUse) composto da numeri casuali.
function generateNumToRemember(numsQuantity){
  const numbersOut = [];

  for (let i = 0; i < numsQuantity; i++){
    numbersOut[i]= randomNumberGen(99, 1);
    console.log(numbersOut);
  }

  return numbersOut;
};

function randomNumberGen(max, min){
  return Math.floor(Math.random() *(max - min)) + min;
};

function init(arryOfnumbers){
  
  toHinner.innerHTML = `
  <div class="container-num d-flex text-center justify-content-center align-items-center flex-column"><h3>Ricordati questi numeri</h3>
    <h1>${arryOfnumbers[0]},${arryOfnumbers[1]},${arryOfnumbers[2]},${arryOfnumbers[3]},${arryOfnumbers[4]},${arryOfnumbers[5]}</h1>
    </div>
  `;
 
  setTimeout(function(){

    toHinner.innerHTML = "";

    for(let i = 0; i < numsToUse; i++);

  }, 5000);
}