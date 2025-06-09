function solution(participant, objletion) {
  // 변수 선언
  const obj = {};

  // 키: 참가자 이름, 값: 참가자 수
  for (const name of participant) {
    if (!obj[name]) {
      obj[name] = 1;
    } else {
      obj[name]++;
    }
  }

  // 완주했다면 참가자 수 - 1
  for (const name of objletion) {
    obj[name]--;
  }

  // 완주하지 못한 참가자의 이름 리턴
  for (const name in obj) {
    if (obj[name] > 0) return name;
  }
}