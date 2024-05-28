let computerGuess;
let userGuess = [];
let userGuessUpdate = document.getElementById("textOutput")
let userNumberUpdate = document.getElementById("inputBox")
let audio = new Audio("assets/clickAudio.wav")

const init = () => {
    computerGuess = Math.floor(Math.random() * 100)

    document.getElementById("newGameButton").style.display = "none"
    document.getElementById("gameArea").style.display = "none"

}

init()

const startGame = () => {
    document.getElementById("welcomeScreen").style.display = "none"
    document.getElementById("gameArea").style.display = "block"
}

const startNewGame = () => {
    audio.play()
    document.getElementById("newGameButton").style.display = "block"
    userNumberUpdate.setAttribute("disabled", true)
} 

const newGameBegin = () => {
    audio.play()
    window.location.reload()
}

const compareGuess = () => {
    audio.play()
    const userNumber =  Number(document.getElementById("inputBox").value)
    userGuess = [...userGuess, userNumber]
    document.getElementById("guesses").innerHTML = userGuess

    if(userGuess.length < maxGuess){
        if(userNumber > computerGuess){
            userGuessUpdate.innerHTML = "Your guess is High 😯"
            userNumberUpdate.value = ""
        }
        else if(userNumber < computerGuess){
            userGuessUpdate.innerHTML = "Your guess is Low 😟"
            userNumberUpdate.value = ""
        }
        else{
            userGuessUpdate.innerHTML = "Yaaayyy! It's Correct 😄"
            userNumberUpdate.value = ""
            startNewGame()
        }
    }
    else{
        if(userNumber > computerGuess){
            userGuessUpdate.innerHTML = `You Loose! Correct No. was ${computerGuess}`
            userNumberUpdate.value = ""
            startNewGame()
        }
        else if(userNumber < computerGuess){
            userGuessUpdate.innerHTML = `You Loose!! correct no. was ${computerGuess}`
            userNumberUpdate.value = ""
            startNewGame()
        }
        else{
            userGuessUpdate.innerHTML = "Yaaayyy! It's Correct 😄"
            userNumberUpdate.value = ""
            startNewGame()
        }
    }

    document.getElementById("attempts").innerHTML = userGuess.length
}

const easyMode = () => {
    audio.play()
    maxGuess = 10
    startGame()
}

const hardMode = () => {
    audio.play()
    maxGuess = 5 
    startGame()
}