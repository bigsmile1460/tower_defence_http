import stageOperator from "../../operator/stageOperator.js";
import { clearStage } from "../../Storages/stage.storage.js";
import { createTowers } from "../../Storages/tower.storage.js";

// 토큰 검증
export const stageStart = async (socket, payload, userId) => {
  try {
    clearStage(userId);

    // 시작 시 스테이지(스토리지) 생성
    const [stage, highScore] = await stageOperator.stageStart(userId);

    // 시작 시 타워(스토리지) 생성
    createTowers(userId);

    // 스테이지 변경함수 시작
    await stageOperator.stageChangeData(socket, userId);

    // 클라이언트로 게임 시작 정보 전달
    socket.emit("event", {
      handlerId: 1,
      payload: {
        stage,
        highScore,
      },
    });

    return { status: "success", message: `스테이지 시작 중 에러 발생` };
  } catch (error) {
    console.log(error.message, error);
    return { status: "fail", message: `스테이지 시작 중 에러 발생` };
  }
};
