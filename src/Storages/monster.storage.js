// 몬스터에 대한 휘발성 메모리 저장
import { v4 as uuidv4 } from "uuid";
const monsterInfo = {};

//몬스터 정보
//플레이어ID(토큰이용), 체력, 공격력, 이동속도, 점수, 골드, 스테이지, UUID(객체정보),

//유저가 게임 진행중인 몬스터 생성
export const addMonster = (userId, monster) => {
  // 유저가 처음 몬스터를 생성할 경우, 배열 초기화
  if (!monsterInfo[userId]) {
    monsterInfo[userId] = [];
  }

  //몬스터 uuid 제공 - 객체 분류
  const monsterUUID = uuidv4();

  //생성되는 몬스터에게 객체 고유값 uuid 제공
  const newMonster = { ...monster, uuid: monsterUUID };
  monsterInfo[userId].push(newMonster);

  // console.log("몬스터 객체 확인:", monsterInfo)
  return newMonster;
};

export const getMonsters = (userId) => {
  return monsterInfo[userId];
};

// 유저의 몬스터 개수 확인
export const getMonsterLength = (userId) => {
  return (monsterInfo[userId] && monsterInfo[userId].length) || 0;
};

export const clearMonsters = (userId) => {
  delete monsterInfo[userId];
};
