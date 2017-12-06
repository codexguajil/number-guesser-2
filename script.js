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
var minValue = minRangeInput.value
var maxValue = maxRangeInput.value
var min = parseInt(minValue) || 10
var max = parseInt(maxValue) || 15
var rangeText = document.querySelector('.range-text')

clearButton.addEventListener('click', clearInputField)
guessButton.addEventListener('click', displayGuess);
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

function updateNumberRange() {
  randomNumberGenerator()
  if (min > max) {
    console.log('not a correct range')
    rangeText.innerText = 'not a range!'
  } else if (max > min) {
    rangeText.innerText = ''
  }
}

function randomNumberGenerator() {
  if (min > max) {
    console.log('not a correct range')
    rangeText.innerText = 'not a range!'
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

function guessFeedbackDisplay() {
  console.log('hello')
  var guessValue = parseInt(numberInput.value)
  guessDisplay.innerText = guessValue
  if (guessValue < min || guessValue > max) {
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
