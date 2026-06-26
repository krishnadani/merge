const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function calculate(expression) {
  return Function(`"use strict"; return (${expression})`)();
}

function prompt() {
  rl.question('Enter expression (or type exit): ', (input) => {
    const trimmed = input.trim();
    if (trimmed.toLowerCase() === 'exit') {
      rl.close();
      return;
    }

    try {
      const result = calculate(trimmed);
      console.log(`Result: ${result}`);
    } catch (error) {
      console.log('Invalid expression. Use numbers and operators like + - * / % ** and parentheses.');
    }

    prompt();
  });
}

console.log('Simple JavaScript calculator');
console.log('Enter an arithmetic expression and press Enter.');
console.log('Type exit to quit.');

prompt();
