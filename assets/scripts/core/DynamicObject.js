class DynamicObject extends Phaser.GameObjects.Sprite {
  constructor(data) {
    super(data.scene, data.x, data.y, data.texture, data.frame);
    this.init(data);
  }

  init(data) {
    this.scene.add.existing(this);
    this.scene.physics.add.existing(this);
    this.body.enable = true;
    this.velocity = data.velocity;

    this.scene.events.on("update", this.update, this);
  }

  reset(x, y) {
    this.x = x;
    this.y = y;
    this.setAlive(true);
  }

  update() {
    if (this.active && this.isDead()) {
      this.setAlive(false);
    }
  }

  setAlive(status) {
    // activate or deactivate the physical body
    this.body.enable = status;

    // show or hide texture
    this.setVisible(status);

    // activate or deactivate object
    this.setActive(status);
  }

  isDead() {
    return false;
  }

  move() {
    this.body.setVelocityX(this.velocity);
  }
}
