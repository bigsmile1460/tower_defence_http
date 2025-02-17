export class Inhibitor {
  constructor(x, y, maxHp) {
    // 생성자 안에서 기지의 속성을 정의한다고 생각하시면 됩니다!
    this.x = x; // 기지 이미지 x 좌표
    this.y = y; // 기지 이미지 y 좌표
    this.width = 170; // 기지 이미지 가로 길이 (이미지 파일 길이에 따라 변경 필요하며 세로 길이와 비율을 맞춰주셔야 합니다!)
    this.height = 225; // 기지 이미지 세로 길이
    this.hp = maxHp; // 기지의 현재 HP
    this.maxHp = maxHp; // 기지의 최대 HP
    this.status = "normal"; // 기지의 상태 (평범, 파괴)
  }

  draw(ctx, inhibitorImage,brokenInhibitorImage) {
    if(this.hp <= 0 ) {
      ctx.drawImage(
        brokenInhibitorImage,
        this.x - this.width,
        this.y - this.height / 2,
        this.width,
        this.height
      );
    } else {
    ctx.drawImage(
      inhibitorImage,
      this.x - this.width,
      this.y - this.height / 2,
      this.width,
      this.height
    );
  }
    ctx.font = "16px Arial";
    ctx.fillStyle = "white";
    if (this.status === "normal") {
      ctx.fillText(
        `억제기 HP: ${this.hp}/${this.maxHp}`,
        this.x - this.width,
        this.y - this.height / 2 - 10
      );
    } else {
      ctx.fillText(
        `억제기 재생성 중`,
        this.x - this.width,
        this.y - this.height / 2 - 10
      );
    }
  }
}
