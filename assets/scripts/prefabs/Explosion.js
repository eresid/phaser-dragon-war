class Explosion extends Phaser.GameObjects.Sprite {
  static spawn(scene, x, y) {
    return new Explosion({ scene, x, y });
  }

  constructor(data) {
    super(data.scene, data.x, data.y, "explosion", "explosion1");

    this.scene.add.existing(this);

    if (!this.scene.anims.exists("explosionAnim")) {
      const frames = this.scene.anims.generateFrameNames("explosion", {
        prefix: "explosion",
        start: 1,
        end: 4,
      });

      this.scene.anims.create({
        key: "explosionAnim",
        frames,
        frameRate: 10,
        repeat: 0,
      });
    }

    this.play("explosionAnim");

    this.once(Phaser.Animations.Events.ANIMATION_COMPLETE, (animation, frame) => {
      if (animation.key === "explosionAnim") {
        this.destroy();
      }
    });
  }
}
