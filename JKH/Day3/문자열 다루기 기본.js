function solution(s) {
  
  if(s.length !== 4 && s.length !== 6) return false;

  if(/[^0-9]/.test(s)) return false;

  return true;
}