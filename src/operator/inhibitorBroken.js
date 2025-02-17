import { BROKEN, NORMAL } from "../constants.js";
import { prismaAsset } from "../lib/utils/prisma/index.js";
import { addMonster } from "../Storages/monster.storage.js";
import {
  getInhibitorHpLimit,
  getinhibitorInterval,
  getStage,
  setInhibitorHp,
  setInhibitorStatus,
} from "../Storages/stage.storage.js";

// 억제기 파괴 / 재생성
export const inhibitorBroken = async (socket, userId) => {
  // 억제기 상태 파괴로 변경
  setInhibitorStatus(userId, BROKEN);

  // 현재 스테이지에 맞는 특수 몬스터 생성
  const stageId = getStage(userId).stageId;
  const specialMonsterData = await prismaAsset.specialMonster.findFirst({
    where: { stage: stageId },
  });
  const specialMonster = addMonster(userId, specialMonsterData);

  // 일정 시간 후 억제기 상태 normal로 회복
  const restorTime = getinhibitorInterval(userId);
  const inhibitorMaxHp = getInhibitorHpLimit(userId);
  setTimeout(() => {
    if (!getStage(userId)) {
      return;
    }
    setInhibitorStatus(userId, NORMAL);
    setInhibitorHp(userId, inhibitorMaxHp);

    // 클라이언트로 억제기 회복 소식 전달
    socket.emit("event", {
      handlerId: 12,
      payload: { status: NORMAL, inhibitorHp: inhibitorMaxHp },
    });
  }, restorTime);

  // 클라이언트로 억제기 파괴 소식 전달
  socket.emit("event", {
    handlerId: 12,
    payload: {
      status: "broken",
      specialMonster: specialMonster,
      inhibitorHp: inhibitorMaxHp,
    },
  });
};
