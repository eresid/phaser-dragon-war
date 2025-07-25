class Fires extends Phaser.Physics.Arcade.Group {
  constructor(scene) {
    super(scene.physics.world, scene);
  }

  createFire(source) {
    let fire = this.getFirstDead();
    if (!fire) {
      fire = Fire.spawn(this.scene, source);
      this.add(fire);
    } else {
      fire.reset(source.x + source.width / 2, source.y);
    }

    fire.move();
  }
}
