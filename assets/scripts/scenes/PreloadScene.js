class PreloadScene extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.image("fire", "assets/sprites/fire.png");
    this.load.atlas("dragon", "assets/sprites/dragon.avif", "assets/sprites/dragon.json");
    this.load.atlas("enemy", "assets/sprites/enemy.avif", "assets/sprites/enemy.json");
  }

  create() {
    this.scene.start("Start");
  }
}
