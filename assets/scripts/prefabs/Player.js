class Player extends Enemy {
  constructor(scene) {
    super({
      scene,
      x: 150,
      y: config.height / 2,
      texture: "dragon",
      frame: "dragon1",
      velocity: 500,
      bullet: { delay: 500, texture: "fire", velocity: 750 },
      origin: { x: 1, y: 0.5 },
    });

    if (!this.scene.anims.exists("dragonFlyAnim")) {
      const frames = scene.anims.generateFrameNames("dragon", {
        prefix: "dragon",
        start: 1,
        end: 6,
      });

      scene.anims.create({
        key: "dragonFlyAnim",
        frames,
        frameRate: 10,
        repeat: -1,
      });
    }

    this.play("dragonFlyAnim");
  }

  move() {
    this.body.setVelocity(0);

    if (this.scene.cursors.left.isDown) {
      this.body.setVelocityX(-this.velocity);
    } else if (this.scene.cursors.right.isDown) {
      this.body.setVelocityX(this.velocity);
    }

    if (this.scene.cursors.up.isDown) {
      this.body.setVelocityY(-this.velocity);
    } else if (this.scene.cursors.down.isDown) {
      this.body.setVelocityY(this.velocity);
    }
  }
}
