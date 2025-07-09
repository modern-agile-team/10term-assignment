// 표현식 배열로 만들기
function tokenize(expression) {
  return expression.match(/(\d+(\.\d+)?)|[+\-*/()]/g)
    .map(token => isNaN(token) ? token : Number(token));
}

// exit, 잘못된 입력 처리하기
function checkExpression(expression, input, output) {
  if (expression === 'exit') {
    alert('종료합니다.');
  }
  else if (expression === '' || !/^[0-9+\-*/().\s]+$/.test(expression)) {
    alert('계산식을 입력해주세요.');
  }
  else {
    return true;
  }

  output.textContent = '';
  input.value = '';
  return false;
}

// 중위 표기법을 후위 표기법으로 변환하기
function Postfix(tokens) {
  const output = [];
  const operator = [];
  const priority = { '+': 1, '-': 1, '*': 2, '/': 2 };

  for (const token of tokens) {
    if (!isNaN(token)) {
      output.push(token);
    }
    else if (token in priority) {
      while (operator.length && priority[operator[operator.length - 1]] >= priority[token]) {
        output.push(operator.pop());
      }
      operator.push(token);
    }

    else if (token === '(') {
      operator.push(token);
    }

    else if (token === ')') {
      while (operator.length && operator[operator.length - 1] !== '(') {
        output.push(operator.pop());
      }
      operator.pop();
    }
  }

  while (operator.length) {
    output.push(operator.pop());
  }

  return output;
}

// 후위 표기법 계산하기
function calculator(priority) {
  const stack = [];

  for (const token of priority) {
    if (typeof token === 'number') {
      stack.push(token);
    }
    else {
      const b = stack.pop();
      const a = stack.pop();
      const operators = {
        '+': (a, b) => a + b,
        '-': (a, b) => a - b,
        '*': (a, b) => a * b,
        '/': (a, b) => a / b
      };

      const result = operators[token](a, b);
      stack.push(result);
    }
  }
  return Math.round(stack[0] * 100) / 100;
}

// 계산 과정 연결하고 출력하기
function handleCalculator(input, output) {
  const expression = input.value.trim();
  if (!checkExpression(expression, input, output)) return;
  const tokens = tokenize(expression);
  const postfix = Postfix(tokens);
  const result = calculator(postfix);
  output.textContent = `결과: ${result}`;
  input.focus();
}

function main() {
  const input = document.getElementById('expression');
  const output = document.getElementById('output');
  const button = document.getElementById('submit');

  // 버튼 클릭 시 계산 실행
  button.addEventListener('click', () => handleCalculator(input, output));
  // Enter 키 입력 시 계산 실행
  input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      handleCalculator(input, output);
    }
  });
}

document.addEventListener('DOMContentLoaded', main);