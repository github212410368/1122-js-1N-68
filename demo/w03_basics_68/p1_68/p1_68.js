let c, f;
c = Number(prompt('Enter a temperature in C: '));
console.log('c', c);
f = ((c * 9.0) / 5 + 32).toFixed(2);
const output = `${c} C = 68.00 F`;
console.log(output);

const result = document.querySelector(`.result`);
result.textContent = output;
