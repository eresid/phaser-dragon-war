class Fire extends DynamicObject {
  static spawn(scene, source) {
    const data = {
      scene,
      x: source.x,
      y: source.y,
      texture: source.bullet.texture,
      velocity: source.bullet.velocity,
    };

    return new Fire(data);
  }

  isDead() {
    return this.x < -this.width || this.x > config.width + this.width;
  }
}
