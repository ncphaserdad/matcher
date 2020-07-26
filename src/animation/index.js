/* global Phaser */

import Main from "./states/Main";

export default class Animation extends Phaser.Game {
  constructor({ width, height, parent, options = {} }) {
    super(width, height, Phaser.AUTO, parent, null, false);

    this.state.add("Main", Main, false);

    this.state.start("Main");
  }
}
