import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function () {
  //write your code here
  const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
 
  const palosTop = ["♦", "♥", "♠", "♣"];
 

  function randomCards(arr) {
    // Done: Generador de ramdom
    let randObject = arr[Math.floor(Math.random() * arr.length)]
    if (randObject.includes("♥") || randObject.includes("♦")) {
      card.style.color = "red"
    } else { document.getElementById("card").classList.remove("text-danger") }


    return randObject
  }


  function setNewValue() {
    let paloT = randomCards(palosTop)
    // Cambia el palo del top izquierdo de la carta
    document.getElementById("palo-top").innerHTML = paloT
    // Cambia el palo de abajo derecha de la carta
    document.getElementById("palo-bot").innerHTML = paloT
    //        Cambiar el valor de la carta
    document.getElementById("cardValue").innerHTML = randomCards(values)
  }
  setNewValue()

};
