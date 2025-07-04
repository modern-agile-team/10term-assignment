function changeLog(userData, userLog) {
  for (let i = 0; i < userLog.length; i++) {
    const parts = userLog[i].split(" "); 
    const uid = parts[0];
    const action = parts[1];

    if (action === "IN") {
      userLog[i] = userData[uid] + "님이 들어왔습니다.";
    } else if (action === "OUT") {
      userLog[i] = userData[uid] + "님이 나갔습니다.";
    }
  }
}

function enterChat(userCommand, userData, userLog) {
  const userID = userCommand[1];
  const userName = userCommand[2];

  userData[userID] = userName;
  userLog.push(userID + " IN");
}

function changeChat(userCommand, userData) {
  const userID = userCommand[1];
  const userName = userCommand[2];

  userData[userID] = userName;
}

function leaveChat(userCommand, userLog) {
  const userID = userCommand[1];

  userLog.push(userID + " OUT");
}

function solution(record) {
  const database = {};
  const log = [];

  for (let i = 0; i < record.length; i++) {
    let newRecord = record[i].split(" ");

    if (newRecord[0] === "Enter") enterChat(newRecord, database, log);
    if (newRecord[0] === "Change") changeChat(newRecord, database);
    if (newRecord[0] === "Leave") leaveChat(newRecord, log);
  }

  changeLog(database, log);
  
  return log;
}