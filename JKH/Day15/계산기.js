const input = document.getElementById("inputCalc");
const button = document.getElementById("submitCalc");
const result = document.getElementById("resultCalc");

button.addEventListener("click", () => {
  const expression = input.value;

  if (expression === "exit") {
    alert("프로그램 종료");
    result.textContent = "프로그램 종료";
    return;
  }

  const output = main(expression);
  result.textContent = output;
});

function trimInput(input) {
  const output = input.slice().replace(/\s+/g, "");
  
  return output;
}

function parseTokens(input) {
  const tokens = input.match(/(\d+(\.\d+)?|[+\-*/])/g);
  const output = [];

  for (let token of tokens) {
    if (!isNaN(token)) {
      output.push(Number(token));
    } else {
      output.push(token);
    }
  }

  return output;
}

function highPriorityCalculator(input) {
  let idx = 1;
  let output = input.slice();

  while (output.includes("*") || output.includes("/")) {
    if (idx >= output.length - 1) {
      idx = 1;
      continue;
    }

    if (output[idx] === "*" || output[idx] === "/") {
      const result =
        output[idx] === "*"
          ? output[idx - 1] * output[idx + 1]
          : output[idx - 1] / output[idx + 1];
      output.splice(idx - 1, 3, result);
      idx = 1;
      continue;
    }
    
    idx++;
  }
  return output;
}

function lowPriorityCalculator(input) {
  let idx = 1;
  let output = input.slice();

  while (output.includes("+") || output.includes("-")) {
    if (idx >= output.length - 1) {
      idx = 1;
      continue;
    }
    
    if (output[idx] === "+" || output[idx] === "-") {
      const result =
        output[idx] === "+"
          ? output[idx - 1] + output[idx + 1]
          : output[idx - 1] - output[idx + 1];
      output.splice(idx - 1, 3, result);
      idx = 1;
      continue;
    }
    
    idx++;
  }
  return output;
}

function formatResult(input) {
  const output = Number.isInteger(input[0])
    ? input[0]
    : Number(input[0].toFixed(2));

  return output;
}

function main(input) {
  const noSpace = trimInput(input);

  const tokens = parseTokens(noSpace);

  const afterHigh = highPriorityCalculator(tokens);

  const afterLow = lowPriorityCalculator(afterHigh);

  const finalResult = formatResult(afterLow);

  return finalResult;
}