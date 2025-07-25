class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.createBackground();
    this.cursors = this.input.keyboard.createCursorKeys();

    this.player = new Player(this);
    this.enemies = new Enemies(this);
  }

  update() {
    this.player.move();
    this.background.tilePositionX += 0.5;
  }

  createBackground() {
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "bg").setOrigin(0);
  }
}
