class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  create() {
    this.createBackground();
    this.cursors = this.input.keyboard.createCursorKeys();

    this.player = new Player(this);
    this.enemies = new Enemies(this);
    this.addOverlap();
  }

  update() {
    this.player.move();
    this.background.tilePositionX += 0.5;
  }

  addOverlap() {
    this.physics.add.overlap(this.player.fires, this.enemies, this.onOverlap, undefined, this);
  }

  onOverlap(source, target) {
    source.setAlive(false);
    target.setAlive(false);
  }

  createBackground() {
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "bg").setOrigin(0);
  }
}
