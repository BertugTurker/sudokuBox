let divDOM = document.getElementsByClassName("out")
let contDOM = document.getElementsByClassName("container")
let sayi = 0;
let harfSayi;

let suDOM = document.querySelector('#sudoku')
// function atama() {
//      sayi = Math.floor(Math.random() * 10)
//      harfSayi = `a${sayi}`
//    let newItem = document.createElement("div")
//    newItem.classList.add(harfSayi)
//    suDOM.appendChild(newItem)
//     //  divDOM[sayi].classList.add(harfSayi)
// }
// atama();
// for (let i = 0; 0 < divDOM.length; i++) {
//     divDOM[i].classList.add(harfSayi)
//  }

// contDOM[2].children(7)
// console.log(divDOM);

// function kutular() {
//    for (let i = 0; i < 10; i++) {
//       if(newItem.className !== harfSayi) {
//       sayi = Math.floor(Math.random() * 10)
//       harfSayi = `a${sayi}`
//       newItem.classList.add(harfSayi)
//       suDOM.appendChild(newItem)
//       } return console.log("var")
//    }
// }

// kutular();

function verGelsin() {
    let row = [
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
      [],
    ]
  
   for (let i = 0; i < 9; i++) {
     while (row[i].length < 9) {
    let sayi = Math.floor(Math.random() * 10)
    let harfSayi = `a${sayi}`
    if (!row[i].includes(harfSayi) && sayi != 0) {
        row[i].push(harfSayi)
        let newItem = document.createElement("div")
        newItem.classList.add(harfSayi)
        suDOM.appendChild(newItem)
      }
    }
   }
  
   } 
  ////
  verGelsin();