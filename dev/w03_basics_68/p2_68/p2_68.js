const userInput = document.querySelector('#input-number');
const cBtn = document.querySelector('#btn-c');
const fBtn = document.querySelector('#btn-f');

function convertToCelsius() {
  const celsius = parseFloat(userInput.value);
  const fahrenheit = (celsius * 9) / 5 + 32;
  const output = `${celsius} C = ${fahrenheit.toFixed(2)} F`;
  displayResult(output);
}

function convertToFahrenheit() {
  const fahrenheit = parseFloat(userInput.value);
  const celsius = ((fahrenheit - 32) * 5) / 9;
  const output = `${fahrenheit} F = ${celsius.toFixed(2)} C`;
  displayResult(output);
}

function displayResult(output) {
  const resultElement = document.querySelector('#results');
  resultElement.innerHTML = `<h1 id="current-calculation">${output}</h1>`;
}

cBtn.addEventListener('click', convertToCelsius);
fBtn.addEventListener('click', convertToFahrenheit);
