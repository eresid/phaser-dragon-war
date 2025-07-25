class Enemy extends DynamicObject {
  static generateAttributes() {
    const x = config.width + 200;
    const y = Phaser.Math.Between(100, config.height - 100);
    return { x, y, frame: `enemy${Phaser.Math.Between(1, 4)}` };
  }

  static spawn(scene, fires) {
    const data = Enemy.generateAttributes();

    return new Enemy({
      scene,
      fires,
      x: data.x,
      y: data.y,
      texture: "enemy",
      frame: data.frame,
      velocity: -250,
      bullet: { delay: 1000, texture: "bullet", velocity: -500 },
      origin: { x: 0, y: 0.5 },
    });
  }

  init(data) {
    super.init(data);
    this.setOrigin(data.origin.x, data.origin.y);
    // data.fires = for enemies, new Fires = for player
    this.fires = data.fires || new Fires(this.scene);

    this.timer = this.scene.time.addEvent({
      delay: data.bullet.delay,
      loop: true,
      callback: this.fire,
      callbackScope: this,
    });
  }

  fire() {
    this.fires.createFire(this);
  }

  reset() {
    const attributes = Enemy.generateAttributes();
    super.reset(attributes.x, attributes.y);

    this.setFrame(attributes.frame);
  }

  isDead() {
    return this.x < -this.width;
  }
}
