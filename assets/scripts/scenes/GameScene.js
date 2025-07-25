class GameScene extends Phaser.Scene {
  constructor() {
    super("Game");
  }

  init() {
    this.score = 0;
  }

  create() {
    this.createBackground();
    if (!this.sounds) {
      this.createSounds();
    }
    this.cursors = this.input.keyboard.createCursorKeys();

    this.player = new Player(this);
    this.enemies = new Enemies(this);

    this.addOverlap();
    this.createCompleteEvents();
    this.createText();
  }

  createText() {
    this.scoreText = this.add.text(50, 50, "Score: 0", {
      font: "40px CurseCasual",
      fill: "#ffffff",
    });
  }

  update() {
    this.player.move();
    this.background.tilePositionX += 0.5;
  }

  addOverlap() {
    this.physics.add.overlap(this.player.fires, this.enemies, this.onOverlap, undefined, this);
    this.physics.add.overlap(this.enemies.fires, this.player, this.onOverlap, undefined, this);
    this.physics.add.overlap(this.player, this.enemies, this.onOverlap, undefined, this);
  }

  onOverlap(source, target) {
    if (source !== this.player && target !== this.player) {
      ++this.score;
      this.scoreText.setText(`Score: ${this.score}`);

      const enemy = [source, target].find((item) => item.texture.key === "enemy");
      Explosion.spawn(this, enemy.x, enemy.y);
      this.sounds.explosion.play();
    }

    source.setAlive(false);
    target.setAlive(false);
  }

  createCompleteEvents() {
    this.player.once("killed", this.onComplete, this);
    this.events.once("enemies-killed", this.onComplete, this);
  }

  onComplete() {
    this.scene.start("Start", {
      score: this.score,
      completed: this.player.active,
    });
  }

  createBackground() {
    this.background = this.add.tileSprite(0, 0, config.width, config.height, "bg").setOrigin(0);
  }

  createSounds() {
    this.sounds = {
      explosion: this.sound.add("explosion", { volume: 0.1 }),
      theme: this.sound.add("theme", { volume: 0.2, loop: true }),
    };

    this.sounds.theme.play();
  }
}
