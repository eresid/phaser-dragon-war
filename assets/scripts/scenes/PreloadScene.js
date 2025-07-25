class PreloadScene extends Phaser.Scene {
  constructor() {
    super("Preload");
  }

  preload() {
    this.load.image("fire", "assets/sprites/fire.png");
    this.load.image("bullet", "assets/sprites/bullet.png");

    this.load.atlas("dragon", "assets/sprites/dragon.avif", "assets/sprites/dragon.json");
    this.load.atlas("enemy", "assets/sprites/enemy.avif", "assets/sprites/enemy.json");
    this.load.atlas("explosion", "assets/sprites/explosion.avif", "assets/sprites/explosion.json");

    this.load.audio("theme", "assets/sounds/theme.mp3");
    this.load.audio("explosion", "assets/sounds/explosion.mp3");
  }

  create() {
    this.scene.start("Start");
  }
}
