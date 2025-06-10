function solution(absolutes, signs) {
  const result = absolutes.reduce((acc, cur, idx) => {
      if (signs[idx]) return acc + cur;
      return acc - cur;
  }, 0);

  return result;
}