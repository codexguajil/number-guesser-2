window.onload = function() {randomNumberGenerator();  
                enableOrDisableBtn();
              }

var numberInput = document.querySelector('.number-input')
var guessButton = document.querySelector('.submit')
var guessDisplay = document.querySelector('.guess-display')
var guessFeedback = document.querySelector('.guess-feedback')
var guessValue = parseInt(numberInput.value)
var clearButton = document.querySelector('.clear')
var resetButton = document.querySelector('.reset')
var minRangeInput = document.querySelector('.min-range')
var maxRangeInput = document.querySelector('.max-range')
var rangeText = document.querySelector('.range-text')

clearButton.addEventListener('click', clearInputField)
guessButton.addEventListener('click', displayGuess)
resetButton.addEventListener('click', resetGame)
numberInput.addEventListener('keyup', enableOrDisableBtn)
minRangeInput.addEventListener('keyup', randomNumberGenerator)
maxRangeInput.addEventListener('keyup', randomNumberGenerator)

function enableOrDisableBtn() {
  if (numberInput.value === '') {
    clearButton.classList.add('disabled') & resetButton.classList.add('disabled') & guessButton.classList.add('disabled')
  }
  else (
    clearButton.classList.remove('disabled') & resetButton.classList.remove('disabled') & guessButton.classList.remove('disabled')
    )
}

function randomNumberGenerator() {
  var minValue = minRangeInput.value
  var maxValue = maxRangeInput.value
  window.min = parseInt(minValue) || 10
  window.max = parseInt(maxValue) || 15
  if (min > max) {
    console.log('not a correct range')
    rangeText.innerText = 'not a range!'
    randomNumber = ''
    return
  } else if (max > min) {
    rangeText.innerText = ''
  }
  randomNumber = Math.floor(min + Math.random() * ((max - min) + 1))
  console.log(randomNumber)
}

function displayGuess() {
  guessDisplay.innerText = parseInt(numberInput.value)
  guessFeedbackDisplay()
}

function clearInputField() {
  numberInput.value = ''
}

function resetGame() {
  location.reload()
}

function guessFeedbackDisplay() {
  console.log('hello')
  var guessValue = parseInt(numberInput.value)
  guessDisplay.innerText = guessValue
  if(randomNumber === '') {
    guessFeedback.innerText = 'You don\'t have a correct range!'
  }
  else if (guessValue < min || guessValue > max) {
    guessFeedback.innerText = 'Outside of range!'
  }
  else if(guessDisplay.innerText === 'NaN') {
    guessFeedback.innerText = 'Not a number!'
    console.log(guessValue)
  }
  else if (guessValue > randomNumber) {
    guessFeedback.innerText = 'That is too high!'
  }
  else if (guessValue < randomNumber) {
    guessFeedback.innerText = 'That is too low!'
  }
  else if (guessValue === randomNumber) {
    guessFeedback.innerText = 'Boom!'

    randomNumberGenerator()
  }
  console.log('done!')
}
