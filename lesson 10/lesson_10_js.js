

const gamingButton = document.querySelector('.gaming-btn');
const musicButton = document.querySelector('.music-btn');
const techButton = document.querySelector('.tech-btn');

gamingButton.addEventListener("click", function () {
  addToggleClassToButton(gamingButton, [musicButton, techButton])
});
musicButton.addEventListener("click", function () {
  addToggleClassToButton(musicButton, [gamingButton, techButton])
});

techButton.addEventListener("click", function () {
  addToggleClassToButton(techButton, [musicButton, gamingButton])
});


document.querySelector('#calculate-price-btn').addEventListener("click", calculatePrice);


function addToggleClassToButton(btn, disableBtnsArray) {


  if (!btn.classList.contains("is-toggled")) {
    btn.classList.add("is-toggled");
    for (i = 0; i < disableBtnsArray.length; i++) {
      disableBtnsArray[i].classList.remove("is-toggled");
    }

  }
}


function calculatePrice() {

  let price = Number(document.querySelector("#price-input").value);

  if (price < 0) {
    const resultPhrase = document.querySelector("#price-result");
    resultPhrase.classList.add('price-to-low');
    resultPhrase.innerHTML = `Error: cost cannot be less than $0.`
    return;
  }
  
  else if (price < 40) {
    price = (price * 100 + 1000) / 100;

  }
  document.querySelector("#price-result").innerHTML = `Your price is: $${price}`;



}


/* 

function addToggleClassToButton(btn) {
  if (!btn.classList.contains("is-toggled")) {
    btn.classList.add("is-toggled");

  }
  else {
    btn.classList.remove("is-toggled");
  }




}*/