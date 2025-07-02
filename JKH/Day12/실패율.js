function calculator(N, fail, reach) {
  const failureRate = {};

  for (let i = 0; i < N; i++) {
    failureRate[i + 1] = reach[i] === 0 ? 0 : fail[i] / reach[i];
  }

  const entries = Object.entries(failureRate);
  const sorted = entries.sort((a, b) => b[1] - a[1] || a[0] - b[0]);
  return sorted.map(entry => Number(entry[0]));
}

function solution(N, stages) {
  const fail = Array(N).fill(0);
  const reach = Array(N).fill(0);

  for (let i = 0; i < stages.length; i++) {
    const current = stages[i];

    for (let j = 0; j < Math.min(current, N); j++) {
      reach[j]++;
    }
    
    if (current <= N) fail[current - 1]++;
  }

  return calculator(N, fail, reach);
}
