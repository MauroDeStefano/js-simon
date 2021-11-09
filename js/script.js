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
const numsToUse = 6;
const numToRemember = generateNumToRemember(numsToUse);


const toHinner = document.querySelector(".to-hinner h1");
const toHinnerToH = document.querySelector(".to-hinner h3");
let awnser = [];

init(numsToUse ,numToRemember);

// funzione che genera un array composto da (numsToUse) composto da numeri casuali.
function generateNumToRemember(numsQuantity){
  const numbersOut = [];

  for (let i = 0; i < numsQuantity; i++){
    let numToControl = randomNumberGen(99, 1);
    if (!numbersOut.includes(numToControl)){
    numbersOut[i]= numToControl;
    console.log(numbersOut);
    }else{
      
      i--;
    }
  }

  return numbersOut;
};

function randomNumberGen(max, min){
  return Math.floor(Math.random() *(max - min)) + min;
};

function printArray(numbersIn, numArray) {
  for(let i = 0; i < numbersIn; i++){
    toHinner.innerHTML += `
    ${numArray[i]}
    `
  }
}

function init(numsToUse, arryOfnumbers){
  
  printArray(numsToUse, arryOfnumbers);
 
  setTimeout(function(){
    
    let counter = 0;
    let numbersGet = [];
    for(let i = 0; i < numsToUse; i++){
      awnser.push(parseInt(prompt("inserisci i numeri che ricordi")));
      if (arryOfnumbers.includes(awnser[i])){
        numbersGet.push(awnser[i]);
        counter++;
        // toHinner.innerHTML += `50

        // ${awnser[i]}
        // `;
        console.log(awnser[i]);
      }
    };
    
    toHinnerToH.innerHTML = `<h3>hai indovinato ${counter} numeri </h3>`
    toHinner.innerHTML = "";
    printArray(counter, numbersGet);

  }, 5000); 
}