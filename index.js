let messageEl = document.getElementById("message-el")
let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")
let greetingEl = document.getElementById("greeting-el")
let playerEl = document.getElementById("player-el")


let hasBlackJack = false
let isAlive = false
let message = ""
let sum = 0
let cards = []

let player = {
  name: "Pedro",
  chips: 145
}

playerEl.textContent = player.name + ": $" + player.chips

function getRandomCard() {
  let randomNumber = Math.floor(Math.random()*13) + 1  
  if ( randomNumber > 10) {
    return 10
  } else if ( randomNumber === 1) {
    return 11
  } else {
    return randomNumber
  }
}

function startGame() {
  isAlive = true
  let firstCard = getRandomCard()
  let secondCard = getRandomCard()
  cards = [firstCard, secondCard]
  sum = firstCard + secondCard
  renderGame()
}

function renderGame() {
    if (sum <= 20) {
      message = "Would you like to draw a new card?"
      messageEl.textContent = "Would you like to draw a new card?"
      sumEl.textContent = "Sum: " + sum
      cardsEl.textContent = "Cards: "
          for (let i = 0; i < cards.length; i++) {
            cardsEl.textContent += " " + cards[i]
          }
        
    } else if (sum === 21) {
      hasBlackJack = true
      message = "Yep! You've got Blackjack!"
      messageEl.textContent = "Yep! You've got Blackjack!"
    } else {
      isAlive = false
      message = "You're out of the game!"
      messageEl.textContent = "You're out of the game!"
  }
}

function newCard() {
  if (isAlive === true && hasBlackJack === false) {
      let card = getRandomCard()
      sum += card
      cards.push(card)
      console.log(cards)
      renderGame()
  }
}
