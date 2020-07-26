/* global Phaser */

export default class Main extends Phaser.State {
  preload() {
    this.game.load.baseURL = "http://examples.phaser.io/assets/";
    this.game.load.crossOrigin = "anonymous";

    this.game.load.image("phaser", "sprites/phaser-dude.png");
  }

  create() {
    this.sprite = this.game.add.sprite(0, 0, "phaser");

    this.tween = this.game.add.tween(this.sprite);
    console.log(this.tween);

    this.tween.to();
  }
}
